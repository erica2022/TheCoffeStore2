import React from "react"
import { products } from "../../data/Products"
import ItemList from "../ItemList/ItemList"

/*  ACA IRIA LA LISTA DE PRODUCTOS QUE CREE EN ITEM*/
export default function ItemListContainer({catId, title}) {
/*  PROMESA
    const [ListProd, SetListProd] = React.useState([])

    const loadProds = new Promise((resolve, rejected) => {
    setTimeout (() => {
        resolve(products);
    },2000)

    })

    React.useEffect(() => {
        loadProds
        .then ((res)=> SetListProd(res))
        .catch((error) => console.log(error))
    },[])*/

    const [items, setItems] = React.useState([])
    React.useEffect(()=> {
        if (catId) { setItems(products.filter(item => item.productId === catId))}
        else {setItems (products)}
    },[catId])


  return(
      <ItemList ListProd={items}/>
  );
}