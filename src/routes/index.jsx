import React from 'react'
import { Route, Routes } from "react-router-dom";
import BaseLayout from '../component/layout';
import { Login } from '../page/login';
import Customer from '../page/customer';
import Checkdata from '../page/checkdata';

const Routers = () => {

  return (
    
         <Routes>
             <Route path="/" element={<Login />} />
             <Route
                path="dashboard"
                element={
                  // <Private>
                    <BaseLayout />
                  // </Private>
                }
            > 
        <Route path="customer" element={<Customer />} />
        <Route path="profile" element={<Checkdata />} />
        {/* <Route path="update" element={<Update />} />
        <Route path="payment" element={<Transaction />} />
        <Route path="createproduct" element={<Products />} /> */}
       </Route> 

         </Routes>
  )
}

export default Routers;