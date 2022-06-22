import React from "react";
import Coffee from "../ItemDetail/ItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Item from "../Item/Item";

export default function ItemDetailContainer ({ detailId }) {
    const [item, setItem] = React.useState ({})

    React.useEffect(() => {
      const db = getFirestore()
      const prod = doc(db,"productos", detailId)
      getDoc(prod).then ((snapshot) => {
        setItem ({id: snapshot.id, ...snapshot.data()})  
      })
    }, [detailId]);
    return(
        <ItemDetail coffee={item}/>
    )
}