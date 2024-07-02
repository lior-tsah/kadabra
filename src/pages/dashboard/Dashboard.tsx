import "./Dashboard.css";
import { useState } from "react";
import NoDataAvaliable from "../../components/NoDataAvaliable";
const Dashboard: React.FC = () => {
  const [data, setData] = useState();

  const renderDashboardData = (data: any) => {
    if (data) {
      return null;
    } else {
      return <NoDataAvaliable />;
    }
  };
  return (
    <div className="dashboard">
      <div className="title-container">
        <label className="title">Dashboard</label>
      </div>
      <div className="dashboard-content">{renderDashboardData(data)}</div>
    </div>
  );
};
export default Dashboard;
