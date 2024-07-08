import React, { useState } from "react";
import { Column, Task as TaskType } from "./types";
import KadabraDialog from "../dialogs/KadabraDialog";
import DashboardDialogContent from "../../pages/dashboard/DashboardDialogContent";
import { useData } from "../../context/DataContext";
import Close from "../../assets/components-icons/close.svg";
import DropdownButton from "../DropdownButton";
import ThreeDots from "../../assets/components-icons/three-dots.svg";
import { nmapRun } from "../../mockData/data";

interface TaskProps {
  task: TaskType;
  index: number;
  column: Column;
}

const Task: React.FC<TaskProps> = ({ task, index, column }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { data, setData, currentData, setCurrentData } = useData();

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDragStart = (event: any, task: any) => {
    event.dataTransfer.setData("task", JSON.stringify(task));
    event.dataTransfer.setData("column", JSON.stringify(column));
  };
  const handleOpenDialog = () => {
    setCurrentData(task);
    setOpenDialog(true);
  };

  const devicesOptions = [
    {
      name: "Active Scan",
      onPress: () => {
        if (data) {
          data.network_interfaces = [
            ...data.network_interfaces,
            ...(nmapRun.host.map((h) => ({
              ...h,
              interface: h.endtime,
              ip_address: h.address.addr,
            })) as any),
          ];
          setData({ ...data });
        }
      },
    },
    { name: "Show Properties", onPress: handleOpenDialog },
  ];
  const btn = {
    name: "",
    src: ThreeDots,
    options: devicesOptions,
  };

  return (
    <>
      <div
        onClick={handleOpenDialog}
        onDragStart={(e) => handleDragStart(e, task)}
        onDragOver={handleDragOver}
        // onDrop={(e) => handleDrop(e, camera)}
        // onClick={(e) => onCheckItem(e, camera)}
        draggable
        style={{
          padding: 16,
          cursor: "pointer",
          margin: "0 0 8px 0",
          backgroundColor: "white",
          border: "1px solid lightgrey",
          borderRadius: 2,
          width: "fit-content",
          display: "flex",
          gap: "15px",
          alignItems: "center"
        }}
      >
        <label>{task?.interface}</label>
        <DropdownButton btn={btn} />
      </div>
      <KadabraDialog
        open={openDialog}
        deleteIcon={Close}
        handleClose={() => setOpenDialog(false)}
        title={"Properties"}
      >
        <DashboardDialogContent data={currentData} />
      </KadabraDialog>
    </>
  );
};

export default Task;
