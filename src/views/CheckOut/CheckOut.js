import React from "react";
import {Container, Form, Button, Col, Row} from "react-bootstrap"
import { Context } from "../../context/Context"
import {getFirestore, collection, addDoc, doc, runTransaction, Timestamp} from "firebase/firestore"
import FinishOrder from "../../components/FinishOrder/FinishOrder"
import Resume from "../../components/Resume/resume";
import Forms from "../Form/Form"

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
        const order = {
          buyer: data,
          items: newOrder,
          status: "generada",
          date: Timestamp.fromDate( new Date),
          total: total(),
        };
        
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        const productsCollection = collection(db, "productos")
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

    const Equal = () => {
      return (data.email === data.email2)
    }

    return(
    (show) ? (
      <Container>
        <h1 className="title">FINALIZAR COMPRA</h1>
        <Row>
          <Col sm="6">
            <Forms handleChange={handleChange} handleSubmit={handleSubmit} value={data.email === data.email2}/>
          </Col>
          <Col sm="6">
            <Resume/>
          </Col>
        </Row>
      </Container>
    )
    :(<Container>
      <FinishOrder orderId={orderId} data={data}/>
      </Container>
    )
)
}
