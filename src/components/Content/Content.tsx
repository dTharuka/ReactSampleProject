
import { Dashboard } from '@mui/icons-material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Book from '../../pages/Book';
import Customer from '../../pages/Customer';
// import Dashboard from '../../pages/Dashboard';
// import Delivery from '../../pages/Delivery';
import Home from '../../pages/Home/Home';
import Item from '../../pages/Item';
import Login from '../../pages/Login';
import Order from '../../pages/Order';
import OrderDetails from '../../pages/OrderDetails';
import Profile from '../../pages/Profile';
import Employee from '../Employee/Employee';


const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/item" element={<Item />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/employee" element={<Employee />} />
        
      </Routes>
    </div>
  );
};

export default Content;

