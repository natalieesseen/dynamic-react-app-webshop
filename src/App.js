import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // shopping cart
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    let newCart = [...cartItems];
    let itemInCart = newCart.find(
      (item) => product.title === item.title
    );

    if(itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCartItems(newCart)
  }

  const emptyCart = () => {
    setCartItems([]);
  }

  const getTotalSum = () => {
    return cartItems.reduce((sum, {price, quantity}) => sum + price * quantity, 0);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header cartItems={cartItems} getTotalSum={getTotalSum}/>
      
      <Routes>
        <Route path='/' element={<Products addToCart={addToCart}/>} />
        <Route path='products/:id' element={<Product addToCart={addToCart}/>} />
        <Route path='checkout' element={<Checkout cartItems={cartItems} getTotalSum={getTotalSum} emptyCart={emptyCart}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
