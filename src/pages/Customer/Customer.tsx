import React, { ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import $, { data } from "jquery";
import { Container, Row, Col } from 'react-bootstrap';
import { Page, Text, View, Document, StyleSheet, PDFViewer, pdf } from '@react-pdf/renderer';
import Pdf from '../../components/PDF/Pdf';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.css';


type customerProp={
  cusID:string;
  cusName:string;
  cusEmail:string;
  cusSalary:string;
  cusAddress:string;
  cusPostalCode:string;
}


function Customer() {
  const [cusID, idChange] = useState("");
  const [cusName, nameChange] = useState("");
  const [cusEmail, emailChange] = useState("");
  const [cusSalary, salaryChange] = useState("");
  const [cusAddress, addressChange] = useState("");
  const [cusPostalCode, postalCodeChange] = useState("");

  

  
  
  


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "cusID":
        idChange(value);
        break;
      case "cusName":
        nameChange(value);
        break;
      case "cusEmail":
        emailChange(value);
        break;
      case "cusSalary":
        salaryChange(value);
        break;
      case "cusAddress":
        addressChange(value);
        break;
      case "cusPostalCode":
        postalCodeChange(value);
        break;
      default:
        break;
    }
  };

  // const handleSubmit = () => {
  //   let responseBody = {
  //     cusID: $("#cusID").val(),
  //     cusName: $("#cusName").val(),
  //     cusEmail: $("#cusEmail").val(),
  //     cusSalary: $("#cusSalary").val(),
  //     cusAddress: $("#cusAddress").val(),
  //     cusPostalCode: $("#cusPostalCode").val(),
  //   };
  //   alert(JSON.stringify(responseBody));
  // };

  const handleSubmit = () => {
    let responseBody: customerProp = {
      cusID: cusID,
      cusName: cusName,
      cusEmail: cusEmail,
      cusSalary: cusSalary,
      cusAddress: cusAddress,
      cusPostalCode: cusPostalCode,
    };
    // alert(JSON.stringify(responseBody));
  };


  const handleSaveCustomer = () => {
    handleSubmit();
    const pdfComponent= 
      <Pdf
        cusID={"Customer ID: "+$("#cusID").val()?.toString()}
        cusName={"Name: "+$("#cusName").val()?.toString()}
        cusEmail={"Email: "+$("#cusEmail").val()?.toString()}
        cusSalary={"Salary: "+$("#cusSalary").val()?.toString()}
        cusAddress={"Address: "+$("#cusAddress").val()?.toString()}
        cusPostalCode={"Postal Code:"+$("#cusPostalCode").val()?.toString()}
      />
      



    const pdfContainer = document.getElementById('cusPdf');
    if (pdfContainer) {
      pdfContainer.innerHTML = ''; 
      ReactDOM.render(pdfComponent, pdfContainer);


      //-----new--------
      const downloadBtn = document.createElement('button');
      downloadBtn.style.background = '#039b48';
      downloadBtn.style.color = '#ffffff';
      downloadBtn.style.borderRadius = '5px';
      downloadBtn.style.marginTop = '3px';
      downloadBtn.style.fontSize = '90%';
      downloadBtn.style.width = '40%';
      downloadBtn.style.padding = '3px';
    downloadBtn.innerText = 'Download PDF';

    
    downloadBtn.addEventListener('click', () => {
      
      const pdf = new jsPDF();


      const cusID = $("#cusID").val()?.toString();
      const cusName = $("#cusName").val()?.toString();
      const cusEmail = $("#cusEmail").val()?.toString();
      const cusSalary = $("#cusSalary").val()?.toString();
      const cusAddress = $("#cusAddress").val()?.toString();
      const cusPostalCode = $("#cusPostalCode").val()?.toString();

      const content = `
    Customer ID: ${cusID}
    Name: ${cusName}
    Email: ${cusEmail}
    Salary: ${cusSalary}
    Address: ${cusAddress}
    Postal Code: ${cusPostalCode}
  `;

  // Add the content to the PDF
  pdf.text(content, 10, 10);
      
      
      pdf.save('customer_details.pdf');
    });
    pdfContainer.appendChild(downloadBtn);


    }
    }






  //   handleSubmit();
  //   const pdfComponent = <Pdf cusID={$("#cusID").val()?.toString()} cusName={$("#cusName").val()?.toString()} cusEmail={$("#cusEmail").val()?.toString()} cusSalary={$("#cusSalary").val()?.toString()} cusAddress={$("#cusAddress").val()?.toString()} cusPostalCode={$("#cusPostalCode").val()?.toString()} />;
  //   const pdfString = renderToString(
  //     <PDFViewer>
  //       <Document>{pdfComponent}</Document>
  //     </PDFViewer>
  //   );
  
  //   const pdf = new jsPDF();
  //   const pdfContainer = document.getElementById('cusPdf');
  
  //   if (pdfContainer) {
  //     pdfComponent.html(pdfString);
  //     pdf.innerHTML = '';

  //     const downloadBtn = document.createElement('button');
  //     downloadBtn.innerText = 'Download PDF';
  //     downloadBtn.addEventListener('click', () => {
  //       pdf.save('customer_details.pdf');
  //     });
  //     pdfContainer.appendChild(downloadBtn);
  //   }

  // };

  return (
    <div className=' bg-white w-10/12 h-full absolute right-0 top-0 '>
      <div>


<Form className=' mt-24 ml-5 pl-5 w-3/5 rounded-lg' style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
{/* className='grid grid-rows-3 grid-cols-3  mt-24 mx-10' */}
<Row>
  <Col sm={12} lg={4} md={6}>
  <Form.Group className="mt-4 text-center" controlId="customerID">
        <Form.Label >Customer ID</Form.Label>
        <Form.Control onChange={handleInputChange} id='cusID' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{width:"90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer ID" />
      </Form.Group></Col>

      <Col sm={12} lg={4} md={6}>
      <Form.Group className="mt-4 text-center" controlId="customerName">
        <Form.Label >Customer Name</Form.Label>
        <Form.Control onChange={handleInputChange} id='cusName' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Name" />
      </Form.Group></Col>

        <Col sm={12} lg={4} md={6}>
        <Form.Group className="mt-4 text-center" controlId="customerEmail">
        <Form.Label >Customer E-mail</Form.Label>
        <Form.Control onChange={handleInputChange} id='cusEmail' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="email" placeholder="Enter customer E-mail" />
      </Form.Group></Col>
        {/* </Row> */}

        {/* <Row> */}
  <Col sm={12} lg={4} md={6}>
  <Form.Group className=" mb-4 text-center" controlId="customerSalary">
        <Form.Label >Customer Salary</Form.Label>
        <Form.Control onChange={handleInputChange} id='cusSalary' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Salary" />
      </Form.Group></Col>

      <Col sm={12} lg={4} md={6}>
      <Form.Group className="mb-4 text-center" controlId="customerAddress">
        <Form.Label >Customer Address</Form.Label>
        <Form.Control onChange={handleInputChange} id='cusAddress' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Address" />
      </Form.Group></Col>

        <Col sm={12} lg={4} md={6}>
        <Form.Group className="mb-4 text-center" controlId="postalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control onChange={handleInputChange} id='cusPostalCode' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter Postal Code" />
      </Form.Group></Col>
        {/* </Row> */}

        {/* <Row> */}
        <Col sm={12} lg={2} md={4}>
        <Button
            size='sm'
            id='saveBtn'
            className=' mb-2 border-0 w-28 rounded'
            style={{ background: "#039b48"}}
            variant="primary"
            type="button"
            onClick={(e) => {
              // handleSubmit();
              handleSaveCustomer();
              // $("#cusPdf").append(<Pdf cusID={$("#cusID").val()?.toString()} cusName={''} cusEmail={''} cusSalary={''} cusAddress={''} cusPostalCode={''}/>);
              // <Pdf cusID={cusID} cusName='' cusEmail='' cusSalary='' cusAddress='' cusPostalCode='' />;
              // $("#cusPdf").append(<Pdf cusID={cusID} cusName='' cusEmail='' cusSalary='' cusAddress='' cusPostalCode='' />);
              
            }}
          >
            Save User
          </Button>
          </Col>

          <Col sm={12} lg={2} md={4}>
          <Button
            size='sm'
            className=' mb-2 border-0 w-28 rounded'
            style={{ background: "#ffa502"}}
            variant="primary"
            type="button"
          >
            Update User
          </Button>
          </Col>

          <Col sm={12} lg={2} md={4}>
          <Button
            size='sm'
            className='  mb-2 border-0 w-28 rounded'
            style={{ background: "#ff4757"}}
            variant="primary"
            type="button"
          >
            Delete User
          </Button>
          </Col>
        </Row>
      </Form> 
      
      
      </div>
      <div className=' absolute  mt-10 left-2/3 top-14' id='cusPdf'></div>
    </div>
  );
}

export default Customer;
