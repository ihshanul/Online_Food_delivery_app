import React from "react";
import Menubar from "./components/Menubar/Menubar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/contact/ContactUs";
import Explore from "./pages/Explore";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/placeOrder";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <div>
      <Menubar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path="/food/:id" element={<FoodDetails/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
};

export default App;
