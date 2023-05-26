import { TableRow } from '@mui/material';
import { Component } from 'react'

type DelevaryComProps={
    _id:string;
    companyID:string;
    companyName:string;
    companyContact:string;
    companyEmail:string;
    companyAddress:string;
    delevarPrice:number;
//====================================set value to text field=========================================================
setText: (companyID: string,companyName:string,companyContact:string,companyEmail:string,companyAddress:string,delevarPrice:number) => void;
}


export default class DelevaryCom extends Component<DelevaryComProps> {
        constructor(props:DelevaryComProps){
        super(props);
    }

    handleClick=()=>{
      this.props.setText(this.props.companyID,this.props.companyName,this.props.companyContact,this.props.companyEmail,this.props.companyAddress,this.props.delevarPrice)
    }

  render() {

    return (
      <tr onClick={this.handleClick} className="!z-50 !cursor-pointer hover:bg-rose-100 h-10">
        <td onClick={this.handleClick}>{this.props.companyID}</td>
        <td>{this.props.companyName}</td>
        <td>{this.props.companyAddress}</td>
        <td>{this.props.companyContact}</td>
        <td>{this.props.companyEmail}</td>
        <td>{this.props.delevarPrice}</td>
        <td>{this.props._id}</td>
        {/* <td><button className='bg-black' onClick={this.handleClick}>Edit</button></td> */}
      </tr>
    )
  }
}

// type DelevaryComProps={
//   _id:string;
//   companyID:string;
//   companyName:string;
//   companyContact:string;
//   companyEmail:string;
//   companyAddress:string;
//   delevarPrice:number;
// }

// type Props = {
//   rowData: DelevaryComProps;
//   onClick: (_id: string) => void;
//   MyTableRow: (props: Props) => DelevaryComProps;
// }

// export default class DelevaryCom extends Component<Props,DelevaryComProps> {
// constructor(props:Props){
//   super(props);
// }

// handleTableRowClick = () => {
//   const { rowData, onClick } = this.props;
//   this.MyTableRow({ rowData, onClick });
// };

// MyTableRow = ({ rowData, onClick }: Props) => {
//   console.log(onClick,rowData._id);
//   return rowData;
// }

// render() {
//   return (
//     <TableRow onClick={this.handleTableRowClick}>
//       <td>{this.props.companyID}</td>
//       <td>{this.props.companyName}</td>
//       <td>{this.props.companyAddress}</td>
//       <td>{this.props.companyContact}</td>
//       <td>{this.props.companyEmail}</td>
//       <td>{this.props.delevarPrice}</td>
//       <td>{this.props._id}</td>
//     </TableRow>
//   )
// }
// }
