import { PassiveDiscoverData } from "../../mockData/data";
import "./Dashboard.css";
import { SetStateAction, useState } from "react";
import Expand from "../../assets/components-icons/expand-screen.svg";
import Unexpand from "../../assets/components-icons/unexpand-screen.svg";
import ConnectionMap from "./ConnectionMap";
import CustomTable from "../../components/CustomTable";
interface Props {
  data: PassiveDiscoverData;
}
const DashboardContent = ({ data }: Props) => {
  const [isExpand, setExpand] = useState(false);
  const columns = [
    { field: "interface", headerName: "Name" },
    { field: "ip_address", headerName: "Ip" },
    { field: "netmask", headerName: "Risk status" },
  ];

  const cdata = data.network_interfaces;
  return (
    <div className="dashboard-content">
      {!isExpand ? (
        <>
          <ConnectionMap expandBtn={Expand} setExpand={setExpand} />
          <div className="middle-cards-container">
            <div className="card middle-left-card">
              <div className="card-title-container">
                <label className="card-title">Devices</label>
              </div>
              <CustomTable columns={columns} data={cdata} />

            </div>
            <div className="card middle-right-card">
              <div className="card-title-container">
                <label className="card-title">Agents</label>
              </div>
                <CustomTable columns={columns} data={cdata} />
            </div>
          </div>
          <div className="bottom-cards-container">
            <div className="card bottom-card">
              <label className="title">Dashboard Content!</label>
            </div>
            <div className="card bottom-card">
              <label className="title">Dashboard Content!</label>
            </div>
            <div className="card bottom-card">
              <label className="title">Dashboard Content!</label>
            </div>
          </div>
        </>
      ) : (
        <ConnectionMap expandBtn={Unexpand} setExpand={setExpand} />
      )}
    </div>
  );
};
export default DashboardContent;
