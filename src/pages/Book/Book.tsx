import React, { Component } from 'react'
import axios from '../../axios';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header'
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
  // bookID:string;
  // bookName:string;
  // author:string;
  // unitPrice:number;
  // qtyOnHand:number;
  // language:string; 
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


export default class Book extends Component<CardProps,CardState> {

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

  componentDidMount():void{
    this.getAllItems();
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
        <Header/>
        <div className=" h-96 w-full mt-5 mb-5 grid grid-cols-4" >
          {this.state.bookList.map((book) => (
<Card  bookID={book.bookID} bookName={book.bookName} qtyOnHand={book.qtyOnHand} language={book.language} author={book.author} unitPrice={book.unitPrice} url={book.photo} />
            ))}
            </div>
      </div>
    )
  }
}
