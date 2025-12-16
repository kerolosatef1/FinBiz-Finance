import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./HorizintalBar.scss";

interface Props {
  title: string;
  label1: string;
  label2: string;
  data1: number;
  data2: number;
  color1: string;
  color2: string;
}

const getCssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function HorizontalBar({
  title,
  label1,
  label2,
  data1,
  data2,
  color1,
  color2,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const tickColor = getCssVar("--chart-tick-color");
    const gridColor = getCssVar("--chart-grid-color");

    // Destroy old chart (important for theme change)
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [label1, label2],
        datasets: [
          {
            label: title,
            data: [data1, data2],
            backgroundColor: [color1, color2],
            borderRadius: 6,
            borderSkipped: false,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            grid: {
              color: gridColor,
            },
            ticks: {
              color: tickColor,
            },
          },
          y: {
            ticks: {
              color: tickColor,
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [label1, label2, data1, data2, color1, color2]);

  return (
    <div style={{ height: "80px", width: "100%" }}>
      <h4>{title}</h4>
      <canvas ref={canvasRef} />
    </div>
  );
}
