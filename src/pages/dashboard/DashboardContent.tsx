import { Agent, nmapRun, PassiveDiscoverData } from "../../mockData/data";
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
import TabsDialogContent from "../../components/dialogs/TabsDialogContent";
import { useData } from "../../context/DataContext";

interface Props {
  data: PassiveDiscoverData;
}
const DashboardContent = ({ data }: Props) => {
  const { currentData, setCurrentData, setData } = useData();
  const [isExpand, setExpand] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const devicesColumns = [
    { field: "interface", headerName: "Name" },
    { field: "ip_address", headerName: "Ip" },
    { field: "risk", headerName: "Risk status", type: "status" },
    { field: "", headerName: "", type: "option" },
  ];

  const agentsColumns = [
    { field: "name", headerName: "Name" },
    { field: "ip", headerName: "Ip" },
    { field: "", headerName: "", type: "option" },
  ];

  const handleOpenDialog = (item: any) => {
    setOpenDialog(true);
    setCurrentData(item);
  };

  //currently random risk status
  const devicesData = data.network_interfaces.map((item) => ({
    ...item,
    risk: Math.floor(Math.random() * 10) + 1,
    onClick: () => handleOpenDialog(item),
    options: [
      {
        name: "Active Scan",
        onPress: () => {
          data.network_interfaces = [
            ...data.network_interfaces,
            ...(nmapRun.host.map((h) => ({
              ...h,
              interface: h.endtime,
              ip_address: h.address.addr,
            })) as any),
          ];
          setData({ ...data });
        },
      },
      { name: "Show Properties", onPress: () => handleOpenDialog(item) },
    ],
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
    return res.map((item) => ({ ...item, options: [] }));
  }, [data.agents]);

  const bottomCardProps = [
    {
      title: "Overall devices detected",
      count: devicesData.length,
    },
    {
      title: "Identities",
      count: devicesData.length + 135,
    },
    {
      title: "Total Risk score",
      count: devicesData.length + 33,
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
              <CustomTable columns={devicesColumns} data={devicesData} />
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
        <TabsDialogContent
          data={currentData}
          labels={["Info", "Ports", "CVE"]}
        />
      </KadabraDialog>
    </div>
  );
};
export default DashboardContent;
