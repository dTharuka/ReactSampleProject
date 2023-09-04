import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import SideContent from '../../components/SideContent/SideContent';
import SideHeader from '../../components/SideHeader/SideHeader';
import 'bootstrap/dist/css/bootstrap.css';
import { Chart } from 'chart.js';




function Home() {

  let values=[3,19,3,8,3,2];
  
  const chartRef = useRef(null);
  const charLine = useRef(null);
  const charPie = useRef(null);

  useEffect(() => {


    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Bar Chart',
            data: [values[0], values[1], values[2], values[3], values[4], values[5]],
            // backgroundColor: "#FFD700",
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }


    if (charLine.current) {
      new Chart(charLine.current, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Line Chart',
            data: [values[0], values[1], values[2], values[3], values[4], values[5]],
            backgroundColor: "#eb4034",
            // borderColor: {
            //   gradient: true,
            //   start: 'rgba(235, 64, 52, 1)',
            //   end: 'rgba(0, 0, 255, 1)'
            // },
            borderColor:'#eb4034',
            tension: 0.5,
            // pointRadius: 10,
            pointStyle:false,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: '16,658',
            }
          },
          scales: {
            x: {
              display: false,
              title: {
                display: false,
                text: 'Color'
              }
            },
            y: {
              display: false,
              title: {
                display: false,
                text: 'Value'
              }
            }
          }
        }
      });
    }


    if (charPie.current) {
      new Chart(charPie.current, {
        type: 'pie',
        data: {
          labels: ['Blue', 'Red', 'Orange', 'Yellow', 'Green', 'Purple'],
          datasets: [{
            label: 'Pie Chart',
            data: [10, 15, 7, 20, 12, 8],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Pie Chart'
            }
          }
        }
      });
    }

  })



  return (
    
    // <div style={{position:"absolute", height:"92%", width: "85%",left:"15%",background: "#ffffff",top:"8%"}}>
    <div className=' bg-[#5f6c82] w-10/12 h-full absolute right-0 top-0'>
      <Container className=' mt-24 mb-0 ml-5'>
      <Row >
      <Col xs={12} sm={12} lg={12} md={12}>
      <h5 className=' text-white'>Welcome back, Kevin</h5>
      </Col>
      <Col xs={12} sm={12} lg={12} md={12}>
      <h5 className=' mt-0 mb-0 ml-0 text-xs text-white'>Manage Your Invoice here.</h5>
      </Col>
      </Row>
      </Container>

      

<Container className=' ml-10 mr-10 mt-5'>
      <Row className='gap-2 pl-3 pr-3'>
        <Col className=' p-0' >
          <div className='  h-40 bg-[#262347] rounded-lg'>
          <div className=' inline-block w-2/6 bg-[#eb4034] relative h-full rounded-lg'></div>

           
            <div className=' inline-block w-4/6 bg-[#312d58] h-full relative rounded-lg'>
            </div>
          </div>
        </Col>

        <Col className='p-0' >
        <div className=' h-40 bg-[#312d58] rounded-lg'>
           
           <div className=' inline-block w-2/6 bg-[#eb4034] relative h-full rounded-lg'>
            {/* <h5 className=' text-center text-white pt-5'>Monthly</h5>
            <h5 className=' text-center text-white'>Earnings</h5> */}
           </div>

           
            <div className=' inline-block w-4/6 bg-[#312d58] h-full relative rounded-lg'>
            <canvas ref={charLine} id="myLineChart"></canvas>
            </div>
          </div>
        </Col>

        <Col className='p-0 '>
        <div className='  h-40 bg-[#262347] rounded-lg'>
          <div className=' inline-block w-2/6 bg-[#eb4034] relative h-full rounded-lg'></div>

           
            <div className=' inline-block w-4/6 bg-[#312d58] h-full relative rounded-lg'></div>
          </div>
        </Col>
        {/* <Col className='p-0'>
        <div className='  h-40 bg-[#262347] rounded-lg'>
          <div className=' inline-block w-2/6 bg-[#eb4034] relative h-full rounded-lg'></div>

           
            <div className=' inline-block w-4/6 bg-[#312d58] h-full relative rounded-lg'>
            <canvas ref={charLine} id="myLineChart2"></canvas>
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>

    <Container className=' grid  grid-rows-1  ml-10 mr-10 mt-3'>
      
      <Row className=' grid grid-cols-1'>
        <Col xs={4} sm={6} lg={12} md={7}>
          <div className=' h-72 bg-gray-50'>
            <pre className='pt-3'>         DATE                 INVOICE NUMBER                 CUSTOMER NAME                   STATUS                   DUE DATE                AMOUNT</pre>

            <div className=' h-px px-2 relative bg-black'></div>
            <div className=' h-4 w-4 bg-[#273b5e] inline-block relative left-5'></div>
            <pre className='pt-3 inline-block relative left-10 mb-0'>28 Jul 2023            INVO-0014                        Mr.Udara</pre>
            <pre className=' text-green-500 inline-block pt-3 ml-52  mb-0'>PAID</pre>
            <pre className=' inline-block pt-3 ml-36  mb-0'>08 Aug 2023               LKR 0.00</pre>

            <hr className='  relative  m-0'></hr>
            <div className=' h-4 w-4 bg-[#273b5e] inline-block relative left-5'></div>
            <pre className='pt-3 inline-block relative left-10 mb-0'>28 Jul 2023            INVO-0014                        Mr.Udara</pre>
            <pre className=' text-green-500 inline-block pt-3 ml-52  mb-0'>PAID</pre>
            <pre className=' inline-block pt-3 ml-36  mb-0'>08 Aug 2023               LKR 0.00</pre>

            <hr className='  relative  m-0'></hr>
            <div className=' h-4 w-4 bg-[#273b5e] inline-block relative left-5'></div>
            <pre className='pt-3 inline-block relative left-10 mb-0'>28 Jul 2023            INVO-0014                        Mr.Udara</pre>
            <pre className=' text-red-500 inline-block pt-3 ml-52  mb-0'>UNPAID</pre>
            <pre className=' inline-block pt-3 ml-32  mb-0'>08 Aug 2023               LKR 0.00</pre>

            <hr className='  relative  m-0'></hr>
            <div className=' h-4 w-4 bg-[#273b5e] inline-block relative left-5'></div>
            <pre className='pt-3 inline-block relative left-10 mb-0'>28 Jul 2023            INVO-0014                        Mr.Udara</pre>
            <pre className=' text-red-500 inline-block pt-3 ml-52  mb-0'>UNPAID</pre>
            <pre className=' inline-block pt-3 ml-32  mb-0'>08 Aug 2023               LKR 0.00</pre>

          </div>
        </Col>
      </Row>
    </Container>
  


    </div>
    

    

  )
}

export default Home