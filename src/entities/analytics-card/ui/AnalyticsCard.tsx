import React from "react";
import style from "./AnalyticsCard.module.sass";
import ExpenseChart from "./ExpenseChart";

const Analytics: React.FC = () => {
  return (
    <div className={style.analyticsCardContainer}>
      <h2>Analytics</h2>
      <ExpenseChart />
    </div>
  );
};

export default Analytics;
