import NavBar from "./components/Navbar/Navbar"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Products from "./views/Products/Products"
import Item from "./components/Item/Item";
import Category from "./views/Category/Category"
import Detail from "./views/Detail/Detail";
import ShopCart from "./views/ShopCart/ShopCart"
import {CartProvider} from "./context/Context"
import CheckOut from "./views/CheckOut/CheckOut";



function App() {

  return ( 
    <> 
    <BrowserRouter>    
      <CartProvider>      
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/item/:itemId" element={<Item/>}/>   
          <Route exact path="/category/:catId" element={<Category/>}/> 
          <Route exact path="/detail/:detailId" element={<Detail/>}/> 
          <Route exact path="/cart" element={<ShopCart/>} />  
          <Route exact path="/CheckOut" element ={<CheckOut/>} />          
        </Routes>
      </CartProvider>
    </BrowserRouter>
   </>
   );
}


export default App;
