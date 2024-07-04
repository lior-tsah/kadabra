import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task as TaskType } from "./types";

interface TaskProps {
  task: TaskType;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: 16,
            margin: "0 0 8px 0",
            backgroundColor: "white",
            border: "1px solid lightgrey",
            borderRadius: 2,
            ...provided.draggableProps.style,
          }}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
