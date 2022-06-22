import React from "react"
import {getFirestore, getDocs, doc, collection, query, where} from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { Container, Spinner, Row } from "react-bootstrap"

/*  ACA IRIA LA LISTA DE PRODUCTOS QUE CREE EN ITEM*/
export default function ItemListContainer({catId}) {

    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        
        const db = getFirestore()
        if(catId){
            const res = query(
                collection(db, "productos"), 
                where("productId","==",catId)
            )
            
            getDocs(res).then((snapshots) => {
                if (snapshots.size === 0) {
                 console.log("no hay productos") 
                }
                setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            console.log(items)    
            });
        } else {
        const productsRef = collection(db, "productos");
            getDocs(productsRef).then((snapshots) => {
              if (snapshots.size === 0) {
                console.log("No hay productos");
              }
              setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
              setLoading(false);
            });    
        }
     console.log(loading)   
     },[catId,loading])

  return( 
      <div class="d-flex justify-content-center">
            {loading ? (<Spinner Spinner animation="grow" variant="success" />)
                    : (<ItemList ListProd={items}/>) } 
      </div>
               
  );
}