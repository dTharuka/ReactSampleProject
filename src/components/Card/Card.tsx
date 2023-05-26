import React, { Component } from 'react'
import axios from '../../axios';
import HomeImage from "./../../assets/homePhoto.jpg";

type CardDetails={
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

type CardProps={
    bookID:string;
    bookName:string;
    author:string;
    unitPrice:number;
    qtyOnHand:number;
    language:string; 
    url:string
};
type CardState={
bookList:CardDetails[];
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
}

export default class Card extends Component<CardProps,CardState> {

    constructor(props:CardProps){
        super(props);
        this.state={
            bookList:[],
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
        };
      }


      getAllItems=()=>{
        axios.get("item").then((res)=>{
          console.log(res.data.responseData);
          this.setState((prevState)=>({
            ...prevState,
            bookList:res.data.responseData,
          }));
        })
      }

  render() {
    return (
      <div>
    
        <div className=" h-96 w-80 ml-5 mt-10" style={{ borderRadius: "10px", gridGap: "5px" , boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>
          <h1 className="text-center font-bold pt-3" key={this.props.bookID}>{this.props.bookID}</h1>
          <h1 className="text-center font-bold pt-1" key={this.props.bookID}>{this.props.bookName}</h1>
          <img src={`http://localhost:3000/uploads/${this.props.url}`} className=" pt-2 h-44 w-44 mx-auto block"></img>
          <h1 className="text-center font-bold pt-1" key={this.props.bookID}>Available Qty is {this.props.qtyOnHand}</h1>
          <h1 className="text-center font-bold pt-1" key={this.props.bookID}>{this.props.language}</h1>
          <h1 className="text-center font-bold pt-1" key={this.props.bookID}>Author is {this.props.author}</h1>
          <h1 className="text-center font-bold pt-1" key={this.props.bookID}>Price -: {this.props.unitPrice}</h1>
        </div>
        
       
      </div>
    )
  }
}
