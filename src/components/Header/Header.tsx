
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineMenu } from 'react-icons/ai';
import userImage from "./../../assets/user.png";


const Header = () => {
  const activeLink = "border-b-2";
  const normalLink = "cursor-pointer";
  
  const drover = () => {
    
    alert("helloo...");
  };

  return (
    <div className="fixed top-0 z-10 w-10/12 h-16 right-0" style={{background: "#273b5e"}}>
      <div className=' h-5/6 bg-[#5f6c82]'>
        <input className=' w-1/3 mt-2 ml-5 pl-5 h-3/4 rounded-2xl bg-[#ecedce] mr-96' placeholder='Search Bar'></input>
        <h5 className=' inline-block relative text-white ml-52'>Kevin Peter</h5>
        <div className=' inline-block h-9 top-2 ml-5 absolute w-px bg-white'></div>
        <img className=' h-10 w-10 inline-block ml-10 mb-2 bg-white' style={{borderRadius:"100%"}} src={userImage}/>

      </div>



 {/* <div className=' h-5/6 bg-[#5f6c82]'>
<Container>
<Row>
<Col sm={12} lg={4} md={4}>
        <input className=' w-full mt-2 h-3/4 rounded-2xl bg-[#ecedce]' placeholder='Search Bar'></input>
        </Col>

        <Col sm={12} lg={2} md={4}>
        <h5 className=' inline-block relative text-white'>Kevin Peter</h5>
        </Col>

        <Col sm={12} lg={1} md={4}>
        <div className=' inline-block h-9 top-2 ml-5  w-px bg-white'></div>
        </Col>

        <Col sm={12} lg={2} md={4}>
        <img className=' h-10 w-10 inline-block ml-10 mb-2 bg-white' style={{borderRadius:"100%"}} src={userImage}/>
        </Col>

        </Row>
      </Container>
      </div>  */}
      
      

    </div>
  );
};

export default Header;

