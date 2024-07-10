import "./Dashboard.css";
import { useState } from "react";
import NoDataAvaliable from "../../components/NoDataAvaliable";
import DashboardContent from "./DashboardContent";
import { useData } from "../../context/DataContext";
import { PassiveDiscoverData } from "../../mockData/data";
import ContentPageWrapper from "../wrapper/ContentPageWrapper";
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
    
    <ContentPageWrapper title="Dashboard">
      {renderDashboardData(data)}
    </ContentPageWrapper>
    
  );
};
export default Dashboard;
