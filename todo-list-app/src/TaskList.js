import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleCompletion, editTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
