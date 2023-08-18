import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import "./ChartContainer.css"

const data = [
  { month: 'Jan', count: 360 },
  { month: 'Feb', count: 206 },
  { month: 'Mar', count: 154 },
  { month: 'Apr', count: 259 },
  { month: 'May', count: 224 },
  { month: 'Jun', count: 305 },
  { month: 'Jul', count: 228 },
  { month: 'Aug', count: 240 },
  { month: 'Sep', count: 175 },
  { month: 'Oct', count: 258 },
  { month: 'Nov', count: 242 },
  { month: 'Dec', count: 306 },
];

function BookingsChart() {
  const bookingsChart = () => new Chart(
    document.getElementById('bookings-chart'),
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
            label: 'Bookings per month',
            data: data.map(row => row.count),
            backgroundColor: '#198754'
          }
        ]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: 'BOOKINGS MONTHLY CHART',
            }
        }
    }

    }
  );

    useEffect(() => {
    bookingsChart()
  }, [])

  return (
    <>
          <div className="px-0 px-xl-5 px-lg-3" id="chart-container">
        <canvas id="bookings-chart"></canvas>
      </div>
    </>
  )
}

export default BookingsChart