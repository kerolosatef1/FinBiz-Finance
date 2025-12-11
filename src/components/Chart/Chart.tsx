import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Chart.scss";
export default function ChartComponent() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  useEffect(() => {
    if (!chartRef.current) return;
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const gradientIncome = ctx.createLinearGradient(0, 0, 0, 400);
    gradientIncome.addColorStop(0, "rgba(47, 194, 220, 0.1)");
    gradientIncome.addColorStop(1, "rgba(20, 227, 193, 0)");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Income",
            data: [40, 60, 45, 75, 65, 90, 85, 80, 70, 55, 65, 85], // Slightly smoothed sample data
            borderColor: "#49C2A9",
            backgroundColor: gradientIncome,
            borderWidth: 3,
            tension: 0.4, // Smooth
            fill: true,
            pointRadius: 0, // No points default
            pointHoverRadius: 0, // Show on hover
            pointBackgroundColor: "#06e6ffff",
            pointBorderColor: "#1E1E22",
            pointBorderWidth: 2,
          },

        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1E1E22',
            titleColor: '#fff',
            bodyColor: '#2fdca8ff',
            borderColor: '#333',
            borderWidth: 1,
            padding: 12,
            displayColors: false,
            callbacks: {
              label: (context) => `$ ${context.parsed.y}k`
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              display: true,
              color: "#2C2C30",
              drawBorder: true,
              lineWidth: 1,
            },
            ticks: { color: "#6B7280", font: { size: 11 } }
          },
          y: {
            grid: {
              display: true,         // إظهار خطوط Y
              color: "#2C2C30",
              drawBorder: true,
              lineWidth: 1,
            },
            ticks: {
              color: "#6B7280",
              font: { size: 11 },
              callback: (value) => `$${value}k`
            },
            beginAtZero: true
          },
        }
        ,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-wrapper" style={{ height: "300px", width: "100%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
