import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
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
import userImage from "./../../assets/user.png";
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { Chart } from 'chart.js';


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

  let serviceAmount=0;

  
  
  


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

  const calcServiceAmount = () => {
    let qty = cusAddress;
    let rate = cusSalary;
    serviceAmount =( parseInt(qty) * parseInt(rate));
    
    
  }

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
      
     

 
      


      

 
    
      // const pdfComponent= <Pdf pdf={pdf}/>
      


    const pdfContainer = document.getElementById('cusPdf');
    if (pdfContainer) {
      // pdfContainer.innerHTML = ''; 
      // ReactDOM.render(pdfComponent, pdfContainer);


      //-----new--------
      // const downloadBtn = document.createElement('button');
      // downloadBtn.style.background = '#039b48';
      // downloadBtn.style.color = '#ffffff';
      // downloadBtn.style.borderRadius = '5px';
      // downloadBtn.style.marginTop = '3px';
      // downloadBtn.style.fontSize = '90%';
      // downloadBtn.style.width = '40%';
      // downloadBtn.style.padding = '3px';
      // downloadBtn.innerText = 'Download PDF';

    
    // downloadBtn.addEventListener('click', () => {
      $("#downloadPdfIcon").click(() => {
      
      // const pdf = new jsPDF();
      
      


      const cusID = $("#cusID").val()?.toString();
      const cusName = $("#cusName").val()?.toString();
      const cusEmail = $("#cusEmail").val()?.toString();
      const cusSalary = $("#cusSalary").val()?.toString();
      const cusAddress = $("#cusAddress").val()?.toString();
      const cusPostalCode = $("#cusPostalCode").val()?.toString();

      pdf.setFontSize(11);

    

    const address1=`
    Bismarck
    `

    const address2=`
    2nd Cross Street
    `

    const address3=`
    Calabasa,Califonia
    `

    const address4=`
    19210
    `

    const address5=`
    United States
    `
    const address6=`
    1-888-123-4567
    `

    pdf.text(address1,175,15);
    pdf.text(address2,162,20);
    pdf.text(address3,159,25);
    pdf.text(address4,180,30);
    pdf.text(address5,167.5,35);
    pdf.text(address6,163.5,40);

    const billedTo=`
    Billed To 
    `
    const date=`
    Date Issued 
    `
    const invoceNum=`
    Invoice Number 
    `
    const amount=`
    Amount Due
    `
    const dueDtae=`
    Due Date
    `

    
    const dateText=`
    26/03/2021
    `
    const invoceNumText=`
    INV-10012 
    `
    const amountText=`
    $1,699.48
    `
    const dueDtaeText=`
    25/04/2021
    `



    pdf.setTextColor('#4287f5');
    pdf.text(billedTo,10,74);
    pdf.text(amount,170,74);
    pdf.text(invoceNum,130,74);
    pdf.text(date,95,74);
    pdf.text(dueDtae,95,90);
    pdf.setTextColor('#oooooo');

   
    pdf.text(amountText,174,80);
    pdf.text(invoceNumText,130,80);
    pdf.text(dateText,95,80);
    pdf.text(dueDtaeText,95,95);


    const billedAddress=`
    Thomson
    3rd Cross Street
    Las Vegas
    90210
    United States
    1-888-123-8910
    `

    pdf.text(billedAddress,10,80);



    const description =`
    DESCRIPTION
    `;

    const rate =`
    RATE
    `;

    const qty =`
    QTY
    `;

    const amountHeader =`
    AMOUNT
    `;

   
   
  
    pdf.setTextColor('#4287f5');
    pdf.text(description,10,133);
    pdf.text(rate,117,133);
    pdf.text(qty,148,133);
    pdf.text(amountHeader,177,133);
    pdf.setTextColor('#oooooo');

    

    

    const services =`
    Services
    `
    const servicesRate =`
    $${cusSalary}.00
    `
    const servicesQty =`
    ${cusAddress}
    `
    const servicesAmount =`
    $${serviceAmount}.00
    `

    pdf.text(services,10,145);
    pdf.text(servicesRate,115,145);
    pdf.text(servicesQty,152,145);
    pdf.text(servicesAmount,180,145);

    pdf.setFontSize(9);
    const servicesDescription =`
     Cost ofvarious services                                            
    `
    pdf.text(servicesDescription,10,152);



    pdf.setFontSize(11);
    const consulting =`
    Consulting
    `
    const consultingRate =`
    $75.00
    `
    const consultingQty =`
    10
    `
    const consultingAmount =`
    $750.00
    `

    pdf.text(consulting,10,163);
    pdf.text(consultingRate,115,163);
    pdf.text(consultingQty,152,163);
    pdf.text(consultingAmount,180,163);

    pdf.setFontSize(9);
    const consultingDescription =`
     Consultant for your business                                            
    `;

    const taxText=`
    +Tax
    `
    pdf.text(consultingDescription,10,170);
    pdf.text(taxText,120.5,152);
    pdf.text(taxText,120.5,170);
    pdf.text(taxText,120.5,188);

    pdf.setFontSize(11);
   

    const materials =`
    Materials
    `
    const materialsRate =`
    $90.00
    `
    const materialsQty =`
    10
    `
    const materialsAmount =`
    $900.00
    `

    pdf.text(materials,10,181);
    pdf.text(materialsRate,115,181);
    pdf.text(materialsQty,152,181);
    pdf.text(materialsAmount,180,181);

    pdf.setFontSize(9);
    const materialsDescription =`
     Cost of materials and supplies to complete job                                            
    `
    pdf.text(materialsDescription,10,188);

    pdf.setFontSize(11);
    
    const subTotal=`
    Subtotal
    `;

    const subTotalPrice=`
    $2200.00
    `;

    const discount=`
    Discount
    `;
    const disconutPrice=`
    -$179.84
    `;

    const tax=`
    Tax
    `;

    const taxPrice=`
    +$80.93
    `;

    const total=`
    Total
    `;
    const totalPrice=`
    $2101.09
    `;

    const deposit=`
    Deposit Requested
    `;
    const depositPrice=`
    $169.95
    `;

    const depositDue=`
    Deposit Due
    `;
    const depositDuePrice=`
    $169.95
    `;
    

    pdf.text(subTotal,121,200);
    pdf.text(subTotalPrice,178,200);
    pdf.text(discount,120,207);
    pdf.text(disconutPrice,179,207);
    pdf.text(tax,128.5,214);
    pdf.text(taxPrice,180.5,214);
    pdf.text(total,126.5,223);
    pdf.text(totalPrice,178,223);
    pdf.text(deposit,102,230);
    pdf.text(depositPrice,180,230);
    pdf.text(depositDue,113.5,239);
    pdf.text(depositDuePrice,180,239);
    pdf.text(depositDue,113.5,239);
    pdf.text(depositDuePrice,180,239);



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
   
    
    
    const  linkedin=`
    Go to Linkedin -: 
    `;
    pdf.text(linkedin,10,265);
    const url=`
    ${"https://www.linkedin.com/in/dakshina-rajapaksha/"}
    `;
    pdf.setTextColor('#4287f5');
    pdf.text(url,41,265);
    pdf.setTextColor('#oooooo');



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

    pdf.addImage(userImage, 'PNG', 10, 15, 20, 20);


   
  
    
    pdf.setDrawColor(0, 0, 0);
    
    //table header eke uda line eka
    pdf.setDrawColor(0, 0, 245);
    pdf.line(14, 130, 198, 130);
    pdf.line(14, 130.3, 198, 130.3);


    pdf.setDrawColor(0, 0, 0);
    pdf.line(14, 159, 198, 159);

    pdf.line(14, 177, 198, 177);

    pdf.line(106, 221, 199, 221);

    pdf.setDrawColor(0, 0, 245);
    pdf.line(106, 237, 199, 237);
    pdf.line(106, 237.3, 199, 237.3);


    

    pdf.setDrawColor(0); 
      
      
      pdf.save('customer_details.pdf');
    });
    // pdfContainer.appendChild(downloadBtn);


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
    <div className=' bg-[#5f6c82] w-10/12 h-full absolute right-0 top-0 '>
      <div>


<Form className=' mt-24 ml-5 pl-5 w-3/5 rounded-lg bg-white' style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
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
        <Form.Label >Rate</Form.Label>
        <Form.Control onChange={handleInputChange} name='cusSalary' id='cusSalary' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Salary" />
      </Form.Group></Col>

      <Col sm={12} lg={4} md={6}>
      <Form.Group className="mb-4 text-center" controlId="customerAddress">
        <Form.Label >Qty</Form.Label>
        <Form.Control onChange={handleInputChange} name='cusAddress' id='cusAddress' className=' mt-0 pl-2 h-1/2 rounded-md border-0' style={{ width: "90%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} type="text" placeholder="Enter customer Address" />
      </Form.Group></Col>

        <Col sm={12} lg={4} md={6}>
        <Form.Group className="mb-4 text-center" controlId="postalCode">
        <Form.Label>Invoice Number</Form.Label>
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
              calcServiceAmount();
              $("#cusPdf").show();
              $("#pdfHeader").show();
              
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
      {/* <div className=' absolute  mt-10 left-2/3 top-14' id='cusPdf'></div> */}
      <div className=' h-12 w-80 bg-gray-700 absolute top-20 right-10 border-1 border-slate-950' id='pdfHeader' style={{display:"none"}}>
      <h5 className='font-serif inline-block absolute text-white pl-8 mb-0 mt-3' ><AiOutlineCloudDownload  className=' cursor-pointer' id='downloadPdfIcon' /> </h5>
      </div>

      <div className=' h-2/3 w-80 bg-white absolute top-32 right-10 border-1 border-slate-950' id='cusPdf' style={{display:"none"}}>

      <h5 className='text-right pr-1 pt-4 mb-0' style={{fontSize: "9px"}}>Bismarck</h5>
      <h5 className='text-right pr-1 mb-0' style={{fontSize: "9px"}}>2nd Cross Street</h5>
      <h5 className='text-right pr-1 mb-0' style={{fontSize: "9px"}}>Calabasa,Califonia</h5>
      <h5 className='text-right pr-1 mb-0' style={{fontSize: "9px"}}>19210</h5>
      <h5 className='text-right pr-1 mb-0' style={{fontSize: "9px"}}>United States</h5>
      <h5 className='text-right pr-1 mb-0' style={{fontSize: "9px"}}>1-888-123-4567</h5>


      <pre className=' text-left pl-1 mb-0 mt-3 text-cyan-400' style={{fontSize: "9px"}}>Billed To             Date Issued   Invoice Number   Amount Due</pre>
      


      <pre className='text-left pl-1 mb-0' style={{fontSize: "9px"}}>Thomson               26/03/2021    INV-10012        $1,699.48</pre>
      


      <h5 className='pl-1 mb-0' style={{fontSize: "9px"}}>3rd Cross Street</h5>
      <h5 className='pl-1 mb-0' style={{fontSize: "9px"}}>Las Vegas</h5>
      <h5 className='pl-1 mb-0' style={{fontSize: "9px"}}>90210</h5>
      <h5 className='pl-1 mb-0' style={{fontSize: "9px"}}>United States</h5>
      <h5 className='pl-1 mb-2' style={{fontSize: "9px"}}>1-888-123-8910</h5>
      

      <div className=' h-px bg-cyan-400 mt-3 relative' style={{width:"98%",left:"1%"}}></div>

      <pre className=' text-left pl-1 mb-0 mt-2 text-cyan-400' style={{fontSize: "9px"}}>DESCRIPTION                       RATE        QTY        AMOUNT</pre>
      <pre className=' text-left pl-1 mb-0 mt-px' style={{fontSize: "9px"}}>Services                          ${cusSalary}      {cusAddress}        ${parseInt(cusSalary)*parseInt(cusAddress)}.00</pre>
      <pre className=' text-left pl-1 mb-0' style={{fontSize: "8px"}}>Cost ofvarious services                  +Tax</pre>

      <hr className=' relative mt-1 mb-0' style={{width:"98%",left:"1%"}}></hr>

      <pre className=' text-left pl-1 mb-0 mt-0.5' style={{fontSize: "9px"}}>Consulting                        $75.00      10        $750.00</pre>
      <pre className=' text-left pl-1 mb-0' style={{fontSize: "8px"}}>Consultant for your business             +Tax</pre>

      <hr className=' relative mt-1 mb-0' style={{width:"98%",left:"1%"}}></hr>

      <pre className=' text-left pl-1 mb-0 mt-0.5' style={{fontSize: "9px"}}>Materials                         $90.00      10        $900.00</pre>
      <pre className=' text-left pl-1 mb-0' style={{fontSize: "8px"}}>Cost of materials                        +Tax</pre>

      <pre className=' text-left pl-1 mb-0 mt-0.5' style={{fontSize: "9px"}}>                                     Subtotal          $2200.00</pre>
      <pre className=' text-left pl-1 mb-0 mt-0.5' style={{fontSize: "9px"}}>                                     Discount          -$179.84</pre>
      <pre className=' text-left pl-1 mb-0 mt-0.5' style={{fontSize: "9px"}}>                                          Tax           +$80.93</pre>

      <hr className=' relative mt-px mb-0' style={{width:"55%",left:"44%"}}></hr>
      <pre className=' text-left pl-1 mb-0 mt-0.5' style={{fontSize: "9px"}}>                                        Total          $2101.09</pre>
      <pre className=' text-left pl-1 mb-0 mt-0.5' style={{fontSize: "9px"}}>                            Deposit Requested           $169.95</pre>

      <div className=' h-px bg-cyan-400 mt-1 relative' style={{width:"55%",left:"44%"}}></div>

      <pre className=' text-left pl-1 mb-0 mt-0.5 font-bold' style={{fontSize: "9px"}}>                                  Deposit Due           $169.95</pre>

      <h5 className='pl-1 mt-2 mb-0 text-cyan-400' style={{fontSize: "9px"}}>Notes</h5>
      <h5 className='pl-1 mb-0' style={{fontSize: "9px"}}>Thank you for your business !</h5>
      <h5 className='pl-1 mb-0 inline-block' style={{fontSize: "9px"}}>Go to Linkedin -: </h5>
      <h5 className='pl-1 mb-0 text-cyan-400 inline-block' style={{fontSize: "7px"}}>https://www.linkedin.com/in/dakshina-rajapaksha/</h5>

      <h5 className='pl-1 mb-0 text-cyan-400' style={{fontSize: "9px"}}>Terms</h5>
      <h5 className='pl-1 mb-0' style={{fontSize: "9px"}}>Please pay within 30 days using the link in your invoice email.</h5>
      </div>

    </div>
  );
}

export default Customer;