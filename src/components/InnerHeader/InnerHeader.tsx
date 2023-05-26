import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class InnerHeader extends Component {
    render() {

        const activeLink=" border-b-2"
        const normalLink = "cursor-pointer"
    
        return (
          <div className=" h-20 fixed top-0 md:drop-shadow-xl z-10 mt-2" style={{ width: "95%",left: "2.5%",background:"#f9004d", borderRadius: "10px", gridGap: "10px" , boxShadow:
          " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>
           <div className=' w-full h-full'>
                <div className='flex justify-between h-full w-full items-center'>
                    <div className='w-1/2'>
                    <h1 className='font-serif text-black ml-10'  style={{ fontSize: '24px' }}>BISMARCK</h1>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex pr-5 w-ful justify-between font-heading lg:text-2xl'>
    
                        <NavLink to={"/dashboard"}  className={({isActive}) => isActive ? activeLink : normalLink}>Dashbord</NavLink>
                        <NavLink to={"/item"}  className={({isActive}) => isActive ? activeLink : normalLink}>Item</NavLink>
                        <NavLink to={"/customer"}  className={({isActive}) => isActive ? activeLink : normalLink}>Customer</NavLink>
                        <NavLink to={"/delevary"}  className={({isActive}) => isActive ? activeLink : normalLink}>Delevary</NavLink>
                        <NavLink to={"/orderDetails"}  className={({isActive}) => isActive ? activeLink : normalLink}>OrderDetails</NavLink>
                        <NavLink to={"/"}  className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>

                        
    
    
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
