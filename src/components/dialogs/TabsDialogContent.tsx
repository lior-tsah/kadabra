import { useState } from "react";

import CustomTabs from "../../components/CustomTabs";

interface Props {
  data: object;
  labels: string[]
}
const TabsDialogContent = ({ data, labels }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  const renderTab = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div>
            {Object.entries(data).map(([key, value]) =>
              typeof value !== "object" ? (
                <p className="content-dialog-description" key={key}>
                  {key}: {value}
                </p>
              ) : (
                <></>
              )
            )}
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
          labels={labels}
        />
      </div>
      {renderTab(value)}
    </div>
  );
};
export default TabsDialogContent;
