
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const activeLink = "border-b-2";
  const normalLink = "cursor-pointer";
  
  const drover = () => {
    
    alert("helloo...");
  };

  return (
    <div className="fixed top-0 md:drop-shadow-xl z-10 w-10/12 h-16 right-0" style={{background: "#ffffff",color:"red", gridGap: "10px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>

      <div className='w-full h-full'>
        <div className='flex justify-between h-full w-full items-center'>
          <div className='w-1/2'>
            {/* methanata icon eka danna */}
            {/* <h5 className='font-serif text-black ml-10' ><AiOutlineMenu onClick={drover} className=' cursor-pointer' /> </h5> */}
          </div>
          <div className='w-1/3'>
            <div className='flex pr-5 justify-between'>

              <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to={"/"} style={{ color: 'gray' }}>Home</NavLink>
              <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to={"/book"} style={{ color: 'gray' }}>Book</NavLink>
              <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to={"/order"} style={{ color: 'gray' }}>Order</NavLink>
              <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to={"/profile"} style={{ color: 'gray' }}>Profile</NavLink>
              <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to={"/login"} style={{ color: 'gray' }}>Login</NavLink>

            </div>
          </div>
        </div>
      </div>

{/* <Container className=' grid  grid-rows-1 gap-1 mt-0'>
      <Row className=' grid grid-cols-6 gap-1'>
      <Col className=' bg-green-500 w-6/12'>
        <h1>Dashbord</h1>
        </Col>
        <Col className=' bg-green-500 w-6/12 pl-28'>
        <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to={"/"}>Home</NavLink>
        </Col>
        <Col className=' bg-red-400 w-6/12'>
        <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to={"/book"}>Book</NavLink>
        </Col>
        <Col className=' bg-green-500 w-6/12'>
        <NavLink  className={({ isActive }) => isActive ? activeLink : normalLink} to={"/order"}>Order</NavLink>
        </Col>
        <Col className=' bg-green-500 w-6/12'>
        <NavLink  className={({ isActive }) => isActive ? activeLink : normalLink} to={"/profile"}>Profile</NavLink>
        </Col>
        <Col className=' bg-green-500 w-6/12'>
        <NavLink  className={({ isActive }) => isActive ? activeLink : normalLink} to={"/login"}>Login</NavLink>
        </Col>
      </Row>
    </Container> */}
  
    </div>
  );
};

export default Header;

