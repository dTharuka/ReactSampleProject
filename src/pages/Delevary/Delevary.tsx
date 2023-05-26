import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { ChangeEvent, Component } from 'react'
import DelevaryCom from '../../components/DelevaryCom/DelevaryCom'
import InnerHeader from '../../components/InnerHeader/InnerHeader'
import axios from '../../axios'
import { type } from '@testing-library/user-event/dist/type'
import { validateHeaderValue } from 'http'
import { SettingsInputHdmiSharp } from '@mui/icons-material'
import $ from 'jquery';

type DelevaryDetails={
    _id:string;
    companyID:string;
    companyName:string;
    companyContact:string;
    companyEmail:string;
    companyAddress:string;
    delevarPrice:number;
};

type DelevaryProps={};
type DelevaryState={
  delevaryList:DelevaryDetails[];
  //------------methana meka thibbe na (_id)----
  _id:string;
  companyID:string;
  companyName:string;
  companyContact:string;
  companyEmail:string;
  companyAddress:string;
  delevarPrice:number;
  click:boolean;
  isClicked: boolean;
}

// interface DelevaryListState {
//     delevaryIList:DelevaryDetails[];
//     _id:string;
//     companyID:string;
//     companyName:string;
//     companyContact:string;
//     companyEmail:string;
//     companyAddress:string;
//     delevarPrice:number;
// }

let count;

export default class Delevary extends Component<DelevaryProps, DelevaryState> {

  constructor(props:DelevaryProps){
    super(props);
    this.state={
      delevaryList:[],
      //------------methana meka thibbe na (_id)----
      _id:"",
      companyID:"",
      companyName:"",
      companyContact:"",
      companyEmail:"",
      companyAddress:"",
      delevarPrice:0,
      click:false,
      isClicked: false
      
    };
  }

  componentDidMount():void{
    this.getAllDelevary();
  }

  handleIsClick = () => {
    this.setState({ isClicked: true });
  };

getAllDelevary=()=>{
  axios.get("delevary").then((res)=>{
    console.log(res.data.responseData);
    this.setState((prevState)=>({
      ...prevState,
      delevaryList:res.data.responseData,
    }));
    this.handleDelevaryID();
  })
}

handleInput=(event:ChangeEvent<HTMLInputElement>)=>{


  $("#companyName").keyup(function () {
    if (/^[A-Za-z]+$/.test(event.target.value)) {
      $("#companyName").css({
        color: "green"
      });
    }else{
      $("#companyName").css({
        color: "red"
      });
    }
  });

  $("#companyContact").keyup(function () {
    if (/^[0-9]+$/.test(event.target.value)) {
      $("#companyContact").css({
        color: "green"
      });
    }else{
      $("#companyContact").css({
        color: "red"
      });
    }
  });


  $("#companyEmail").keyup(function () {
    if (/^[A-Za-z]+$/.test(event.target.value)) {
      $("#companyEmail").css({
        color: "green"
      });
    }else{
      $("#companyEmail").css({
        color: "red"
      });
    }
  });

  $("#companyAddress").keyup(function () {
    if (/^[A-Za-z]+$/.test(event.target.value)) {
      $("#companyAddress").css({
        color: "green"
      });
    }else{
      $("#companyAddress").css({
        color: "red"
      });
    }
  });

  $("#delevarPrice").keyup(function () {
    if (/^[0-9]+$/.test(event.target.value)) {
      $("#delevarPrice").css({
        color: "green"
      });
    }else{
      $("#delevarPrice").css({
        color: "red"
      });
    }
  });


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

//--------------------------------text field clear karanne meken-------------------------------------

clearTextField = () => {
  this.setState((prevState)=>({
    ...prevState,
    companyID:"",
    companyName:"",
    companyContact:"",
    companyEmail:"",
    companyAddress:"",
    delevarPrice:0
}));
}

handleSubmit=()=>{

  const {companyID, companyName, companyContact, companyEmail, companyAddress, delevarPrice}=this.state;
  let newCompany={
    companyID:companyID,
    companyName:companyName,
    companyContact:companyContact,
    companyEmail:companyEmail,
    companyAddress:companyAddress,
    delevarPrice:delevarPrice
  };

  axios.post("delevary",newCompany).then((res)=>{
  
    this.getAllDelevary();
    this.clearTextField();
  });



};



//-----------------------------------------meka update karanna gahapu eka----------------------------------
handleUpdate = () => {
  const { _id, companyID, companyName, companyContact, companyEmail, companyAddress, delevarPrice}=this.state; 

  let updateCompany={
    companyID:companyID,
    companyName:companyName,
    companyContact:companyContact,
    companyEmail:companyEmail,
    companyAddress:companyAddress,
    delevarPrice:delevarPrice
  };

  if (window.confirm('Do you want to update this Company ?')) {
    axios
      .put(`delevary/${companyID}`, updateCompany)
      .then(() => {
        this.getAllDelevary();
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
  const {companyID}=this.state; 
  if (window.confirm('Do you want to remove this Company ?')) {
    axios
      .delete(`delevary/${companyID}`)
      .then(() => {
        this.getAllDelevary();
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
setText=(companyID:string,companyName:string,companyContact:string,companyEmail:string,companyAddress:string,delevarPrice:number)=>{
  this.setState((prevState)=>({
    ...prevState,
    companyID:companyID,
    companyName:companyName,
    companyContact:companyContact,
    companyEmail:companyEmail,
    companyAddress:companyAddress,
    delevarPrice:delevarPrice
}));
}


//---------------------------------------itemID auto generat function-----------------------------------
handleDelevaryID = (): void => {
  if(!this.state.click){
    this.getAllDelevary();
  count=this.state.delevaryList.length+1;
  let setCount = count.toString();

  this.setState((prevState)=>({
    ...prevState,
    companyID:"D00"+setCount,
  }));
  }
};


  render() {
    // const save=document.getElementById('btnSaveCompany') as HTMLButtonElement;
    // save.addEventListener('click', this.handleSubmit);
    // const { DelevaryListState } = this.state;
    return (
      <div>
        <InnerHeader/>
        <h1 className="mb-10 mt-24 text-center animate-bounce ..." style={{ fontSize: "32px"}}>Delevary Service</h1>

        <form className=" mx-20 py-8 px-10 grid grid-cols-3 grid-rows-3" style={{ width: "90%", borderRadius: "10px", gridGap: "10px",boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", }}>
              <TextField
                label="Company ID"
                type="text"
                variant="outlined"
                placeholder="Enter your valid ID here"
                name="companyID"
                value={this.state.companyID}
                onChange={this.handleInput}
                required
              />
              <TextField
                label="Company Name"
                type="text"
                variant="outlined"
                placeholder="Enter your Name here"
                name="companyName"
                id='companyName'
                value={this.state.companyName}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Company Contact"
                type="text"
                variant="outlined"
                placeholder="Enter your contact here"
                name="companyContact"
                id='companyContact'
                value={this.state.companyContact}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Company Email"
                type="email"
                variant="outlined"
                placeholder="Enter your Email here"
                name="companyEmail"
                id='companyEmail'
                value={this.state.companyEmail}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Company Address"
                type="text"
                variant="outlined"
                placeholder="Enter your Address here"
                name="companyAddress"
                id='companyAddress'
                value={this.state.companyAddress}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Delevar Price"
                type="text"
                variant="outlined"
                placeholder="Enter your price here"
                name="delevarPrice"
                id='delevarPrice'
                value={this.state.delevarPrice}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

              <button onClick={this.handleSubmit} type="button" className="w-full bg-accent-navy-200 text-white bg-green-600 py-2 rounded m-0">
                <h6>Save</h6>
              </button>

            
              <button onClick={this.handleUpdate} type="button" className="w-full bg-accent-navy-200 text-white bg-yellow-600 py-2 rounded m-0">
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
                  Company ID
                </TableCell>
                <TableCell >
                  Company Name
                </TableCell>
                <TableCell >
                  Company Address
                </TableCell>
                <TableCell >
                  Contact
                </TableCell>
                <TableCell >
                  Company Email
                </TableCell>
                <TableCell >
                  Delevar Parice
                </TableCell>
                <TableCell >
                  _id
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {this.state.delevaryList.map(delevary=>(
              <DelevaryCom key={delevary._id} companyID={delevary.companyID} companyName={delevary.companyName} companyAddress={delevary.companyAddress} companyContact={delevary.companyContact} companyEmail={delevary.companyEmail} delevarPrice={delevary.delevarPrice} _id={delevary._id} setText={this.setText}></DelevaryCom>
              ))}

{/* setText ={this.setText()} */}

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
