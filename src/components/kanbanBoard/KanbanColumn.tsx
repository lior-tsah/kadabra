import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import { Column as ColumnType, Task as TaskType } from './types';

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
}

const KanbanColumn: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div style={{ margin: 8 }}>
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              background: 'lightgrey',
              padding: 8,
              width: 250,
              minHeight: 500,
            }}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;
