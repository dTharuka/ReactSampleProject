import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineMenu } from 'react-icons/ai';


function SideHeader() {

  const drover = () => {
    
    alert("helloo...");
  };

  return (
    <div className=' w-2/12 absolute h-16 left-0 top-0 d-none d-md-block' style={{background: "#273b5e", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
        <h5 className=' pt-4 pl-2 mb-0 text-gray-300  relative inline-block'>Rajapaksha Group</h5>
        <h5 className='font-serif inline-block absolute text-white pl-8 mb-0 pt-4' ><AiOutlineMenu onClick={drover} className=' cursor-pointer' /> </h5>
    </div>
  )
}

export default SideHeader







// import React, { useState } from "react";
// import { SideNav, Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// function SideHeader() {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleToggle = () => {
//     setIsVisible((prevVisible) => !prevVisible);
//   };

//   return (
//     <div className='w-2/12 absolute h-16 left-0 top-0' style={{ background: "#273b5e", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
//       <SideNav expanded={isVisible}>
//         <Toggle onClick={handleToggle} />
//         <Nav defaultSelected="home">
//           <NavItem eventKey="home">
//             <NavIcon>
//               <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
//             </NavIcon>
//             <NavText>Home</NavText>
//           </NavItem>
//           <NavItem eventKey="placed orders">
//             <NavIcon>
//               <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
//             </NavIcon>
//             <NavText>placed orders</NavText>
//           </NavItem>
//         </Nav>
//       </SideNav>
//     </div>
//   );
// }

// export default SideHeader;




