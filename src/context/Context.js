import React from "react"

const Context = React.createContext();
const {Provider} = Context

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])
    console.log(cart)

// AGREGA UN PRODUCTO AL CARRITO Y AUMENTA SU CANTIDAD SI ESTA
const addToCart = (coffee, count) => {
    if(isInCart(coffee.id)) {
        const newCart = cart.map(cartItem => {
        if(cartItem.id === coffee.id) {
            cartItem.quantity++
        }
        return cartItem
        })
        setCart(newCart)
    }
    else {
        setCart([...cart, {...coffee, quantity: +count}])
    }
}

//SE FIJA SI EL PRODUCTO ESTA EN EL CARRITO
const isInCart = (id) =>{
    return cart.find(coffee => coffee.id === id)
}

    return(
        <Provider value={{isInCart, addToCart, cart}}>{children}</Provider>
    )
}
export {Context, CartProvider}