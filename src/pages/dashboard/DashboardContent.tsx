import "./Dashboard.css";
import { useState } from "react";

interface Props {
  data: any;
}
const DashboardContent = ({ data }: Props) => {
  return (
    <div className="dashboard-content">
      <div className="title-container">
        <label className="title">Dashboard Content!</label>
      </div>
    </div>
  );
};
export default DashboardContent;
