import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { ChangeEvent, Component, useState } from 'react'
import axios from '../../axios';
import CustomerCom from '../../components/CustomerCom/CustomerCom';
import InnerHeader from '../../components/InnerHeader/InnerHeader'
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
export default class Customer extends Component<CustomerProps,CustomerState> {

  

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


  //-----------------------------------------meka update karanna gahapu eka----------------------------------
handleUpdate = () => {
  const { customerID, customerName, customerAddress, customerContact, customerEmail, customerSalary}=this.state; 

  let updateCustomer={
      customerID:customerID,
      customerName:customerName,
      customerAddress:customerAddress,
      customerContact:customerContact,
      customerEmail:customerEmail,
      customerSalary:customerSalary
  };

  if (window.confirm('Do you want to update this Customer ?')) {
    axios
      .put(`customer/${customerID}`, updateCustomer)
      .then(() => {
        this.getAllCustomers();
        alert('Data Updated successfully. ');
        this.clearTextField();
      })
      .catch((error) => {
        console.log(error);
        alert('Error updating data. Because: ' + error);
      });
  }

}
//-----------------------------------------------------the end----------------------------------


//-----------------------------------------meka delete karanna gahapu eka----------------------------------
handleDelete = () => {
  const {customerID}=this.state; 
  if (window.confirm('Do you want to remove this Customer ?')) {
    axios
      .delete(`customer/${customerID}`)
      .then(() => {
        this.getAllCustomers();
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

//====================================set value to text field=========================================================
setText=(customerID:string,customerName:string,customerAddress:string,customerContact:string,customerEmail:string,customerSalary:string)=>{
  this.setState((prevState)=>({
    ...prevState,
      customerID:customerID,
      customerName:customerName,
      customerAddress:customerAddress,
      customerContact:customerContact,
      customerEmail:customerEmail,
      customerSalary:customerSalary
}));
}

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
        <InnerHeader/>
        <h1 className="mb-10 mt-24 text-center animate-bounce ..." style={{ fontSize: "32px"}}>Your Customers</h1>

        <form className=" mx-20 py-8 px-10 grid grid-cols-2 grid-rows-4" onSubmit={this.handleDelete} style={{ width: "90%", borderRadius: "10px", gridGap: "10px",boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", }}>
              <TextField
                label="Customer ID"
                type="text"
                variant="outlined"
                placeholder="Enter your valid ID here"
                name="customerID"
                id='customerID'
                value={this.state.customerID}
                onChange={this.handleInput}
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

            
              <button onClick={this.handleUpdate} className="w-full bg-accent-navy-200 text-white bg-yellow-600 py-2 rounded m-0" type='button'>
                <h6>Update</h6>
              </button>

              <button onClick={this.handleDelete} type='button' className="w-full bg-accent-navy-200 text-white bg-red-600 py-2 rounded m-0">
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
              <TableRow >
                <TableCell >
                  Customer ID
                </TableCell>
                <TableCell >
                  Customer Name
                </TableCell>
                <TableCell >
                  Customer Address
                </TableCell>
                <TableCell >
                  Customer Contact
                </TableCell>
                <TableCell >
                  Customer Email
                </TableCell>
                <TableCell >
                  Customer Salary
                </TableCell>
                <TableCell >
                  _id
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

{this.state.customerList.map(customer=>(
  <CustomerCom key={customer._id} customerID={customer.customerID} customerName={customer.customerName} customerAddress={customer.customerAddress} customerContact={customer.customerContact} customerEmail={customer.customerEmail} customerSalary={customer.customerSalary} _id={customer._id} setText={this.setText}></CustomerCom>
  ))}
              

              {/* <TableRow>
                <TableCell>C001</TableCell>
                <TableCell>Maneesha</TableCell>
                <TableCell>Galle</TableCell>
                <TableCell>077-9054432</TableCell>
                <TableCell>gune@gmail.com</TableCell>
                <TableCell>35000</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>C002</TableCell>
                <TableCell>Sasmitha</TableCell>
                <TableCell>Matara</TableCell>
                <TableCell>071-2344432</TableCell>
                <TableCell>sas@gmail.com</TableCell>
                <TableCell>40000</TableCell>
              </TableRow> */}

            </TableBody>
          </Table>
        </TableContainer>
            
      </div>
    )
  }
}
