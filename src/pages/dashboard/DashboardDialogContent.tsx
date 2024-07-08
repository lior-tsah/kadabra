import { Agent, PassiveDiscoverData } from "../../mockData/data";
import "./Dashboard.css";
import { useMemo, useState } from "react";

import CustomTabs from "../../components/CustomTabs";

interface Props {
  data: object;
}
const DashboardDialogContent = ({ data }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };
  const tabLabels = ["Info", "Ports", "CVE"];

  const renderTab = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div>
            {Object.entries(data).map(([key, value]) => (
              <p className="content-dialog-description" key={key}>
                {key}: {value}
              </p>
            ))}
          </div>
        );
      case 1:
        return <div></div>;
      default:
        return <div></div>;
    }
  };
  return (
    <div className="content-dialog-container">
      <div className="tab-btns-container">
        <CustomTabs
          handleChange={handleChange}
          value={value}
          labels={tabLabels}
        />
      </div>
      {renderTab(value)}
    </div>
  );
};
export default DashboardDialogContent;
