import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { BoardData, Column, Task } from "./types";
import { mockData } from "../../mockData/data";
import Warehouse from "./Warehouse";

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
      title: "Level 5",
      taskIds: mockData.network_interfaces.map((item) => item.ip_address),
    },
    "column-2": {
      id: "column-2",
      title: "Level 4",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Level 3",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "Level 2",
      taskIds: [],
    },
    "column-5": {
      id: "column-5",
      title: "Level 1",
      taskIds: [],
    },
    "column-6": {
      id: "column-6",
      title: "Level 0",
      taskIds: [],
    },
    warehouse: {
      id: "warehouse",
      title: "warehouse",
      taskIds: [],
    },
  },
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        gap: "8px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 6 }}>
        <Warehouse
          onDragEnd={onDragEnd}
          column={data.columns["warehouse"]}
          tasks={data.columns["warehouse"].taskIds.map(
            (taskId) => data.tasks[taskId]
          )}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0cc4cc",
            color: "#fff",
          }}
        >
          <label style={{ transform: "rotate(90deg)" }}>IT</label>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", flex: 1 }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 4,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5074fc",
            color: "#fff",
          }}
        >
          <label style={{ transform: "rotate(90deg)" }}>OT</label>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 27 }}>
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
      </div>
    </div>
  );
};

export default KanbanBoard;
