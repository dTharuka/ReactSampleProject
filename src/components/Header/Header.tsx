import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {

        const activeLink=" border-b-2"
        const normalLink = "cursor-pointer"
    
        return (
          <div className=" h-20 fixed top-0 md:drop-shadow-xl z-10 mt-2" style={{ width: "90%",left: "5%",background:"#f9004d", borderRadius: "10px", gridGap: "10px" , boxShadow:
          " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}>

           <div className=' w-full h-full'>
                <div className='flex justify-between h-full w-full items-center'>
                    <div className='w-1/2'>
                        <h1 className='font-serif text-black ml-10'  style={{ fontSize: '24px' }}>BISMARCK</h1>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex pr-5 w-ful justify-between font-heading lg:text-2xl'>
    
                        <NavLink to={"/"}  className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
                        <NavLink to={"/book"}  className={({isActive}) => isActive ? activeLink : normalLink}>Book</NavLink>
                        <NavLink to={"/order"}  className={({isActive}) => isActive ? activeLink : normalLink}>Order</NavLink>
                        <NavLink to={"/profile"}  className={({isActive}) => isActive ? activeLink : normalLink}>Profile</NavLink>
                        <NavLink to={"/login"}  className={({isActive}) => isActive ? activeLink : normalLink}>Login</NavLink>
                        
    
    
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
