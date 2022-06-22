import React from "react";
import {Container, Form, Button} from "react-bootstrap"
import { Context } from "../../context/Context"
import {getFirestore, collection, addDoc, doc, runTransaction} from "firebase/firestore"

export default function CheckOut () {

    const {coffeeCart, total, clear} = React.useContext(Context)  

    const [data, setData] = React.useState()
    const [orderId, setOrderId] = React.useState()
    const [newOrder, setNewOrder] = React.useState([])
    const [show, setShow] = React.useState(true); //ESTO LO AGREGUE PARA SABER SI YA REALIZO LA COMPRA O NO....

    //ME GUARDA EN DATA LOS IMPUTS
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });   
    }

    React.useEffect(() => {
          coffeeCart.map(item =>  setNewOrder([...newOrder, {Id: item.id, Price: item.price, Cantidad: item.quantity,Title: item.title}]))  
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
 
//      setNewOrder(newArray)
        console.log(coffeeCart)
               
        const order = {
          buyer: data,
          items: newOrder,
          total: total(),
        };
      
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        const productsCollection = collection(db, "productos")
        await console.log(newOrder) 
        await addDoc(ordersCollection, order).then(({id}) => {
          setOrderId(id);
          updateProducts()
          setShow(false)
          clear()
        }) 
      }


    const updateProducts = async () => {
        const db = getFirestore ()
        coffeeCart.forEach( async (item) => {
          const productRef = doc(db, "productos", item.id)
          await runTransaction(db, async (transaction) => {
          const transfDoc = await transaction.get(productRef);
          if (!transfDoc.exists()) {
            console.error("El documento no existe")
          }
          const newStock = transfDoc.data().stock - item.quantity;
          transaction.update(productRef, { stock: newStock });
        });
        })
      }


return(
    (show) ? (
    <Container>
        <h1 className="title">FINALIZAR COMPRA</h1>
    <div class="col-6" >
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label >Nombre:</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="name" onChange={handleChange}/>        
        <Form.Label style={{ marginTop:'20px'}}>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Correo electrónico" name="email" onChange={handleChange}/>
        <Form.Label style={{ marginTop:'20px'}}>Teléfono:</Form.Label>
        <Form.Control type="phone" placeholder="Teléfono" name="phone" onChange={handleChange}/>
        <Button style={{ marginTop:'30px'}} type="submit" variant="secondary">Finalizar compra</Button>
      </Form.Group>
    </Form>
     </div>
     </Container>
    )
    :(<>
      <h1 className="title">Su pedido con nro de Orden <b>{orderId}</b> ha sido aceptado.</h1>
      </>
    )
)

}
