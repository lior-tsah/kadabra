import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { BoardData, Column, Task } from "./types";
import { mockData } from "../../mockData/data";

const interfaceData = mockData.network_interfaces.reduce(
  (acc: any, obj: any) => {
    acc[obj.ip_address] = obj;
    return acc;
  },
  {}
);
const initialData: BoardData = {
  tasks: interfaceData,

  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: mockData.network_interfaces.map((item) => item.ip_address),
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const KanbanBoard: React.FC = () => {
  const [data, setData] = useState<BoardData>(initialData);

  const onDragEnd = (e: any, column: Column) => {
    const droppedTask = JSON.parse(e.dataTransfer.getData("task"));
    const startCol = JSON.parse(e.dataTransfer.getData("column"));
    data.columns[startCol.id].taskIds = data.columns[
      startCol.id
    ].taskIds.filter((id) => id !== droppedTask.ip_address);
    data.columns[column.id].taskIds.push(droppedTask.ip_address);
    setData({ ...data });
  };

  return (
    <>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return (
          <KanbanColumn
            onDragEnd={onDragEnd}
            key={column.id}
            column={column}
            tasks={tasks}
          />
        );
      })}
    </>
  );
};

export default KanbanBoard;
