import React from "react";
import Task from "./Task";
import { Column as ColumnType, Task as TaskType } from "./types";
import "./kanban.css";

interface WarehouseProps {
  column: ColumnType;
  tasks: TaskType[];
  onDragEnd: (e: any, column: ColumnType) => void;
}

const Warehouse: React.FC<WarehouseProps> = ({ column, tasks, onDragEnd }) => {
  return (
    <div className="warehouse-container">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDragEnd(e, column)}
        style={{
          padding: 8,
          flex: 10,
        }}
      >
        {tasks.map((task, index) => (
          <Task
            key={task?.ip_address}
            task={task}
            index={index}
            column={column}
          />
        ))}
      </div>
    </div>
  );
};

export default Warehouse;
