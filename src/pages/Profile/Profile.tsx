import { ClassNames } from '@emotion/react'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { ChangeEvent, Component } from 'react'
import axios from '../../axios';
import Header from '../../components/Header/Header';
import UserImage from "./../../assets/user.png";
import $ from 'jquery';

type CustomerDetails={
  _id:string;
  customerID:string;
  customerName:string;
  customerAddress:string;
  customerContact:string;
  customerEmail:string;
  customerSalary:string;
};

type CustomerProps={};
type CustomerState={
  customerList:CustomerDetails[];
  customerID:string;
  customerName:string;
  customerAddress:string;
  customerContact:string;
  customerEmail:string;
  customerSalary:string;
  click:boolean;
  isClicked: boolean;
}

let count;

export default class Profile extends Component<CustomerProps,CustomerState> {

  constructor(props:CustomerProps){
    super(props);
    this.state={
    customerList:[],
    customerID:"",
    customerName:"",
    customerAddress:"",
    customerContact:"",
    customerEmail:"",
    customerSalary:"",
    click:false,
    isClicked: false
    };
  }

  componentDidMount():void{
    this.getAllCustomers();
  }

  handleIsClick = () => {
    this.setState({ isClicked: true });
  };

  getAllCustomers=()=>{
    axios.get("customer").then((res)=>{
      console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        customerList:res.data.responseData,
      }));
      this.handleCustomerID();
    })
  }

  handleInput=(event:ChangeEvent<HTMLInputElement>)=>{


    $("#customerName").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#customerName").css({
          color: "green"
        });
      }else{
        $("#customerName").css({
          color: "red"
        });
      }
    });

    $("#customerAddress").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#customerAddress").css({
          color: "green"
        });
      }else{
        $("#customerAddress").css({
          color: "red"
        });
      }
    });


    $("#customerContact").keyup(function () {
      if (/^[0-9]+$/.test(event.target.value)) {
        $("#customerContact").css({
          color: "green"
        });
      }else{
        $("#customerContact").css({
          color: "red"
        });
      }
    });

    $("#customerEmail").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#customerEmail").css({
          color: "green"
        });
      }else{
        $("#customerEmail").css({
          color: "red"
        });
      }
    });

    $("#customerSalary").keyup(function () {
      if (/^[0-9]+$/.test(event.target.value)) {
        $("#customerSalary").css({
          color: "green"
        });
      }else{
        $("#customerSalary").css({
          color: "red"
        });
      }
    });


    const{name,value,type}= event.target;
  
    const inputValue=type === "number" ? parseInt(value):value;
  
    this.setState((prevState)=>({
        ...prevState,
        [name]:value,
    }));
  }

  
  //--------------------------------text field clear karanne meken-------------------------------------

clearTextField = () => {
  this.setState((prevState)=>({
    ...prevState,
    customerID:"",
    customerName:"",
    customerAddress:"",
    customerContact:"",
    customerEmail:"",
    customerSalary:""
}));
}

  handleSubmit=()=>{  
    const {customerID, customerName, customerAddress, customerContact, customerEmail, customerSalary}=this.state;
    let newCustomer={
      customerID:customerID,
      customerName:customerName,
      customerAddress:customerAddress,
      customerContact:customerContact,
      customerEmail:customerEmail,
      customerSalary:customerSalary
    };
  
    axios.post("customer",newCustomer).then((res)=>{
    
      this.getAllCustomers();
      this.clearTextField();
    });
  };

//---------------------------------------itemID auto generat function-----------------------------------
handleCustomerID = (): void => {
  if(!this.state.click){
    this.getAllCustomers();
  count=this.state.customerList.length+1;
  let setCount = count.toString();

  this.setState((prevState)=>({
    ...prevState,
    customerID:"C00"+setCount,
  }));
  }
};


  render() {
    return (
      <div>
        <Header/>
        <h1 className="mb-20 mt-24 text-center animate-bounce ..." style={{ fontSize: "32px"}}>Create New Account</h1>
        <div className="grid grid-cols-2 grid-rows-1 ml-52" style={{ borderRadius: "10px",width:"70%", gridGap: "10px" , boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

        <img src={UserImage} alt="userImage" className=" ml-20" />
        <form className=" mr-10 ml-10 mt-3 py-8 px-10 grid grid-cols-2 grid-rows-4" style={{ border: "1px solid black", width: "90%",height:"90%", borderRadius: "10px", gridGap: "10px" }}>
        <TextField
                label="Customer ID"
                type="text"
                variant="outlined"
                placeholder="Enter your valid ID here"
                name="customerID"
                value={this.state.customerID}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />
              <TextField
                label="Customer Name"
                type="text"
                variant="outlined"
                placeholder="Enter your Name here"
                name="customerName"
                id='customerName'
                value={this.state.customerName}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Customer Address"
                type="text"
                variant="outlined"
                placeholder="Enter your Address here"
                name="customerAddress"
                id='customerAddress'
                value={this.state.customerAddress}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Customer Contact"
                type="text"
                variant="outlined"
                placeholder="Enter your Contact here"
                name="customerContact"
                id='customerContact'
                value={this.state.customerContact}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Customer Email"
                type="email"
                variant="outlined"
                placeholder="Enter your Email here"
                name="customerEmail"
                id='customerEmail'
                value={this.state.customerEmail}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Customer Salary"
                type="text"
                variant="outlined"
                placeholder="Enter your Salary here"
                name="customerSalary"
                id='customerSalary'
                value={this.state.customerSalary}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />
            
              <button onClick={this.handleSubmit} type="button" className="w-full bg-accent-navy-200 text-white bg-green-600 py-2 rounded m-0">
                <h6>Save</h6>
              </button>
            </form>
        </div>
      </div>
    )
  }
}