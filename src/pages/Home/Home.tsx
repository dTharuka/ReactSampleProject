import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import HomeImage from "./../../assets/homePhoto.jpg";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1 className="mb-5 mt-32 text-center animate-bounce ..." style={{ fontSize: "32px"}}>Welcome to BISMARCK Book Store</h1>
        <div className="grid grid-cols-2 grid-rows-1">
        <img src={HomeImage} alt="homePhoto" className=" ml-56 mt-20 w-1/2 h-96" style={{ borderRadius: "10px", gridGap: "10px" , boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",}}/>
              {/* <h1>Helloooooooooooooooooo</h1> */}
              <div className="mt-24" style={{ fontSize: "22px"}}>
                <h1>Reading books offers a multitude of benefits,</h1>
                <h1>including knowledge acquisition, mental stimulation,</h1>
                <h1>stress reduction, empathy development,</h1>
                <h1>improved language skills, memory enhancement,</h1>
                <h1>and entertainment. It fosters personal growth,</h1>
                <h1>expands horizons, and provides a lifelong source </h1>
                <h1>of learning and enjoyment.</h1>
              </div>
              {/* <pre>Reading books offers a multitude of benefits,
                 including knowledge acquisition, mental stimulation,
                stress reduction, empathy development, 
                improved language skills, memory enhancement,
                 and entertainment. It fosters personal growth,
                  expands horizons, and provides a lifelong source 
                  of learning and enjoyment.</pre> */}
        </div>

      </div>
    )
  }
}
