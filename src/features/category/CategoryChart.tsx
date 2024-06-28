import React from "react";
import FullReportButton from "@/features/category/full-report-button/FullReportButton";
import { arrowIcon } from "@/shared/icons";
import styles from "./CategoryChart.module.sass";
import { Doughnut } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";

const CategoryChart: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const data = {
    labels: ["Red", "Green", "Blue"],
    datasets: [
      {
        label: "My Doughnut Chart",
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
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
      <FullReportButton image={arrowIcon} onClick={handleButtonClick} />
    </div>
  );
};

export default CategoryChart;
