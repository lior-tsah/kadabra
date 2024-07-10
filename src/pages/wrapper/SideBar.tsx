import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-kadabra.svg";
import Dash from "../../assets/side-bar-icons/dash.svg";
import DashBlue from "../../assets/side-bar-icons/dash-blue.svg";
import List from "../../assets/side-bar-icons/list.svg";
import ListBlue from "../../assets/side-bar-icons/list-blue.svg";
import Part from "../../assets/side-bar-icons/part.svg";
import PartBlue from "../../assets/side-bar-icons/part-blue.svg";
import Reports from "../../assets/side-bar-icons/reports.svg";
import ReportsBlue from "../../assets/side-bar-icons/reports-blue.svg";
import Tune from "../../assets/side-bar-icons/tune.svg";
import TuneBlue from "../../assets/side-bar-icons/tune-blue.svg";
import Visibility from "../../assets/side-bar-icons/visibility.svg";
import VisibilityBlue from "../../assets/side-bar-icons/visibility-blue.svg";
import Help from "../../assets/side-bar-icons/help.svg";
import HelpBlue from "../../assets/side-bar-icons/help-blue.svg";
import Settings from "../../assets/side-bar-icons/settings.svg";
import SettingsBlue from "../../assets/side-bar-icons/settings-blue.svg";
import "./Wrapper.css";
import { useState } from "react";

interface SideBarItem {
  icon: string;
  route: string;
  name: string;
  selectedIcon?: string;
}

const SideBar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const sideBarItems: SideBarItem[] = [
    {
      icon: Dash,
      name: "Dashboard",
      route: "/dashboard",
      selectedIcon: DashBlue,
    },
    {
      icon: Visibility,
      name: "Visibility",
      route: "/home",
      selectedIcon: VisibilityBlue,
    },
    {
      icon: Reports,
      name: "Reports",
      route: "/dashboard",
      selectedIcon: ReportsBlue,
    },
    {
      icon: Part,
      name: "Integration",
      route: "/integration",
      selectedIcon: PartBlue,
    },
    {
      icon: Tune,
      name: "Control center",
      route: "/dashboard",
      selectedIcon: TuneBlue,
    },
    {
      icon: List,
      name: "Logs & Data",
      route: "/dashboard",
      selectedIcon: ListBlue,
    },
  ];
  const sideBarItemsFooter: SideBarItem[] = [
    {
      icon: Help,
      name: "Support",
      route: "/dashboard",
      selectedIcon: HelpBlue,
    },
    {
      icon: Settings,
      name: "Settings",
      route: "/settings",
      selectedIcon: SettingsBlue,
    },
  ];
  const navigate = useNavigate();

  const navigateTO = (route: string) => {
    navigate(route);
  };

  return (
    <div className="side-bar">
      <div className="logo-container">
        <img src={Logo} />
      </div>

      <div className="side-bar-icons">
        {sideBarItems.map((item, i) => (
          <div
            key={`${item.icon?.toString()} ${i}`}
            className={selectedItem === i ? "selected-item" : "item"}
            onClick={() => {
              navigateTO(item.route);
              setSelectedItem(i);
            }}
          >
            <img
              className="side-bar-icon"
              src={selectedItem === i ? item.selectedIcon : item.icon}
            />
            <label
              className={
                selectedItem === i ? "selected-label-item" : "label-item"
              }
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
      <div className="side-bar-icons bottom">
        {sideBarItemsFooter.map((item, index) => {
          const i = index + sideBarItems.length;
          return (
            <div
              key={`${item.icon?.toString()} ${i}`}
              className={selectedItem === i ? "selected-item" : "item"}
              onClick={() => {
                navigateTO(item.route);
                setSelectedItem(i);
              }}
            >
              <img
                className="side-bar-icon"
                src={selectedItem === i ? item.selectedIcon : item.icon}
              />
              <label
                className={
                  selectedItem === i ? "selected-label-item" : "label-item"
                }
              >
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
