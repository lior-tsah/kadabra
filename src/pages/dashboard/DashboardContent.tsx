import { Agent, PassiveDiscoverData } from "../../mockData/data";
import "./Dashboard.css";
import { useMemo, useState } from "react";
import Expand from "../../assets/components-icons/expand-screen.svg";
import Unexpand from "../../assets/components-icons/unexpand-screen.svg";
import ConnectionMap from "./ConnectionMap";
import CustomTable from "../../components/CustomTable";
import GreenV from "../../assets/components-icons/green-v.svg";
import Info from "../../assets/components-icons/info.svg";
import Close from "../../assets/components-icons/close.svg";
import KadabraDialog from "../../components/dialogs/KadabraDialog";
import DashboardDialogContent from "./DashboardDialogContent";
import { useData } from "../../context/DataContext";

interface Props {
  data: PassiveDiscoverData;
}
const DashboardContent = ({ data }: Props) => {
  const { currentData, setCurrentData } = useData();
  const [isExpand, setExpand] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const devicesColumns = [
    { field: "interface", headerName: "Name" },
    { field: "ip_address", headerName: "Ip" },
    { field: "risk", headerName: "Risk status", type: "status" },
  ];

  const agentsColumns = [
    { field: "name", headerName: "Name" },
    { field: "ip", headerName: "Ip" },
  ];

  const handleOpenDialog = (item: any) => {
    setOpenDialog(true);
    setCurrentData(item);
  };
  const devicesOptions = [
    { name: "Active Scan", onPress: () => console.log("click1!") },
    { name: "Show Properties", onPress: () => setOpenDialog(true) },
  ];
  //currently random risk status
  const interfaceData = data.network_interfaces.map((item) => ({
    ...item,
    risk: Math.floor(Math.random() * 10) + 1,
    onClick: () => handleOpenDialog(item),
  }));

  const agentsData = useMemo(() => {
    const res: Agent[] = [];
    data.agents.forEach((currAgent) => {
      if (
        currAgent.type === ">" &&
        res.every((ag) => ag.ip.split(".")[0] !== currAgent.ip.split(".")[0])
      ) {
        res.push(currAgent);
      }
    });
    return res;
  }, [data.agents]);

  const bottomCardProps = [
    {
      title: "Overall devices detected",
      count: interfaceData.length,
    },
    {
      title: "Identities",
      count: interfaceData.length + 135,
    },
    {
      title: "Total Risk score",
      count: interfaceData.length + 33,
    },
  ];
  return (
    <div className="dashboard-content">
      {!isExpand ? (
        <>
          <ConnectionMap
            expandBtn={Expand}
            isExpand={isExpand}
            setExpand={setExpand}
          />
          <div className="middle-cards-container">
            <div className="card middle-left-card">
              <div className="card-title-container">
                <label className="card-title">Devices</label>
              </div>
              <CustomTable
                columns={devicesColumns}
                data={interfaceData}
                options={devicesOptions}
              />
            </div>
            <div className="card middle-right-card">
              <div className="card-title-container">
                <label className="card-title">Agents</label>
              </div>
              <CustomTable columns={agentsColumns} data={agentsData} />
            </div>
          </div>
          <div className="bottom-cards-container">
            {bottomCardProps.map((card) => (
              <div className="card bottom-card">
                <img src={GreenV} />
                <div className="bottom-card-description-container">
                  <label className="bottom-card-description">
                    {card.title}
                  </label>
                  <img src={Info} />
                </div>
                <label className="bottom-card-number">{card.count}</label>
              </div>
            ))}
          </div>
        </>
      ) : (
        <ConnectionMap
          expandBtn={Unexpand}
          isExpand={isExpand}
          setExpand={setExpand}
        />
      )}

      <KadabraDialog
        open={openDialog}
        deleteIcon={Close}
        handleClose={() => setOpenDialog(false)}
        title={"Properties"}
      >
        <DashboardDialogContent data={currentData} />
      </KadabraDialog>
    </div>
  );
};
export default DashboardContent;
