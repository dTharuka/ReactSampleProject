import { TableRow } from '@mui/material';
import { Component } from 'react'

type ItemComProps={
    // _id:string;
    bookID:string;
    bookName:string;
    catagory:string;
    photo:string;
    author:string;
    description:string;
    unitPrice:number;
    qtyOnHand:number;
    language:string;
    setText:(bookID:string,bookName:string,catagory:string,photo:string,author:string,description:string,unitPrice:number,qtyOnHand:number,language:string)=>void;
}

export default class ItemCom extends Component<ItemComProps> {
    constructor(props:ItemComProps){
        super(props);
    }

    handleClick=()=>{
      this.props.setText(this.props.bookID,this.props.bookName,this.props.catagory,this.props.photo,this.props.author,this.props.description,this.props.unitPrice,this.props.qtyOnHand,this.props.language)
    }

  render() {
    return (
        <tr onClick={this.handleClick} className="!z-50 !cursor-pointer hover:bg-rose-100 h-10">
        <td><img className="h-10 w-10" style={{borderRadius: "100%"}} src={`http://localhost:3000/uploads/${this.props.photo}`} alt="" /></td>
        <td>{this.props.bookID}</td>
        <td>{this.props.bookName}</td>
        <td>{this.props.catagory}</td>
        <td>{this.props.author}</td>
        <td>{this.props.description}</td>
        <td>{this.props.unitPrice}</td>
        <td>{this.props.qtyOnHand}</td>
        <td>{this.props.language}</td>
        {/* <td>{this.props._id}</td> */}
      </tr>
    )
  }
}
