import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import SideContent from '../../components/SideContent/SideContent';
import SideHeader from '../../components/SideHeader/SideHeader';
import 'bootstrap/dist/css/bootstrap.css';




function Home() {



  return (
    
    // <div style={{position:"absolute", height:"92%", width: "85%",left:"15%",background: "#ffffff",top:"8%"}}>
    <div className=' bg-white w-10/12 h-full absolute right-0 top-0'>
       {/* <Header />
      <SideContent/>
      <SideHeader/>
      <Content /> */}

      {/* <div className='flex mx-10 mt-10' style={{ gap: '10px',height:"20%"}}>
        <div style={{ flex: 1 ,height:"100%",width:"100%",background:"#ffffff",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center' }}>Available Customers</h1>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center',fontSize:"200%" }}>38</h1>
        </div>
        <div style={{ flex: 1,height:"100%",width:"100%",background:"#ffffff",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center' }}> Available Employees </h1>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center',fontSize:"200%" }}>25</h1>
        </div>
        <div style={{ flex: 1,height:"100%",width:"100%",background:"#ffffff",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center' }}> Available Items </h1>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center',fontSize:"200%" }}>43</h1>
        </div>
        <div style={{ flex: 1,height:"100%",width:"100%",background:"#ffffff",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center' }}> Available Bookings </h1>
        <h1 className='font-bold pt-5' style={{ textAlign: 'center',fontSize:"200%" }}>21</h1>
        </div>
</div>

<div className='mx-10 mt-10' style={{height:"60%", background:"#ffffff",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>

</div> */}

<Container className=' grid  grid-rows-1 gap-3 ml-10 mr-10 mt-28 col-lg-12'>
      <Row className=' grid grid-cols-4 gap-3'>
        <Col className=''>
          <div className='h-32  bg-gray-200 rounded-2xl'>
            <h5 className='font-bold pt-2 text-center'>Available Customers</h5>
            <h5 className='font-bold pt-2 text-center'>38</h5>
          </div>
        </Col>
        <Col>
          <div className='h-32 bg-gray-200 rounded-2xl'>
            <h5 className='font-bold pt-2 text-center'>Available Items</h5>
            <h5 className='font-bold pt-2 text-center'>43</h5>
          </div>
        </Col>
        <Col>
          <div className='h-32 bg-gray-200 rounded-2xl'>
            <h5 className='font-bold pt-2 text-center'>Available Employees</h5>
            <h5 className='font-bold pt-2 text-center'>21</h5>
          </div>
        </Col>
        <Col>
          <div className='h-32 bg-gray-200 rounded-2xl'>
            <h5 className='font-bold pt-2 text-center'>Available Bookings</h5>
            <h5 className='font-bold pt-2 text-center'>13</h5>
          </div>
        </Col>
      </Row>
      {/* <Row className='grid grid-cols-1'>
        <Col>
          <div className=' h-32 bg-gray-200'>
            <h1 className='font-bold pt-5'>Available Customers</h1>
            <h1 className='font-bold pt-5'>38</h1>
          </div>
        </Col>
      </Row> */}
    </Container>

    <Container className=' grid  grid-rows-1  ml-10 mr-10 mt-5'>
      
      <Row className=' grid grid-cols-1'>
        <Col>
          <div className=' h-96 bg-gray-200 rounded-2xl'></div>
        </Col>
      </Row>
    </Container>
  


    </div>
    

    

  )
}

export default Home