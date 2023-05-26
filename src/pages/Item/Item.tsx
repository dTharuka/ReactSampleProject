import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { ChangeEvent, Component, RefObject } from 'react'
import InnerHeader from '../../components/InnerHeader/InnerHeader'
import ItemCom from '../../components/ItemCom/ItemCom';
import axios from '../../axios';
import $ from 'jquery';
import { red } from '@mui/material/colors';


type ItemDetails={
    _id:string;
    photo:any;
    bookID:string;
    bookName:string;
    catagory:string;
    author:string;
    description:string;
    unitPrice:number;
    qtyOnHand:number;
    language:string;
};

type ItemProps={};
type ItemState={
itemList:ItemDetails[];
_id:string;
photo:any;
bookID:string;
bookName:string;
catagory:string;
author:string;
description:string;
unitPrice:number;
qtyOnHand:number;
language:string;
click:boolean;
isClicked: boolean;
}

let count:number;
export default class Item extends Component<ItemProps,ItemState> {
  private catagoryRef: RefObject<HTMLInputElement>;
  private authorRef: RefObject<HTMLInputElement>;

  constructor(props:ItemProps){
    super(props);
    this.state={
      itemList:[],
      _id:"",
      photo:"",
      bookID:"",
      bookName:"",
      catagory:"",
      author:"",
      description:"",
      unitPrice:0,
      qtyOnHand:0,
      language:"",
      click:false,
      isClicked: false,
    };
    this.catagoryRef = React.createRef<HTMLInputElement>(); 
    this.authorRef = React.createRef<HTMLInputElement>();// Initialize the ref

  }

  componentDidMount():void{
    this.getAllItems();
  }

  //--------------------------------border eke color eka change karana eka-------------------------------

  handleIsClick = () => {
    this.setState({ isClicked: true });
  };


//--------------------------------curser eka change wena eka text field athara-------------------------------

handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

  if (event.key === 'Enter') {
    event.preventDefault();
    if (this.catagoryRef.current) {
      this.catagoryRef.current.focus(); // Move the cursor to the next text field
    }
  }

};


  getAllItems=()=>{
    axios.get("item").then((res)=>{
      //console.log(res.data.responseData);
      this.setState((prevState)=>({
        ...prevState,
        itemList:res.data.responseData,
      }));
      this.handleItemID();
    })
  }

 


  handleInput=(event:ChangeEvent<HTMLInputElement>)=>{

    $("#bookName").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#bookName").css({
          color: "green"         
        });
      }else{
        $("#bookName").css({
          color: "red"
        });
      }
    });

    $("#catagory").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#catagory").css({
          color: "green"
        });
      }else{
        $("#catagory").css({
          color: "red"
        });
      }
    });

    $("#author").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#author").css({
          color: "green"
        });
      }else{
        $("#author").css({
          color: "red"
        });
      }
    });

    $("#description").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#description").css({
          color: "green"
        });
      }else{
        $("#description").css({
          color: "red"
        });
      }
    });

    $("#unitPrice").keyup(function () {
      if (/^[0-9]+$/.test(event.target.value)) {
        $("#unitPrice").css({
          color: "green"
        });
      }else{
        $("#unitPrice").css({
          color: "red"
        });
      }
    });

    $("#qtyOnHand").keyup(function () {
      if (/^[0-9]+$/.test(event.target.value)) {
        $("#qtyOnHand").css({
          color: "green"
        });
      }else{
        $("#qtyOnHand").css({
          color: "red"
        });
      }
    });

    $("#language").keyup(function () {
      if (/^[A-Za-z]+$/.test(event.target.value)) {
        $("#language").css({
          color: "green"
        });
      }else{
        $("#language").css({
          color: "red"
        });
      }
    });
    const{name,value,type}= event.target;
   // console.log(event);
  
    const inputValue=type === "number" ? parseInt(value):value;

   
    this.setState((prevState)=>({
        ...prevState,
        [name]:value,
    }));


  }
  handleFileSelect = (event: any) => {

    this.setState((prevState)=>({
      ...prevState,
      photo:event.target.files[0],
  }));
  };
  //--------------------------------text field clear karanne meken-------------------------------------

clearTextField = () => {
  this.setState((prevState)=>({
    ...prevState,
      photo:"",
      bookID:"",
      bookName:"",
      catagory:"",
      author:"",
      description:"",
      unitPrice:0,
      qtyOnHand:0,
      language:""
}));
}

  handleSubmit=()=>{  
    const {bookID, bookName, catagory, photo, author, description, unitPrice, qtyOnHand,language}=this.state;
    let newBook={
      photo:" ",
      bookID:bookID,
      bookName:bookName,
      catagory:catagory,
      author:author,
      description:description,
      unitPrice:unitPrice,
      qtyOnHand:qtyOnHand,
      language:language,
    };
  
    axios.post("item",newBook).then((res)=>{
      let formData = new FormData();
        formData.append("files", photo);
    
      axios.put(`item/image/${res.data.responseData._id}`,formData).then((res)=>{
    
        this.getAllItems();      
        this.clearTextField();
      })

    })
  };

  //-----------------------------------------meka update karanna gahapu eka----------------------------------
handleUpdate = () => {
  const {_id, bookID, bookName, catagory, photo, author, description, unitPrice, qtyOnHand,language}=this.state; 

  let updateItem={
      photo:photo,
      bookID:bookID,
      bookName:bookName,
      catagory:catagory,
      author:author,
      description:description,
      unitPrice:unitPrice,
      qtyOnHand:qtyOnHand,
      language:language
  };

  if (window.confirm('Do you want to update this Item ?')) {
    axios
      .put(`item/${bookID}`, updateItem)
      .then(() => {
        this.getAllItems();
        alert('Data Updated successfully. ');
        this.clearTextField();
        this.setState({ click: false });
      })
      .catch((error) => {
        //console.log(error);
        alert('Error updating data. Because: ' + error);
      });
  }

}
//-----------------------------------------------------the end----------------------------------


//-----------------------------------------meka delete karanna gahapu eka----------------------------------
handleDelete = () => {
  const {bookID}=this.state; 
  if (window.confirm('Do you want to remove this Item ?')) {
    axios
      .delete(`item/${bookID}`)
      .then(() => {
        // this.getAllItems();
        alert('Data deleted successfully. ');
        this.clearTextField();
        this.setState({ click: false });
        //this.handleItemID();
        this.getAllItems();
      })
      .catch((error) => {
        console.log(error);
        alert('Error deleting data. ');
      });
  }
}
//-----------------------------------------------------the end----------------------------------


//====================================set value to text field=========================================================
setText=(bookID:string,bookName:string,catagory:string,photo:string,author:string,description:string,unitPrice:number,qtyOnHand:number,language:string)=>{
  this.setState((prevState)=>({
    ...prevState,
      click:true,
      photo:photo,
      bookID:bookID,
      bookName:bookName,
      catagory:catagory,
      author:author,
      description:description,
      unitPrice:unitPrice,
      qtyOnHand:qtyOnHand,
      language:language
}));
}

//---------------------------------------itemID auto generat function-----------------------------------
handleItemID = (): void => {
  if(!this.state.click){
    this.getAllItems();
  count=this.state.itemList.length+1;
  let setCount = count.toString();

  this.setState((prevState)=>({
    ...prevState,
    bookID:"B00"+setCount,
  }));
  }
};




  render() {
    return (
      <div>
        <InnerHeader/>
        <h1 className="mb-10 mt-24 text-center animate-bounce ..." style={{ fontSize: "32px"}}>Add New Book</h1>

        <form className=" mr-10 mx-20 py-8 px-10 grid grid-cols-3 grid-rows-4" style={{ width: "90%", borderRadius: "10px", gridGap: "10px" ,boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

              <TextField
                label="Book ID"
                type="text"
                variant="outlined"
                placeholder="Enter your Book ID here"
                name="bookID"
                value={this.state.bookID}
                onChange={this.handleInput}
                required
              />
              <TextField
                label="Book Name"
                type="text"
                variant="outlined"
                placeholder="Enter your Book Name here"
                name="bookName"
                id="bookName"
                value={this.state.bookName}
                onChange={this.handleInput}
                onKeyDown={this.handleKeyDown}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Catagory"
                type="text"
                variant="outlined"
                placeholder="Enter your catagory here"
                name="catagory"
                id='catagory'
                value={this.state.catagory}
                onChange={this.handleInput}
                inputRef={this.catagoryRef}
                // focused={this.state.isClicked}
                required
              />

            <input
                type="file"
                name="photo"
                onChange={this.handleFileSelect}
              multiple
                required
                
              />

            <TextField
                label="Author"
                type="text"
                variant="outlined"
                placeholder="Enter your author here"
                name="author"
                id='author'
                value={this.state.author}
                onChange={this.handleInput}
                inputRef={this.authorRef}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Description"
                type="text"
                variant="outlined"
                placeholder="Enter your description here"
                name="description"
                id='description'
                value={this.state.description}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="UnitPrice"
                type="text"
                variant="outlined"
                placeholder="Enter your unitPrice here"
                name="unitPrice"
                id='unitPrice'
                value={this.state.unitPrice}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="qtyOnHand"
                type="text"
                variant="outlined"
                placeholder="Enter your qtyOnHand here"
                name="qtyOnHand"
                id='qtyOnHand'
                value={this.state.qtyOnHand}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            <TextField
                label="Language"
                type="text"
                variant="outlined"
                placeholder="Enter your language here"
                name="language"
                id='language'
                value={this.state.language}
                onChange={this.handleInput}
                // focused={this.state.isClicked}
                required
              />

            
              <button onClick={this.handleSubmit}type="button" className="w-full bg-accent-navy-200 text-white bg-green-600 py-2 rounded m-0">
                <h6>Save</h6>
              </button>

              <button onClick={this.handleUpdate} type="button" className="w-full bg-accent-navy-200 text-white bg-yellow-600 py-2 rounded m-0">
                <h6>Update</h6>
              </button>

              <button onClick={this.handleDelete} type="button" className="w-full bg-accent-navy-200 text-white bg-red-600 py-2 rounded m-0">
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
                  Book Picture
                </TableCell>
                <TableCell>
                  Book ID
                </TableCell>
                <TableCell >
                  Book Name
                </TableCell>
                <TableCell >
                  Catagory
                </TableCell>
                <TableCell >
                  Author
                </TableCell>
                <TableCell >
                  Description
                </TableCell>
                <TableCell >
                  Unit Price
                </TableCell>
                <TableCell >
                  Qty On Hand
                </TableCell>
                <TableCell >
                  Language
                </TableCell>
                {/* <TableCell >
                  _id
                </TableCell> */}
                
              </TableRow>
            </TableHead>
            <TableBody>

            {this.state.itemList.map(item=>(
              <ItemCom key={item.bookID} photo={item.photo} bookID={item.bookID} bookName={item.bookName} catagory={item.catagory} author={item.author} description={item.description} unitPrice={item.unitPrice} qtyOnHand={item.qtyOnHand} language={item.language} setText={this.setText}></ItemCom>
              ))}

              {/* <TableRow>
                <TableCell>B001</TableCell>
                <TableCell>Physics Rosa</TableCell>
                <TableCell>Physics</TableCell>
                <TableCell>R.D.Rosa</TableCell>
                <TableCell>Lol</TableCell>
                <TableCell>350.00</TableCell>
                <TableCell>100</TableCell>
                <TableCell>Sinhala</TableCell>
              </TableRow>

              <TableRow>
              <TableCell>B002</TableCell>
                <TableCell>Chemistry Physicle</TableCell>
                <TableCell>Chemistry</TableCell>
                <TableCell>Lasindu</TableCell>
                <TableCell>Lol</TableCell>
                <TableCell>250.00</TableCell>
                <TableCell>50</TableCell>
                <TableCell>English</TableCell>
              </TableRow> */}

            </TableBody>
          </Table>
        </TableContainer>

      </div>
    )
  }
}
