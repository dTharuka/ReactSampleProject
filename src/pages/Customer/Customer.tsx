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
  pdf:jsPDF;
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

  const pdf = new jsPDF();
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
    // const pdf = new jsPDF();
    let responseBody: customerProp = {
      cusID: cusID,
      cusName: cusName,
      cusEmail: cusEmail,
      cusSalary: cusSalary,
      cusAddress: cusAddress,
      cusPostalCode: cusPostalCode,
      pdf:pdf,
      
    };
    // alert(JSON.stringify(responseBody));
  };

  // function formatString(property: string, value: string): string {
  //   const formattedProperty = property.padEnd(15, ' ');
  //   const formattedValue = value.padEnd(30, ' ');
  //   return `${formattedProperty}${formattedValue}`;
  // }
  


  const handleSaveCustomer = () => {
    handleSubmit();
    // const pdfComponent= 
      // <Pdf
      
      
      //   cusID={"Customer ID: "+$("#cusID").val()?.toString()}
      //   cusName={"Name: "+$("#cusName").val()?.toString()}
      //   cusEmail={"Email: "+$("#cusEmail").val()?.toString()}
      //   cusSalary={"Salary: "+$("#cusSalary").val()?.toString()}
      //   cusAddress={"Address: "+$("#cusAddress").val()?.toString()}
      //   cusPostalCode={"Postal Code:"+$("#cusPostalCode").val()?.toString()}
        
      // />
      
     

 
      


      

 
    
      const pdfComponent= <Pdf pdf={pdf}/>
      


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
      
      // const pdf = new jsPDF();
      
      


      const cusID = $("#cusID").val()?.toString();
      const cusName = $("#cusName").val()?.toString();
      const cusEmail = $("#cusEmail").val()?.toString();
      const cusSalary = $("#cusSalary").val()?.toString();
      const cusAddress = $("#cusAddress").val()?.toString();
      const cusPostalCode = $("#cusPostalCode").val()?.toString();

      pdf.setFontSize(11);

      const content = `
                                                                                                                                                              Bismarck
                                                                                                                                                  2nd Cross Street
                                                                                                                                               Calabasa,Califonia
                                                                                                                                                                   19210
                                                                                                                                                       United States
                                                                                                                                                    1-888-123-4567




    
    
                                                                                                  
    Thomson                                                                                 26/03/2021       INV-10012               $1,699.48
    3rd Cross Street
    Las Vegas
    90210                                                                                      25/04/2021
    United States
    1-888-123-8910

    `;

    const contentHeader =`
    Billed To                                                                                  Date Issued      Invoice Number   Amount Due
    `
    pdf.setTextColor('#4287f5');
    pdf.text(contentHeader,10,68);
    pdf.setTextColor('#oooooo');

    const dateDue =`
                                                                                                    Due Date
    `;
    pdf.setTextColor('#4287f5');
    pdf.text(dateDue,10,82);
    pdf.setTextColor('#oooooo');

    const headres =`
    DESCRIPTION                                                                          RATE                     QTY                  AMOUNT
    `;


   
   
    
    pdf.text(content, 10, 15);
    // const line="-----------------------------------------------------------------------------------------------";
    pdf.setTextColor('#4287f5');
    pdf.text(headres,10,133);
    pdf.setTextColor('#oooooo');

    const services =`
    Services                                                                                    $55.00                       10                     $550.00
    `
    pdf.text(services,10,145);

    pdf.setFontSize(9);
    const servicesDescription =`
     Cost ofvarious services                                                                                       +Tax                                             
    `
    pdf.text(servicesDescription,10,152);


    pdf.setFontSize(11);
    const consulting =`
    Consulting                                                                                 $75.00                       10                     $750.00
    ` 
    pdf.text(consulting,10,163);

    pdf.setFontSize(9);
    const consultingDescription =`
     Consultant for your business                                                                               +Tax                                             
    `
    pdf.text(consultingDescription,10,170);

    pdf.setFontSize(11);
    const materials =`
    Materials                                                                                   $90.00                       10                     $900.00
    ` 
    pdf.text(materials,10,181);

    pdf.setFontSize(9);
    const materialsDescription =`
     Cost of materials and supplies to complete job                                                  +Tax                                             
    `
    pdf.text(materialsDescription,10,188);

    pdf.setFontSize(11);
    const subTotal =`
                                                                                                            Subtotal                                      $2200.00
    `
    pdf.text(subTotal,10,200);

    const discount =`
                                                                                                            Discount                                      -$179.84
    `
    pdf.text(discount,10,207);

    const tax =`
                                                                                                                   Tax                                        +$80.93
    `
    pdf.text(tax,10,214);

    const total =`
                                                                                                                  Total                                     $2101.09
    `
    pdf.text(total,10,223);

    const deposit =`
                                                                                                                  Deposit Requested                $169.95
    `
    pdf.text(deposit,10,230);

    const depositDue =`
                                                                                                                  Deposit Due                           $169.95
    `
    pdf.text(depositDue,10,239);

    const depositDue2 =`
                                                                                                                  Deposit Due                           $169.95
    `
    pdf.text(depositDue2,10,239);

    pdf.setTextColor('#4287f5');
    const noteHeader =`
    Notes
    ` 
    pdf.text(noteHeader,10,255);

    pdf.setTextColor('#oooooo');
    const notes =`
    Thank you for your business !
    ` 
    pdf.text(notes,10,260);

    pdf.setTextColor('#4287f5');
    const termsHeader =`
    Terms
    ` 
    pdf.text(termsHeader,10,275);

    pdf.setTextColor('#oooooo');
    const terms =`
    Please pay within 30 days using the link in your invoice email.
    ` 
    pdf.text(terms,10,280);

   
  
    
    pdf.setDrawColor(0, 0, 0);
    
    //table header eke uda line eka
    pdf.setDrawColor(0, 0, 245);
    pdf.line(14, 130, 198, 130);
    pdf.line(14, 130.3, 198, 130.3);


    pdf.setDrawColor(0, 0, 0);
    pdf.line(14, 159, 198, 159);

    pdf.line(14, 177, 198, 177);

    pdf.line(106, 221, 198, 221);

    pdf.setDrawColor(0, 0, 245);
    pdf.line(106, 237, 198, 237);
    pdf.line(106, 237.3, 198, 237.3);


    //  //table header eke pahala line eka
    // pdf.line(14, 110, 207, 110);  

    //  //left side line eka
    //  pdf.line(14, 102, 14, 125);  

    //  //right side line eka
    //  pdf.line(207, 102, 207, 125);  

    //  //table bottom eke line eka
    // pdf.line(14, 125, 207, 125);

    // //separate lines
    // pdf.line(40, 102, 40, 125);
    // pdf.line(73, 102, 73, 125);
    // pdf.line(125, 102, 125, 125);
    // pdf.line(145, 102, 145, 125);  
    // pdf.line(185, 102, 185, 125);  

    pdf.setDrawColor(0); 
    // pdf.setTextColor(0, 0, 255);
    // pdf.text(line, 10, 10);
    // pdf.setTextColor(0, 0, 0);
   

  
  //     const content = `
  //     Customer ID: ${cusID}
  //     Name: ${cusName}
  //     Email: ${cusEmail}
  //     Salary: ${cusSalary}
  //     Address: ${cusAddress}
  //     Postal Code: ${cusPostalCode}
  // `;

  //     pdf.addPage();
  //     pdf.text(content, 10, 10);
      
      
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
        <Form.Control onChange={handleInputChange} name='cusID' id='cusID' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{width:"90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer ID" />
      </Form.Group></Col>

      <Col sm={12} lg={4} md={6}>
      <Form.Group className="mt-4 text-center" controlId="customerName">
        <Form.Label >Customer Name</Form.Label>
        <Form.Control onChange={handleInputChange} name='cusName' id='cusName' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Name" />
      </Form.Group></Col>

        <Col sm={12} lg={4} md={6}>
        <Form.Group className="mt-4 text-center" controlId="customerEmail">
        <Form.Label >Customer E-mail</Form.Label>
        <Form.Control onChange={handleInputChange} name='cusEmail' id='cusEmail' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="email" placeholder="Enter customer E-mail" />
      </Form.Group></Col>
        {/* </Row> */}

        {/* <Row> */}
  <Col sm={12} lg={4} md={6}>
  <Form.Group className=" mb-4 text-center" controlId="customerSalary">
        <Form.Label >Customer Salary</Form.Label>
        <Form.Control onChange={handleInputChange} name='cusSalary' id='cusSalary' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Salary" />
      </Form.Group></Col>

      <Col sm={12} lg={4} md={6}>
      <Form.Group className="mb-4 text-center" controlId="customerAddress">
        <Form.Label >Customer Address</Form.Label>
        <Form.Control onChange={handleInputChange} name='cusAddress' id='cusAddress' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Address" />
      </Form.Group></Col>

        <Col sm={12} lg={4} md={6}>
        <Form.Group className="mb-4 text-center" controlId="postalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control onChange={handleInputChange} name='cusPostalCode' id='cusPostalCode' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter Postal Code" />
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
