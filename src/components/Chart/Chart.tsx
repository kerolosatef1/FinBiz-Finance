import { useEffect } from "react";
import Chart from "chart.js/auto";

useEffect(() => {
  const ctx = document.getElementById("spendChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          data: [3000, 2500, 3500, 2800, 3200, 4000, 4200],
          borderWidth: 2,
          tension: 0.4,
          borderColor: "#3cf5c7",
          fill: false,
          pointRadius: 6,
          pointBackgroundColor: "#3cf5c7",
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#999" } },
        y: { ticks: { color: "#999" }, grid: { color: "#222" } },
      },
    },
  });
}, []);
