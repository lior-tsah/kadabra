import React from "react";
import Task from "./Task";
import { Column as ColumnType, Task as TaskType } from "./types";

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
  onDragEnd: (e: any, column: ColumnType) => void;
}

const KanbanColumn: React.FC<ColumnProps> = ({ column, tasks, onDragEnd }) => {
  return (
    <div style={{ margin: 8 }}>
      <h2>{column.title}</h2>
      <>
        <div
          draggable
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDragEnd(e, column)}
          style={{
            background: "lightgrey",
            padding: 8,
            width: 250,
            minHeight: 500,
          }}
        >
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} column={column} />
          ))}
        </div>
      </>
    </div>
  );
};

export default KanbanColumn;
