import NavBar from "./components/Navbar/Navbar"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Learn from "./views/Learn/Learn"
import Products from "./views/Products/Products"
import Item from "./components/Item/Item";
import Category from "./views/Category/Category"
import Detail from "./views/Detail/Detail";
import Cart from "./views/Cart/Cart"
import {CartProvider} from "./context/Context"


function App() {
  return ( 
    <> 
    <BrowserRouter>
      <NavBar/>
      <CartProvider>      
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/learn" element={<Learn/>}/>
          <Route exact path="/item/:itemId" element={<Item/>}/>   
          <Route exact path="/category/:catId" element={<Category/>}/> 
          <Route exact path="/detail/:detailId" element={<Detail/>}/> 
          <Route exact path="/cart" element={<Cart/>} />            
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
    /*
    <div className="App">
      <NavBar/>

    </div>*/
  );
}


export default App;
