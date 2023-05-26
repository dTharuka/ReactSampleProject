import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Book from '../../pages/Book';
import Customer from '../../pages/Customer';
import Dashbord from '../../pages/Dashbord';
import Delevary from '../../pages/Delevary';
import Home from '../../pages/Home/Home';
import Item from '../../pages/Item';
import Login from '../../pages/Login';
import Order from '../../pages/Order';
import OrderDetails from '../../pages/OrderDetails';
import Profile from '../../pages/Profile';
import InnerContent from '../InnerContent/InnerContent';
import InnerHeader from '../InnerHeader/InnerHeader';


export default class Content extends Component {
  
    render() {
        return (
          <div>
            <h1 className=" mt-20"></h1>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/book" element={<Book/>}></Route>
                <Route path="/order" element={<Order/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                {/* <Route path="/inner" element={<InnerContent/>}></Route> */}
                <Route path="/dashboard" element={<Dashbord/>}></Route>
                <Route path="/item" element={<Item/>}></Route>
                <Route path="/delevary" element={<Delevary/>}></Route>
                <Route path="/orderDetails" element={<OrderDetails/>}></Route>
                <Route path="/customer" element={<Customer/>}></Route>
              

                
                {/* <div>
                <Route path="/innerheader" element={<InnerHeader/>}></Route>
                <Route path="/innercontent" element={<Dashbord/>}></Route>
                </div> */}
             
            </Routes>
            
          </div>
        )
      }
}
