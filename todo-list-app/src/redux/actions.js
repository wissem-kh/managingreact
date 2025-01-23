export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task,
  });
  
  export const toggleTask = (id) => ({
    type: "TOGGLE_TASK",
    payload: id,
  });
  
  export const deleteTask = (id) => ({
    type: "DELETE_TASK",
    payload: id,
  });
  