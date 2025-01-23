import React from 'react';

function TaskItem({ task, deleteTask, toggleCompletion, editTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3 onClick={() => toggleCompletion(task.id)}>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
