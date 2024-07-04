import React from "react";
import { Column, Task as TaskType } from "./types";

interface TaskProps {
  task: TaskType;
  index: number;
  column: Column;
}

const Task: React.FC<TaskProps> = ({ task, index, column }) => {
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };


  const handleDragStart = (event: any, task: any) => {
    event.dataTransfer.setData("task", JSON.stringify(task));
    event.dataTransfer.setData("column", JSON.stringify(column));
  };
  return (
    <div
      onDragStart={(e) => handleDragStart(e, task)}
      onDragOver={handleDragOver}
      // onDrop={(e) => handleDrop(e, camera)}
      // onClick={(e) => onCheckItem(e, camera)}
      draggable
    >
      <div
        style={{
          padding: 16,
          margin: "0 0 8px 0",
          backgroundColor: "white",
          border: "1px solid lightgrey",
          borderRadius: 2,
        }}
      >
        {task.content}
      </div>
    </div>
  );
};

export default Task;
