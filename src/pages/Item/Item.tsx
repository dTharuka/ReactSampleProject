import React, { ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import 'bootstrap/dist/css/bootstrap.css';
import { renderToString } from 'react-dom/server';
import { Col, Row } from 'react-bootstrap';

type customerProp = {
  cusID: string;
  cusName: string;
  cusEmail: string;
  cusSalary: string;
  cusAddress: string;
  cusPostalCode: string;
};

function Customer() {
  const [cusID, idChange] = useState('');
  const [cusName, nameChange] = useState('');
  const [cusEmail, emailChange] = useState('');
  const [cusSalary, salaryChange] = useState('');
  const [cusAddress, addressChange] = useState('');
  const [cusPostalCode, postalCodeChange] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'cusID':
        idChange(value);
        break;
      case 'cusName':
        nameChange(value);
        break;
      case 'cusEmail':
        emailChange(value);
        break;
      case 'cusSalary':
        salaryChange(value);
        break;
      case 'cusAddress':
        addressChange(value);
        break;
      case 'cusPostalCode':
        postalCodeChange(value);
        break;
      default:
        break;
    }
  };

  const handleSaveCustomer = () => {
    const content = `
      Customer ID: ${cusID}
      Name: ${cusName}
      Email: ${cusEmail}
      Salary: ${cusSalary}
      Address: ${cusAddress}
      Postal Code: ${cusPostalCode}
    `;
    generatePDF(content);
  };

  const generatePDF = (content: string) => {
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 50,
      },
      text: {
        marginBottom: 10,
      },
    });

    const pdfComponent = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Text style={styles.text}>{content}</Text>
          </View>
        </Page>
      </Document>
    );

    const pdfString = renderToString(pdfComponent);

    // Create a Blob from the rendered PDF content
    const blob = new Blob([pdfString], { type: 'application/pdf' });

    // Create a URL for the Blob and use it to download the PDF
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'customer_details.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="bg-white w-10/12 h-full absolute right-0 top-0 ">
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
    </div>
  );
}

export default Customer;
