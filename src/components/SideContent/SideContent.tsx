import React, { useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function SideContent() {
  const activeLink = "border-b-2";
  const normalLink = "cursor-pointer";
  const [dropdowButton, dropDownChange] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    // background: "#5f6c82",
    <div className="h-screen w-2/12 relative left-0 d-none d-md-block" style={{  background: "#5f6c82", color: "#ffffff", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
      <Container className='pt-28 pl-2 grid gap-5'>
      {/* className='pt-28 pl-2 grid gap-5' */}
          <Col sm={0} lg={12} md={12}>
            <Link className=' mt-10' to={"/"} >Dashboard</Link>
          </Col>

          <Col sm={0} lg={12} md={12}>
            <Link className=' mt-10' to={"/customer"}>Customer</Link>
          </Col>

          <Col sm={0} lg={12} md={12}>
          
            <DropdownButton className=' border-0' variant='#5f6c82' id="dropdowButton" title="Employee" onClick={handleDropdownClick} drop={isDropdownOpen ? "down" : "up"}>
              <Dropdown.Item href="/permanent-employees">Permanent Employees</Dropdown.Item>
              <Dropdown.Item href="/gest-employees">Gest Employees</Dropdown.Item>
              <Dropdown.Item href="/intern-employees">Intern Employees</Dropdown.Item>
              <Dropdown.Item href="/suspend-employees">Suspend Employees</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col sm={0} lg={12} md={12}>
            <Link className=' mt-10' to={"/item"} >Item</Link>
          </Col>
          <Col sm={0} lg={12} md={12}>
            <Link className=' mt-10' to={"/booking"} >Booking</Link>
          </Col>
          <Col sm={0} lg={12} md={12}>
            <Link className=' mt-10' to={"/order-details"} >Order Details</Link>
          </Col>
        
      </Container>
    </div>
  );
}

export default SideContent;
