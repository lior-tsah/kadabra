import "./Settings.css";
import Globe from "../../assets/components-icons/globe.svg";
import Droplet from "../../assets/components-icons/droplet.svg";
import CustomTable from "../../components/CustomTable";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import KadabraDialog from "../../components/dialogs/KadabraDialog";
import TabsDialogContent from "../../components/dialogs/TabsDialogContent";

const Resources: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { setCurrentData, currentData } = useData();

  const handleOpenDialog = (item: any) => {
    setOpenDialog(true);
    setCurrentData(item);
  };
  const routers = [
    {
      url: "kadabra.io01.io",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
    {
      url: "kadabra.io01.io",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
    {
      url: "kadabra.io01.io",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
  ];
  const edges = [
    {
      url: "Seahorse-app",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
    {
      url: "Seahorse-app",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
    {
      url: "Seahorse-app",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
  ];
  const dictionary = [
    {
      url: "kadabra.io01.io",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
    {
      url: "kadabra.io01.io",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
    {
      url: "kadabra.io01.io",
      ip: "2 A / 2 AAAA / 3 NS / 1 SOA",
    },
  ];

  const tablesDetails = [
    {
      title: "Routers",
      data: routers,
      icon: Globe,
    },
    {
      title: "IO/Edge",
      data: edges,
      icon: Droplet,
    },
    {
      title: "Dictionary",
      data: dictionary,
      icon: Globe,
    },
  ];

  const columns = [
    { field: "url", headerName: "", type: "titleWithicon" },
    { field: "ip", headerName: "" },
    { field: "", headerName: "", type: "option" },
  ];

  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {tablesDetails.map((dataTable) => (
          <div>
            <div className="title-table-container">
              <label className="title-table">{`${dataTable.title} (${dataTable.data.length})`}</label>
            </div>
            <CustomTable
              columns={columns}
              data={dataTable.data.map((item) => ({
                ...item,
                options: [
                  {
                    name: "Show Properties",
                    onPress: () => handleOpenDialog(item),
                  },
                ],
              }))}
              icon={dataTable.icon}
              hideTitleHeaders
            />
          </div>
        ))}
      </div>
      <KadabraDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        title={"Properties"}
      >
        <TabsDialogContent
          data={currentData}
          labels={["Info", "Ports", "CVE"]}
        />
      </KadabraDialog>
    </>
  );
};
export default Resources;
