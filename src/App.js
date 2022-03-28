import './App.css';
import Navbar from './component/navbar';
import Home from './component/Home';
import {Switch, Route} from 'react-router-dom'
import products from './component/products';
import Product from './component/Product';



function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={products}/>
        <Route exact path="/products/:id" component={Product}/>
      </Switch>
    </>
  );
}

export default App;
