import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import trees from '../../assets/login.jpeg'
import Header from '../../components/Header/Header'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='w-full h-80vh flex mt-32'>
        <div className='grid grid-cols-1 rounded-xl md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full rounded-xl' src={trees} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-2xl font-bold text-center mb-8'>Dakshina Rajapaksha</h2>
                    <div className="flex flex-col gap-2">
                        <input className='border p-2' type="text" placeholder='Username' name="userName"/>
                        <input className='border p-2' type="password" placeholder='Password' name="password" />
                    </div>
                    <Link to={"/dashboard"}>
                    <button className='w-full py-2 rounded-lg my-4 bg-green-600 hover:bg-green-400'>Login</button>
                    <p className='text-center'>Forgot Username or Password?</p>
                    </Link>
                    
                </form>
                <p className='text-center'>Sign Up</p>
            </div>
        </div>
    </div>

      </div>
    )
  }
}
