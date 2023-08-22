import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillFileEarmarkPostFill ,BsFillGearFill ,BsPencilSquare, BsPerson} from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


function NewSideContent() {
  return (
    <div className='h-screen w-2/12 relative left-0 bg-[#273b5e]'>
        <div>
        <Container>
      <Row>
        <Col sm={12} lg={3} md={4}>
        <h1 className=' text-yellow-400 pt-4 ml-5 inline-block'><BsFillFileEarmarkPostFill height={50} /></h1>
        </Col>
        <Col sm={12} lg={9} md={3}>
        <h3 className=' inline-block pt-3 text-yellow-400'>Invoice Tool Logo</h3>
        </Col>
        <Col sm={12} lg={12} md={12}>
        <hr className=' text-white mb-12'></hr>
        </Col>
      </Row>
      <Row className=' pt-0 pb-1 hover:bg-[#5f6c82]'>
      <Col className=' pt-3 pr-0' sm={12} lg={2} md={2}>
        <h5 className=' pt-1 text-white cursor-pointer'><AiOutlineHome/></h5>
        </Col>
        <Col className=' pt-3 pr-0 hover:bg-[#5f6c82]' sm={12} lg={10} md={3}>
        <Link to="/" className="text-white text-xl"><button>Dashbord</button></Link>
        </Col>
        </Row>

        <Row className='  pt-0 pb-1 hover:bg-[#5f6c82]'>
        <Col className=' pt-3 pr-0 cursor-pointer' sm={12} lg={2} md={2}>
        <h5 className='pt-1 text-white'><BsPerson/></h5>
        </Col>
        <Col className=' pt-3 pr-0 cursor-pointer hover:bg-[#5f6c82]' sm={12} lg={10} md={3}>
        <Link to="/customer" className="text-white text-xl"><button>Customer</button></Link>
        </Col>
        </Row>

        <Row className='  pt-0 pb-1 hover:bg-[#5f6c82]'>
        <Col className=' pt-3 pr-0 cursor-pointer' sm={12} lg={2} md={2}>
        <h5 className='pt-1 text-white'><BsPencilSquare/></h5>
        </Col>
        <Col className=' pt-3 pr-0 cursor-pointer hover:bg-[#5f6c82]' sm={12} lg={10} md={2}>
        <Link to="/item" className="text-white text-xl"><button>Invoice</button></Link>
        </Col>
        </Row>

        <Row className='  pt-0 pb-1 hover:bg-[#5f6c82]'>
        <Col className=' pt-3 pr-0 cursor-pointer' sm={12} lg={2} md={2}>
        <h5 className='pt-1 text-white'><BsFillGearFill/></h5>
        </Col>
        <Col className=' pt-3 pr-0 cursor-pointer hover:bg-[#5f6c82]' sm={12} lg={10} md={3}>
        <Link to="/login" className="text-white text-xl"><button>Settings</button></Link>
        </Col>
        </Row>
       
      
    </Container>
        </div>

    </div>
  )
}

export default NewSideContent