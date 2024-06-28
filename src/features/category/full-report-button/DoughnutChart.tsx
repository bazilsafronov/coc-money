import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import styles from "../CategoryChart.module.sass";

const DoughnutChart: React.FC = () => {
  const data: ChartData<"doughnut", number[], unknown> = {
    labels: ["Red", "Green", "Blue"],
    datasets: [
      {
        label: "My First Doughnut Chart",
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className={styles.categoryContainer}>
      <h2>Activity Category</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
