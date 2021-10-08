// import './App.css';
import Header from './components/Base/Header.jsx'
import Footer from './components/Base/Footer.jsx'
import NotFound from './components/Not-Found/NotFound.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Users/Register/Register.jsx'
import Login from './components/Users/Login/Login.jsx'
import EditUser from './components/Users/EditUser/EditUser.jsx'
import Profile from './components/Users/Profile/Profile.jsx'
// import ProductCart from './components/users/ProductCart/ProductCart.jsx'

import AllProducts from './components/Products/AllProducts/AllProducts.jsx'
import createProduct from './components/Products/CreateProduct/createProduct.jsx'
import EditProduct from './components/Products/EditProduct/EditProduct.jsx'
import ProductDetail from './components/Products/ProductDetail/ProductDetail.jsx'



import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/usuarios/register" component={Register} />
        <Route exact path="/usuarios/login" component={Login} />
        <Route exact path="/usuarios/edituser" component={EditUser} />
        <Route exact path="/usuarios/profile" component={Profile} />
        
        <Route exact path="/productos" component={AllProducts} />
        <Route exact path="/productos/crear" component={createProduct} />
        <Route exact path="/productos/editar/:id" component={EditProduct} />
        <Route exact path="/productos/:id" component={ProductDetail} />
        {/* <Route exact path="/usuarios/productCart" component={ProductCart} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;