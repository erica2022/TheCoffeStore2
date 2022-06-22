import React from "react"

const Context = React.createContext();
const {Provider} = Context;

const CartProvider = ({children}) => {
    const [coffeeCart, setCoffeeCart] = React.useState([])
    const [totalCart, setTotalCart]= React.useState (0)

// AGREGA UN PRODUCTO AL CARRITO Y AUMENTA SU CANTIDAD SI ESTA / ACTUALIZA EL VALOR TOTAL DE LA COMPRA
const addItem = (coffee, count) => {
    if(isInCart(coffee.id)) {
        const newCart = coffeeCart.map(item => {if(item.id === coffee.id) {item.quantity++} })
        setCoffeeCart(newCart)
    }
    else {
        setCoffeeCart([...coffeeCart, {...coffee, quantity: +count}])
    }
    //setTotalCart(totalCart+coffee.price*+count)
}

//ELIMINO UN PRODUCTO DEL CARRITO
const removeItem = (id) => {
    if(isInCart(id)) {    
        const newCart = coffeeCart.filter(item => item.id!==id) 
        setCoffeeCart(newCart)
    }   
}
//CALCULA EL PRECIO TOTAL DEL CARRITO
const total = () => {
    if (coffeeCart.length>0){
        const newCart = coffeeCart.map(n => n.price*n.quantity)
        const tot = newCart.reduce((cant,i) => cant + i)
        setTotalCart(tot)
        return(tot)   
    }
}
//CALCULA LA CANTIDAD DE ITEMS DEL CARRITO
const items = () => {
    if(coffeeCart.length>0) {
        const newCart = coffeeCart.map(n => n.quantity)
        const totalItems = newCart.reduce ((cant,i) => cant + i)
        return (totalItems)
    }
}

//VACIO EL CARRITO
const clear = () => {
    setCoffeeCart([])
    setTotalCart(0)
} 

//BUSCA SI EL PRODUCTO ESTA EN EL CARRITO
const isInCart = (id) =>{
    return coffeeCart.some(coffee => coffee.id === id)
}

      
    return(
        <Provider value = {{ addItem, removeItem, clear, isInCart, total, totalCart, coffeeCart, items,}}>{children}</Provider>
    )
}
export {Context, CartProvider}