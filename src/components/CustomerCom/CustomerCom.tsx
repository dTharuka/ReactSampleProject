import { TableRow } from '@mui/material';
import { Component } from 'react'

type CustomerComProps={
    _id:string;
    customerID:string;
    customerName:string;
    customerAddress:string;
    customerContact:string;
    customerEmail:string;
    customerSalary:string;
    setText: (customerID:string,customerName:string,customerAddress:string,customerContact:string,customerEmail:string,customerSalary:string) => void;
}

export default class CustomerCom extends Component<CustomerComProps> {
    constructor(props:CustomerComProps){
        super(props);
    }
    handleClick=()=>{
      this.props.setText(this.props.customerID,this.props.customerName,this.props.customerAddress,this.props.customerContact,this.props.customerEmail,this.props.customerSalary)
    }
  render() {
    return (
        <tr  onClick={this.handleClick} className="!z-50 !cursor-pointer hover:bg-rose-100 h-10">
        <td>{this.props.customerID}</td>
        <td>{this.props.customerName}</td>
        <td>{this.props.customerAddress}</td>
        <td>{this.props.customerContact}</td>
        <td>{this.props.customerEmail}</td>
        <td>{this.props.customerSalary}</td>
        <td>{this.props._id}</td>
      </tr>
    )
  }
}
