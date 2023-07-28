import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

  return (
    <div className=' w-10/12 h-full absolute right-0 top-0 bg-[#18284d] overflow-x-hidden'>

    <Row>
        <Col sm={0} lg={7} md={3}>
          <div className=' d-none d-sm-block'>
          <h2 className=' relative mt-4 top-96 left-10 text-white'>Make your own Invoice</h2>
          </div>
        </Col>

        <Col sm={8} lg={4} md={6}>
        <div className=' mt-28  relative' >

        

      
      <Form className=' relative bg-white rounded-lg left-[15%]' >
      <h4 className=' text-center rounded-md relative pt-5 mb-5'>Create Account</h4>
        <Col sm={12} lg={12} md={12}>
        <Form.Group className=" text-center w-4/5" controlId="E-mail">
        <Form.Control  id='cusID' className=' mt-0  h-1/2 relative ml-10 border-0' style={{ backgroundColor:"#cccccc"}} type="email" placeholder="*Enter Your Email" />
      </Form.Group></Col>

      <Col sm={12} lg={12} md={12}>
      <Form.Group className=" mt-4 text-center w-4/5" controlId="customerName">
        <Form.Control  id='cusName' className=' mt-0  h-1/2 rounded-md relative ml-10 border-0' style={{ backgroundColor:"#cccccc"}} type="text" placeholder="*First Name" />
      </Form.Group></Col>

        <Col sm={12} lg={12} md={12}>
        <Form.Group className="mt-4 text-center w-4/5" controlId="customerEmail">
        <Form.Control  id='cusEmail' className=' mt-0  h-1/2 rounded-md  relative ml-10 border-0' style={{ backgroundColor:"#cccccc"}} type="text" placeholder="*Second Name" />
      </Form.Group></Col>

        <Col sm={12} lg={12} md={12}>
        <Form.Group className=" mt-4 text-center w-4/5" controlId="customerSalary">
        <Form.Control  id='cusSalary' className=' mt-0  h-1/2 rounded-md  relative ml-10 border-0' style={{ backgroundColor:"#cccccc"}} type="text" placeholder="*Company Name" />
      </Form.Group></Col>

      <Col sm={12} lg={12} md={12}>
      <Form.Group className="mt-4 mb-0 pl-7" controlId="formBasicCheckbox">
        <Form.Check className=' text-xs mb-0 ml-3' type="checkbox" label="I have read and agree to terms and conditions" />

      </Form.Group></Col>
      <Col sm={8} lg={8} md={8}>
      <h5 className=' text-[#0cd1f0] text-xs relative inline-block w-1/2 ml-14 mt-0 pr-0'>Terms and Conditions</h5>
      </Col>


     
        <Col sm={12} lg={12} md={12}>
        <Button
            size='sm'
            id='saveBtn'
            className='mb-4 mt-2 relative border-0 w-3/5 ml-20'
            style={{borderRadius:"15px",background:"#18284d"}}
            variant="primary"
            type="button"
            onClick={(e) => {
              
            }}
          >
            Create an Account
          </Button>
          </Col>

          <Col sm={12} lg={12} md={12}>
          <div className=' bg-gray-300 h-px w-4/5 relative left-[10%]'></div>
          </Col>

          {/* <Col sm={12} lg={12} md={12}>
          <div className=' bg-white border border-black mt-4 mb-2 w-3/5 relative rounded-xl ml-20 cursor-pointer'>
          <h5 className=' text-gray-500 text-xs font-bold relative  mt-1 mb-1 text-center'>Sign up with Google</h5>
          </div>
          </Col> */}

          <Col sm={12} lg={12} md={12}>
        <Button
            size='sm'
            id='signupBtn'
            className='mb-1 mt-4 relative border border-black w-3/5 ml-20'
            style={{borderRadius:"15px",color:"gray"}}
            variant="none"
            type="button"
            onClick={(e) => {
              
            }}
          >
            Sign up with Google
          </Button>
          </Col>

          <Col sm={8} lg={8} md={8}>
          <h5 className=' text-black text-xs relative inline-block left-1/4 ml-12' >Already have an account?</h5>
          <h5 className=' text-[#0cd1f0]  text-xs relative inline-block mb-5 left-1/4 cursor-pointer' >Sign in</h5>
          </Col>
      </Form> 
      </div>
      </Col>  
</Row>

    </div>
  )
}

export default Login