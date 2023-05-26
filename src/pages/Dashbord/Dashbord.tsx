import React, { Component } from 'react'
import axios from '../../axios';
import InnerHeader from '../../components/InnerHeader/InnerHeader'

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

type CustomerDetails={
  _id:string;
  customerID:string;
  customerName:string;
  customerAddress:string;
  customerContact:string;
  customerEmail:string;
  customerSalary:string;
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

type DashbordProps={};
type DashbordState={
itemList:ItemDetails[];
customerList:CustomerDetails[];
delevaryList:DelevaryDetails[];
orderList:orderDetails[];
}

let itemCount;

export default class Dashbord extends Component<DashbordProps,DashbordState> {

  constructor(props:DashbordProps){
    super(props);
    this.state={
      itemList:[],
      customerList:[],
      delevaryList:[],
      orderList:[],
    };

  }

  componentDidMount():void{
    this.getAllItems();
    this.getAllCustomers();
    this.getAllDelevary();
    this.getAllOrders();
  }


  getAllItems=()=>{
    axios.get("item").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        itemList:res.data.responseData,
      }));
    })
  }

  getAllCustomers=()=>{
    axios.get("customer").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        customerList:res.data.responseData,
      }));
    })
  }

  getAllDelevary=()=>{
    axios.get("delevary").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        delevaryList:res.data.responseData,
      }));
    })
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

  render() {
    return (
      <div>
        <InnerHeader/>
        {/* <h1 className="mt-32">Dashbord</h1> */}

        <div className=' mt-36 ml-20' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Montserrat&size=70&pause=1000&color=F9004D&width=1800&height=200&lines=Welcome+to+BISMARCK+mr.Dakshina+Rajapaksha" alt="Typing SVG" /></a>
        </div>

        

        

        <div className="grid grid-cols-2 grid-rows-2 h-96 mx-56 mt-5 pt-8 pb-8" style={{borderRadius: "10px",boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

          <div className="ml-8 mt-3 mb-3 animate-bounce ..." style={{ width: "90%",  borderRadius: "10px", gridGap: "10px",boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

          <p className=" mx-28 my-10" style={{ fontSize: '24px'}}>Number of Items : {this.state.itemList.length}</p>

          </div>

          <div className="m-3 animate-bounce ..." style={{ width: "90%", borderRadius: "10px",  gridGap: "10px",boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

          <p  className=" mx-20 my-10" style={{ fontSize: '24px'}}>Number of Customers : {this.state.customerList.length}</p>

          </div>

          <div className="ml-8 mt-3 mb-3 animate-bounce ..." style={{ width: "90%", borderRadius: "10px",  gridGap: "10px",boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

          <p  className=" mx-12 my-10" style={{ fontSize: '24px'}}>Number of Courier Companys : {this.state.delevaryList.length}</p>

          </div>

          <div className="m-3 animate-bounce ..." style={{ width: "90%", borderRadius: "10px", gridGap: "10px",boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

          <p  className=" mx-28 my-10" style={{ fontSize: '24px'}}>Number of Orders : {this.state.orderList.length}</p>

          </div>

        </div>
      </div>
    )
  }
}
