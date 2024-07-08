import React from "react";
import Task from "./Task";
import { Column as ColumnType, Task as TaskType } from "./types";
import "./kanban.css";
interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
  onDragEnd: (e: any, column: ColumnType) => void;
  classColor?: string;
}

const KanbanColumn: React.FC<ColumnProps> = ({
  column,
  tasks,
  onDragEnd,
  classColor = "mixed-background",
}) => {
  return (
    <div className="column-container ">
      <div className={`column-title-container ${classColor}`}>
        <h3>{column.title}</h3>
        <p>{column.subtitle}</p>
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDragEnd(e, column)}
        className="kanban-row"
      >
        {tasks.map((task, index) => (
          <Task
            key={task.ip_address}
            task={task}
            index={index}
            column={column}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
