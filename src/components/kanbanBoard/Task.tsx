import React, { useState } from "react";
import { Column, Task as TaskType } from "./types";
import KadabraDialog from "../dialogs/KadabraDialog";
import DashboardDialogContent from "../../pages/dashboard/DashboardDialogContent";
import { useData } from "../../context/DataContext";
import Close from "../../assets/components-icons/close.svg";

interface TaskProps {
  task: TaskType;
  index: number;
  column: Column;
}

const Task: React.FC<TaskProps> = ({ task, index, column }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { currentData, setCurrentData } = useData();

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDragStart = (event: any, task: any) => {
    event.dataTransfer.setData("task", JSON.stringify(task));
    event.dataTransfer.setData("column", JSON.stringify(column));
  };
  return (
    <>
      <div
        onClick={() => {
          setCurrentData(task);
          setOpenDialog(true);
        }}
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
        }}
      >
        {task?.interface}
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
