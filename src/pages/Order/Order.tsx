import { InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { ChangeEvent, Component } from 'react'
import Header from '../../components/Header/Header'
import OrderCom from '../../components/OrderCom/OrderCom';
import axios from '../../axios';
import Customer from '../Customer';

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

type CustomerDetails={
  _id:string;
  customerID:string;
  customerName:string;
  customerAddress:string;
  customerContact:string;
  customerEmail:string;
  customerSalary:string;
};

type ItemDetails={
  _id:string;
  photo:string;
  bookID:string;
  bookName:string;
  catagory:string;
  author:string;
  description:string;
  unitPrice:number;
  qtyOnHand:number;
  language:string;
};

type DelevaryDetails={
  _id:string;
  companyID:string;
  companyName:string;
  companyContact:string;
  companyEmail:string;
  companyAddress:string;
  delevarPrice:number;
};

type orderProps={};
type orderState={
  orderList:orderDetails[];
    //------------methana meka thibbe na----
  customerList:CustomerDetails[];
  itemList:ItemDetails[];
  delevaryList:DelevaryDetails[];
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
  click:boolean;
}
let transportServicePrice:number;
let pikupQty: number;
let itemPrice:number;
let total:number;
let count;


export default class Order extends Component<orderProps,orderState> {


  constructor(props:orderProps){
    super(props);
    this.state={
    orderList:[],
          //------------methana meka thibbe na (customerList)----
    customerList:[],
    itemList:[],
    delevaryList:[],
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
    click:false
      
    };
  }

  componentDidMount():void{
    this.getAllOrders();
    this.getAllCustomers();
    this.getAllItems();
    this.getAllDelevarys();
    this.claculateTotalAmount();
  }

  getAllOrders=()=>{
    axios.get("order").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        orderList:res.data.responseData,
      }));
      this.handleOrderID();
    })
  }

//------------------------customer ge combobox ekata adala thana methana------------------------

  getAllCustomers=()=>{
  axios.get("customer").then((res)=>{
    console.log(res.data.responseData);
    this.setState((prevState)=>({
      ...prevState,
      customerList:res.data.responseData,
      }));
    }).catch((error)=>{})
  }


  setCustomerName=(event:SelectChangeEvent<string>)=>{
    event.preventDefault();
    const{name,value}= event.target;
    
    this.setState((prevState)=>({
        ...prevState,
        [name]:value,
    }));
    
   for (let index = 0; index <  this.state.customerList.length; index++) {
    if (this.state.customerList[index].customerID==this.state.customerID) {
      this.setState((prevState)=>({
        ...prevState,
        customerName:this.state.customerList[index].customerName
        }));
      break;
    }
    
   }
  }


  //------------------------item eke combobox ekata adala thana methana------------------------

  getAllItems=()=>{
    axios.get("item").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        itemList:res.data.responseData,
        }));
      }).catch((error)=>{})
    }
  
  
    setItemName=(event:SelectChangeEvent<string>)=>{
      event.preventDefault();
      const{name,value}= event.target;
      
      this.setState((prevState)=>({
          ...prevState,
          [name]:value,
      }));
      
     for (let index = 0; index <  this.state.itemList.length; index++) {
      if (this.state.itemList[index].bookID==this.state.bookID) {
        this.setState((prevState)=>({
          ...prevState,
          bookName:this.state.itemList[index].bookName
          }));
          itemPrice=this.state.itemList[index].unitPrice;
        break;
      }
      
     }
    }


    //------------------------delevary eke combobox ekata adala thana methana------------------------

  getAllDelevarys=()=>{
    axios.get("delevary").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        delevaryList:res.data.responseData,
        }));
      }).catch((error)=>{})
    }
  
  
    setCompanyName=(event:SelectChangeEvent<string>)=>{
      event.preventDefault();
      const{name,value}= event.target;
      
      this.setState((prevState)=>({
          ...prevState,
          [name]:value,
      }));
      
     for (let index = 0; index <  this.state.delevaryList.length; index++) {
      if (this.state.delevaryList[index].companyID==this.state.companyID) {
        this.setState((prevState)=>({
          ...prevState,
          companyName:this.state.delevaryList[index].companyName,
          }));
          transportServicePrice=this.state.delevaryList[index].delevarPrice;
        break;
      }
      
     }
    }


//----------------------buy karana item qty eka text field eken ganna function eka-----------------
handleInput=(event:any)=>{


  const{name,value,type}= event.target;

  const inputValue=type === "number" ? parseInt(value):value;

  if(name==="delevarPrice" && Number(inputValue)<0){
      return;
  }
  this.setState((prevState)=>({
      ...prevState,
      [name]:value,
  }));
  
}

//-------------------------total amount eka calculate wenne methanin-------------------------------
claculateTotalAmount=()=>{
  // alert("hello");
  pikupQty = parseInt(`${this.state.orderQty}`);


   total=(pikupQty*itemPrice)+transportServicePrice;
  //  alert(transportServicePrice);
   this.setState((prevState)=>({
    ...prevState,
    orderAmount:total
    }));
}

pikupQty=(event:ChangeEvent<HTMLInputElement>)=>{


  const{name,value,type}= event.target;

  const inputValue=type === "number" ? parseInt(value):value;

  if(name==="orderQty" && Number(inputValue)<0){
      return;
  }
  // this.setState((prevState)=>({
  //     ...prevState,
  //     [name]:value,
  // }));
  // pikupQty = parseInt(`${this.state.orderQty}`);
}

placeOrder=()=>{
  const {orderID, orderQty, customerID, customerName, bookID, bookName, companyID, companyName,orderAmount}=this.state;
  let newOrder={
    orderID:orderID,
    orderQty:orderQty,
    customerID:customerID,
    customerName:customerName,
    bookID:bookID,
    bookName:bookName,
    companyID:companyID,
    companyName:companyName,
    orderAmount:orderAmount
  };
 
  axios.post("order",newOrder).then((res)=>{
    
    this.getAllOrders();
    // this.clearTextField();
  }).catch((error)=>{
    alert(error.message)
  })

}

//---------------------------------------itemID auto generat function-----------------------------------
handleOrderID = (): void => {
  if(!this.state.click){
    this.getAllOrders();
  count=this.state.orderList.length+1;
  let setCount = count.toString();

  this.setState((prevState)=>({
    ...prevState,
    orderID:"O00"+setCount,
  }));
  }
};



  render() {
    return (
      <div>
        <Header/>
        <h1 className="mb-10 mt-24 text-center animate-bounce ..." style={{ fontSize: "32px"}}>Place Your Order Here</h1>

        <form className=" mx-20 py-8 px-10 grid grid-cols-2 grid-rows-6" style={{ width: "90%", borderRadius: "10px", gridGap: "10px" , boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>
              
              <TextField
                label="Order ID"
                type="text"
                variant="outlined"
                placeholder="Enter your valid ID here"
                name="orderID"
                value={this.state.orderID}
                onChange={this.handleInput}
                required
              />
              <TextField
                label="Order Qty"
                type="text"
                variant="outlined"
                value={this.state.orderQty}
                onChange={this.handleInput}
                placeholder="Enter your Qty here"
                name="orderQty"
                required
              />

            <Select name="customerID" onChange={this.setCustomerName}>
            {this.state.customerList.map((customer) => (
              <MenuItem key={customer.customerID} value={customer.customerID}>
                {customer.customerID}
              </MenuItem>
            ))}
          </Select>

            {/* <TextField
                label="Customer ID"
                type="text"
                variant="outlined"
                placeholder="Enter your ID here"
                name="customerID"
                required
              /> */}

            <TextField
                label="Customer Name"
                type="text"
                variant="outlined"
                value={this.state.customerName}
                onChange={this.handleInput}
                placeholder="Enter your Name here"
                name="customerName"
                required
              />

            <Select name="bookID" onChange={this.setItemName}>
            {this.state.itemList.map((item) => (
              <MenuItem key={item.bookID} value={item.bookID}>
                {item.bookID}
              </MenuItem>
            ))}
          </Select>

            {/* <TextField
                label="Book ID"
                type="text"
                variant="outlined"
                placeholder="Enter your ID here"
                name="bookID"
                required
              /> */}

            <TextField
                label="Book Name"
                type="text"
                variant="outlined"
                value={this.state.bookName}
                placeholder="Enter your Name here"
                name="bookName"
                required
              />

            <Select name="companyID" onChange={this.setCompanyName}>
            {this.state.delevaryList.map((delevary) => (
              <MenuItem key={delevary.companyID} value={delevary.companyID}>
                {delevary.companyID}
              </MenuItem>
            ))}
          </Select>

            {/* <TextField
                label="Company ID"
                type="text"
                variant="outlined"
                placeholder="Enter your ID here"
                name="companyID"
                required
              /> */}

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
            
              <button onClick={this.claculateTotalAmount} type="button" className="w-full bg-accent-navy-200 text-white bg-green-600 py-2 rounded m-0">
                <h6>Add To Cart</h6>
              </button>

              <button type="button" onClick={this.placeOrder} className="w-full bg-accent-navy-200 text-white bg-red-600 py-2 rounded m-0">
                <h6>Place Order</h6>
              </button>
            </form>

            {/* <TableContainer
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            borderRadius: "15px",
          }}
          component={Paper}
          className="mt-5"
        >
          <Table aria-label="simple table">
            <TableHead className=" bg-yellow-600">
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
            <TableBody> */}

            {/* {this.state.orderList.map(order=>(
              <OrderCom key={order._id} orderID={order.orderID} orderQty={order.orderQty} customerID={order.customerID} customerName={order.customerName} bookID={order.bookID} bookName={order.bookName} companyID={order.companyID} companyName={order.companyName} orderAmount={order.orderAmount} _id={order._id} ></OrderCom>
              ))} */}

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

            {/* </TableBody>
          </Table>
        </TableContainer> */}

        
      </div>
    )
  }
}
