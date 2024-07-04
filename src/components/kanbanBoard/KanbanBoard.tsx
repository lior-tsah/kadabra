import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { BoardData, Column, Task } from "./types";

const initialData: BoardData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
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
    ].taskIds.filter((id) => id !== droppedTask.id);
    data.columns[column.id].taskIds.push(droppedTask.id);
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
