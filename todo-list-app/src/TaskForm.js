import React, { useState } from 'react';

function TaskForm({ addTask, taskToEdit, updateTask }) {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.name : '');
  const [taskDescription, setTaskDescription] = useState(
    taskToEdit ? taskToEdit.description : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert('Please fill in both task name and description.');
      return;
    }

    const newTask = { name: taskName, description: taskDescription, completed: false };
    
    if (taskToEdit) {
      updateTask(taskToEdit.id, newTask);
    } else {
      addTask(newTask);
    }

    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      ></textarea>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
