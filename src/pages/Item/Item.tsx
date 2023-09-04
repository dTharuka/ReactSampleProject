// import 'bootstrap/dist/css/bootstrap.css';
// import { useEffect, useState } from "react";
// import ApexCharts from 'react-apexcharts';

// function Item() {
//   const [lineChart, setLineChart] = useState({
//     options: {
//       colors: ["#a31545", "#cc7a00"],
//       chart: {
//         id: "basic-bar",
//         toolbar: {
//           show: false
//         },
//       },
//       xaxis: {
//         labels: {
//           show: false,
//         },
//         axisTicks: {
//           show: false
//         },
//         axisBorder: {
//           show: false
//         },
//       },
//       yaxis: {
//         labels: {
//           show: false,
//         }
//       },
//       tooltip: {
//         enabled: false
//       },
//       grid: {
//         show: false
//       },
//       fill: {
//         type: "gradient",
//         gradient: { gradientToColors: ["green"], stops: [0, 100] },
//       },
//       stroke: {
//         curve: 'smooth', 
//         width: 2
//       }
//     },
//     series: [
//       {
//         name: "Salary",
//         data: [25000, 45000, 10000, 22000, 15000, 65000, 70000],
//       },
//     ]
//   });

//   return (
//     <div className="bg-white w-10/12 h-full absolute right-0 top-0">

//       <div className='grid grid-rows-1 grid-cols-4 gap-2'>
//         <div className=' mt-24 bg-[#312d58] h-36 rounded-lg'>
//           <div className=' h-full w-2/6 bg-[#eb4034] inline-block rounded-lg'>
//             <h5 className=' pl-3 absolute mt-3 text-white'>Monthly</h5>
//             <h5 className=' pl-3 absolute mt-5 text-white'>Earnings</h5>
//           </div>
//           <div className=' h-full w-4/6 bg-[#312d58] inline-block rounded-lg'>
//             <h5 className=' pl-14 pt-1 absolute text-white bg-green-300'>16,658</h5>
//             <div className=' h-4/5 bg-yellow-300 mt-4'></div>
//           </div>
//         </div>

//         <div className='mt-24 bg-green-300 h-36'>
//           <ApexCharts options={lineChart.options} series={lineChart.series} type="line" height={100} />
//         </div>

//         <div className='mt-24 bg-yellow-400 h-36'></div>

//         <div className='mt-24 bg-blue-400 h-36'></div>
//       </div>

//     </div>
//   );
// }

// export default Item;









import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Chart from 'chart.js/auto';

function Item() {
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
            data: [12, 19, 3, 5, 8, 3],
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
            data: [10, 15, 7, 20, 12, 8],
            backgroundColor: "#273b5e",
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
              text: 'Chart.js Line Chart'
            }
          },
          scales: {
            y: {
              beginAtZero: true
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
  }, []);

  return (
    <div className="bg-white w-10/12 h-full absolute right-0 top-0 grid grid-rows-2 grid-cols-3">
      <div className='mt-14'>
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>

      <div className='mt-4'>
        <canvas ref={charLine} id="myLineChart"></canvas>
      </div>

      <div className='mt-4'>
        <canvas ref={charPie} id="myPieChart"></canvas>
      </div>
    </div>
  );
}

export default Item;
function hsl(arg0: number, arg1: number, arg2: number): import("csstype").Property.BackgroundColor | undefined {
  throw new Error('Function not implemented.');
}




