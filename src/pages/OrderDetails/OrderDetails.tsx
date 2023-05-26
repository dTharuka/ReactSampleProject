import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { Component } from 'react'
import InnerHeader from '../../components/InnerHeader/InnerHeader'
import OrderCom from '../../components/OrderCom/OrderCom';
import axios from '../../axios';

type orderDetails={
  _id:string;
 orderID:string;
 orderQty:number;
 customerID:string;
 customerName:string;
 bookID:string;
 bookName:string;
 companyID:string;
 companyName:string;
 orderAmount:number;
};

type orderProps={};
type orderState={
orderList:orderDetails[];
//------------methana meka thibbe na (_id)----
_id:string;
orderID:string;
orderQty:number;
customerID:string;
customerName:string;
bookID:string;
bookName:string;
companyID:string;
companyName:string;
orderAmount:number;
}

export default class OrderDetails extends Component<orderProps,orderState> {

  constructor(props:orderProps){
    super(props);
    this.state={
    orderList:[],
      //------------methana meka thibbe na (_id)----
    _id:"",
    orderID:"",
    orderQty:0,
    customerID:"",
    customerName:"",
    bookID:"",
    bookName:"",
    companyID:"",
    companyName:"",
    orderAmount:0,
      
    };
  }

  componentDidMount():void{
    this.getAllOrders();
  }

  getAllOrders=()=>{
    axios.get("order").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        orderList:res.data.responseData,
      }));
    })
  }

  setText=(orderID:string,orderQty:number,customerID:string,customerName:string,bookID:string,bookName:string,companyID:string,companyName:string,orderAmount:number)=>{
    this.setState((prevState)=>({
      ...prevState,
      orderID:orderID,
      orderQty:orderQty,
      customerID:customerID,
      customerName:customerName,
      bookID:bookID,
      bookName:bookName,
      companyID:companyID,
      companyName:companyName,
      orderAmount:orderAmount
  }));
  }

    //--------------------------------text field clear karanne meken-------------------------------------

    clearTextField = () => {
      this.setState((prevState)=>({
        ...prevState,
        orderID:"",
        orderQty:0,
        customerID:"",
        customerName:"",
        bookID:"",
        bookName:"",
        companyID:"",
        companyName:"",
        orderAmount:0,
    }));
    }

  //-----------------------------------------meka delete karanna gahapu eka----------------------------------
handleDelete = () => {
  const {orderID}=this.state; 
  if (window.confirm('Do you want to remove this Item ?')) {
    axios
      .delete(`order/${orderID}`)
      .then(() => {
        this.getAllOrders();
        alert('Data deleted successfully. ');
        this.clearTextField();
      })
      .catch((error) => {
        console.log(error);
        alert('Error deleting data. ');
      });
  }
}
//-----------------------------------------------------the end----------------------------------



  render() {
    return (
      <div>
        <InnerHeader/>
        <h1 className="mb-10 mt-24 text-center animate-bounce ..." style={{ fontSize: "32px"}}>OrderDetails</h1>



        <form className=" mx-20 py-8 px-10 grid grid-cols-2 grid-rows-6" style={{ width: "90%", borderRadius: "10px", gridGap: "10px" , boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>
              
              <TextField
                label="Order ID"
                type="text"
                variant="outlined"
                placeholder="Enter your valid ID here"
                name="orderID"
                value={this.state.orderID}
                // onChange={this.handleInput}
                required
              />
              <TextField
                label="Order Qty"
                type="text"
                variant="outlined"
                value={this.state.orderQty}
                // onChange={this.handleInput}
                placeholder="Enter your Qty here"
                name="orderQty"
                required
              />

      

            <TextField
                label="Customer ID"
                type="text"
                variant="outlined"
                value={this.state.customerID}
                placeholder="Enter your ID here"
                name="customerID"
                required
              />

            <TextField
                label="Customer Name"
                type="text"
                variant="outlined"
                value={this.state.customerName}
                // onChange={this.handleInput}
                placeholder="Enter your Name here"
                name="customerName"
                required
              />


            <TextField
                label="Book ID"
                type="text"
                variant="outlined"
                value={this.state.bookID}
                placeholder="Enter your ID here"
                name="bookID"
                required
              />

            <TextField
                label="Book Name"
                type="text"
                variant="outlined"
                value={this.state.bookName}
                placeholder="Enter your Name here"
                name="bookName"
                required
              />

          

            <TextField
                label="Company ID"
                type="text"
                variant="outlined"
                value={this.state.companyID}
                placeholder="Enter your ID here"
                name="companyID"
                required
              />

            <TextField
                label="Company Name"
                type="text"
                variant="outlined"
                value={this.state.companyName}
                placeholder="Enter your Name here"
                name="companyName"
                required
              />

            <TextField
                label="Amount"
                type="text"
                variant="outlined"
                value={this.state.orderAmount}
                placeholder="Enter your Amount here"
                name="orderAmount"
                required
              />
            

              <button onClick={this.handleDelete} type="button"  className="w-full bg-accent-navy-200 text-white bg-red-600 py-2 rounded m-0">
                <h6>Delete</h6>
              </button>
            </form>


        <TableContainer
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            borderRadius: "15px",
          }}
          component={Paper}
          className="mt-5"
        >
          <Table aria-label="simple table">
            <TableHead className="" style={{ backgroundColor: '#f9004d' }}>
              <TableRow>
                <TableCell>
                  Order ID
                </TableCell>
                <TableCell >
                  Order Qty
                </TableCell>
                <TableCell >
                  Customer ID
                </TableCell>
                <TableCell >
                  Customer Name
                </TableCell>
                <TableCell >
                  Book ID
                </TableCell>
                <TableCell >
                  Book Name
                </TableCell>
                <TableCell >
                  QuryID
                </TableCell>
                <TableCell >
                  Qury Name
                </TableCell>
                <TableCell >
                  Total Amount
                </TableCell>
                <TableCell >
                  _id
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            {this.state.orderList.map(order=>(
              <OrderCom key={order._id} orderID={order.orderID} orderQty={order.orderQty} customerID={order.customerID} customerName={order.customerName} bookID={order.bookID} bookName={order.bookName} companyID={order.companyID} companyName={order.companyName} orderAmount={order.orderAmount} _id={order._id} setText={this.setText}></OrderCom>
              ))}
              {/* <TableRow>
                <TableCell>O001</TableCell>
                <TableCell>25</TableCell>
                <TableCell>C001</TableCell>
                <TableCell>Dakshina</TableCell>
                <TableCell>B001</TableCell>
                <TableCell>Physics</TableCell>
                <TableCell>Q001</TableCell>
                <TableCell>GallQury</TableCell>
                <TableCell>2500.00</TableCell>
              </TableRow>

              <TableRow>
              <TableCell>O002</TableCell>
                <TableCell>25</TableCell>
                <TableCell>C002</TableCell>
                <TableCell>Tharuka</TableCell>
                <TableCell>B002</TableCell>
                <TableCell>Chemistry</TableCell>
                <TableCell>Q002</TableCell>
                <TableCell>MataraQury</TableCell>
                <TableCell>3500.00</TableCell>
              </TableRow> */}

            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}
