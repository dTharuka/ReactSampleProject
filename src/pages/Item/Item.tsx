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

