import  { Component } from 'react'
type OrderComProps={
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
  setText:(orderID:string,orderQty:number,customerID:string,customerName:string,bookID:string,bookName:string,companyID:string,companyName:string,orderAmount:number)=>void;
}

export default class OrderCom extends Component<OrderComProps> {
    constructor(props:OrderComProps){
        super(props);
    }

    handleClick=()=>{
      this.props.setText(this.props.orderID,this.props.orderQty,this.props.customerID,this.props.customerName,this.props.bookID,this.props.bookName,this.props.companyID,this.props.companyName,this.props.orderAmount)
    }
  render() {
    return (
        <tr onClick={this.handleClick} className="!z-50 !cursor-pointer hover:bg-rose-100 h-10">
        <td >{this.props.orderID}</td>
        <td>{this.props.orderQty}</td>
        <td>{this.props.customerID}</td>
        <td>{this.props.customerName}</td>
        <td>{this.props.bookID}</td>
        <td>{this.props.bookName}</td>
        <td>{this.props.companyID}</td>
        <td>{this.props.companyName}</td>
        <td>{this.props.orderAmount}</td>
        <td>{this.props._id}</td>
      </tr>
    )
  }
}
