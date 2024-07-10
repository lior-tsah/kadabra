import "./Settings.css";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import { PassiveDiscoverData } from "../../mockData/data";
import CustomTabs from "../../components/CustomTabs";
import Resources from "./Resources";
const Settings: React.FC = () => {
  const { data } = useData();
  const [tabValue, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };
  const tabLabels = ["Resources", "Activity", "Connected Users"];

  const renderTab = (index: number) => {
    switch (index) {
      case 0:
        return <Resources />;
      case 1:
        return <div style={{ height: "100%" }}></div>;
      default:
        return <div style={{ height: "100%" }}></div>;
    }
  };
  return (
    <div className="dashboard">
      <div className="title-container">
        <label className="title">Settings</label>
      </div>
      <div className="dashboard-content">
        <CustomTabs
          value={tabValue}
          handleChange={handleChange}
          labels={tabLabels}
        />
        {renderTab(tabValue)}
      </div>
    </div>
  );
};
export default Settings;
