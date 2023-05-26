import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Customer from '../../pages/Customer'
import Dashbord from '../../pages/Dashbord'
import Delevary from '../../pages/Delevary'
import Item from '../../pages/Item'
import OrderDetails from '../../pages/OrderDetails'

export default class InnerContent extends Component {
  render() {
    return (
      <div>
        <h1 className=" mt-20"></h1>
        <Routes>
                <Route path="/dashboard" element={<Dashbord/>}></Route>
                <Route path="/item" element={<Item/>}></Route>
                <Route path="/delevary" element={<Delevary/>}></Route>
                <Route path="/orderDetails" element={<OrderDetails/>}></Route>
                <Route path="/customer" element={<Customer/>}></Route>
            </Routes>
      </div>
    )
  }
}
