import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
interface Props {
  title: string;
  label1: string;
  label2: string;
  data1: number;
  data2: number;
  color1: string;
  color2: string;
}
export default function HorizontalBar({
  title,
  label1,
  label2,
  data1,
  data2,
  color1,
  color2
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
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
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: "#333" }, ticks: { color: "#999" } },
          y: { ticks: { color: "#fff" } },
        },
      },
    });

    return () => chart.destroy();
  }, []);
  return (
    <div style={{ height: "80px", width: "100%" }}>
      <h4 style={{ marginBottom: "10px" }}>{title}</h4>
      <canvas ref={ref}></canvas>
    </div>
  );
}
