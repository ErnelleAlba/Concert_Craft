import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import "./ChartContainer.css"

const data = [
  { month: 'Jan', count: 10 },
  { month: 'Feb', count: 20 },
  { month: 'Mar', count: 15 },
  { month: 'Apr', count: 25 },
  { month: 'May', count: 22 },
  { month: 'Jun', count: 30 },
  { month: 'Jul', count: 28 },
  { month: 'Aug', count: 20 },
  { month: 'Sep', count: 15 },
  { month: 'Oct', count: 25 },
  { month: 'Nov', count: 22 },
  { month: 'Dec', count: 30 },
];

function NewUserChart() {

    const customersChart = () => new Chart(
    document.getElementById('new-users-chart'),
    {
      type: 'bar',
      plugins: {
        colors: {
          enabled: true
        }
      },
      data: {
        labels: data.map(row => row.month),
        datasets: [
          {
            label: 'New-Users per month',
            data: data.map(row => row.count),
            backgroundColor: '#0d6efd'
          }
        ]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: 'NEW USERS MONTHLY CHART',
            }
        }
    }

    }
  );

    useEffect(() => {
    customersChart()
  }, [])

  return (
    <>
      <div className="px-0 px-xl-5 px-lg-3" id="chart-container">
        <canvas id="new-users-chart"></canvas>
      </div>
    </>
  )
}

export default NewUserChart