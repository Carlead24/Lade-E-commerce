import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Switch, Route, Redirect} from 'react-router-dom'
import products from './component/products';
import Product from './component/Product';
import Cart from './component/Cart'
import Checkout from './component/Checkout'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={products}/>
          <Route exact path="/products/:id" component={Product}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect to="/" />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
