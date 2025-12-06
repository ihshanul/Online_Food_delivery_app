import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddFood from './pages/AddFood'
import ListFood from './pages/ListFood'
import Order from './pages/Order'
import Sidebar from './components/Sidebar'
import Menubar from './components/Menubar'


const App = () => {
    const [sidebarVisible , setSidebarVisible] = useState(true);

    const toggleSidebar = ()=>{
        setSidebarVisible(!sidebarVisible);
    }
  return (
     <div className="d-flex" id="wrapper">
            <Sidebar sidebarVisible
             ={sidebarVisible} />
            <div id="page-content-wrapper">
                <Menubar toggleSidebar={toggleSidebar}/>
                <div className="container-fluid">
                  <Routes>
                    <Route path='/' element={<AddFood />}></Route>
                    <Route path='list' element={<ListFood />}></Route>
                    <Route path='orders' element={<Order />}></Route>
                  </Routes>
                </div>  
            </div>
        </div>
  )
}

export default App
