import React from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  return (
    <div className=" h-36" style={{top:"0", position:"relative", width: "15%",left:"5%", background: "#ffffff", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>

    <div className='flex flex-col pr-5 w-full justify-between font-heading lg:text-1xl' style={{height:"35%", top:"25%",gap: '10px'}}>

<Link to={""} >Permanent Employees</Link>
<Link to={""}>Gest Employees</Link>
<Link to={""}>Intern Employees</Link>
<Link to={""}>Suspend Employees</Link>

</div>
  </div>
  )
}

export default Employee