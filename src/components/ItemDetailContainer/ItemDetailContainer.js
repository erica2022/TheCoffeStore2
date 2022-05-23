import React from "react";
import Coffee from "../ItemDetail/ItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../data/Products";
import Item from "../Item/Item";

export default function ItemDetailContainer ({ detailId }) {
    const [item, setItem] = React.useState ([])

    React.useEffect(() => {
      setItem(products.find(item => item.id === +detailId));
    }, [detailId]);


    return(
        <ItemDetail coffee={item}/>
    )
}