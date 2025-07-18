import React from "react";
import Menubar from "./components/Menubar/Menubar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Explore from "./pages/Explore";
import FoodDetails from "./pages/FoodDetails";

const App = () => {
  return (
    <div>
      <Menubar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path="/food/:id" element={<FoodDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;
