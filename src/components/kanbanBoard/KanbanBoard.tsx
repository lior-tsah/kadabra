import React, { useEffect, useMemo, useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { BoardData, Column, Task } from "./types";
import Warehouse from "./Warehouse";
import { useData } from "../../context/DataContext";

const KanbanBoard: React.FC = () => {
  const { data, kanbanData, setKanbanData } = useData();

  const interfaceData = useMemo(
    () =>
      data?.network_interfaces.reduce((acc: any, obj: any) => {
        acc[obj.ip_address] = obj;
        return acc;
      }, {}),
    [data]
  );

  const initialData: BoardData = {
    tasks: interfaceData,

    columns: {
      "column-1": {
        id: "column-1",
        title: "Level 4/5",
        subtitle: "Enterprise and Buisness Networks",
        taskIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "Level 3.5",
        subtitle: "IT/OT DMZ",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Level 3",
        subtitle: "Operations Systems",
        taskIds: [],
      },
      "column-4": {
        id: "column-4",
        title: "Level 2",
        subtitle: "Supervisory Control",
        taskIds: [],
      },
      "column-5": {
        id: "column-5",
        title: "Level 1",
        subtitle: "Process Control",
        taskIds: [],
      },
      "column-6": {
        id: "column-6",
        title: "Level 0",
        subtitle: "Phisical Process",
        taskIds: [],
      },
      warehouse: {
        id: "warehouse",
        title: "",
        subtitle: "",
        taskIds: data?.network_interfaces.map((item) => item.ip_address) || [],
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

  useEffect(() => {
    setKanbanData(initialData);
  }, []);

  useEffect(() => {
    if (kanbanData) {
      const allTasksIds =
        data?.network_interfaces.map((item) => item.ip_address) || [];
      const newTasksIds = allTasksIds.filter((id: string) =>
        checkNewId(id, kanbanData)
      );
      kanbanData.tasks = interfaceData;
      kanbanData.columns["warehouse"].taskIds = [
        ...(kanbanData.columns["warehouse"]?.taskIds || []),
        ...newTasksIds,
      ];
      setKanbanData({ ...kanbanData });
    }
  }, [data]);

  const checkNewId = (id: string, kanbanData: BoardData) => {
    const keys = Object.keys(kanbanData.columns);
    return keys.every((key: any) =>
      kanbanData.columns[key]?.taskIds.every((t_id: string) => t_id !== id)
    );
  };

  const onDragEnd = (e: any, column: Column) => {
    if (kanbanData) {
      const droppedTask = JSON.parse(e.dataTransfer.getData("task"));
      const startCol = JSON.parse(e.dataTransfer.getData("column"));
      kanbanData.columns[startCol.id].taskIds = kanbanData.columns[
        startCol.id
      ].taskIds.filter((id) => id !== droppedTask.ip_address);
      kanbanData.columns[column.id].taskIds.push(droppedTask.ip_address);
      setKanbanData({ ...kanbanData });
    }
  };

  const groupNames = [
    { name: "IT", classColor: "cyan-background", idxStart: 0, idxEnd: 0 },
    { name: "", classColor: undefined, idxStart: 1, idxEnd: 1 },
    { name: "OT", classColor: "blue-background", idxStart: 2, idxEnd: 5 },
  ];

  return kanbanData ? (
    <div className="board-container">
      <div className="board-warehouse-container ">
        <Warehouse
          onDragEnd={onDragEnd}
          column={kanbanData.columns["warehouse"]}
          tasks={kanbanData.columns["warehouse"].taskIds.map(
            (taskId) => kanbanData.tasks[taskId]
          )}
        />
      </div>

      <div className="board-gn-container">
        {groupNames.map((groupName) => {
          const colGroup = kanbanData.columnOrder
            .filter(
              (_, index) =>
                groupName.idxStart <= index && groupName.idxEnd >= index
            )
            .map((columnId) => {
              const column = kanbanData.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => kanbanData.tasks[taskId]
              );

              return (
                <KanbanColumn
                  classColor={groupName.classColor}
                  onDragEnd={onDragEnd}
                  key={column.id}
                  column={column}
                  tasks={tasks}
                />
              );
            });

          return (
            <div className="board-group-container">
              <div className={`board-group ${groupName.classColor}`}>
                <label className="label-board">{groupName.name}</label>
              </div>
              <div style={{ flex: 2 }}>{colGroup}</div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default KanbanBoard;
