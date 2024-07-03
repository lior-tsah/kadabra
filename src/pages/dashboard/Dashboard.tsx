import "./Dashboard.css";
import { useState } from "react";
import NoDataAvaliable from "../../components/NoDataAvaliable";
import DashboardContent from "./DashboardContent";
import { useData } from "../../context/DataContext";
import { PassiveDiscoverData } from "../../mockData/data";
const Dashboard: React.FC = () => {
  const { data } = useData();
  const renderDashboardData = (data: PassiveDiscoverData | undefined) => {
    if (data) {
      return <DashboardContent data={data} />;
    } else {
      return <NoDataAvaliable />;
    }
  };
  return (
    <div className="dashboard">
      <div className="title-container">
        <label className="title">Dashboard</label>
      </div>
      {renderDashboardData(data)}
    </div>
  );
};
export default Dashboard;
