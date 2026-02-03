import { useState,useEffect } from "react";
import "./HomePage.css"

function Homepage() {
  const [tasks, setTasks] = useState([]);

  const [taskId, setTaskId] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState('');

  const addTask = (e) => {
    e.preventDefault();

    if ( !taskName || !taskDescription) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      status: taskStatus
    };

    setTasks([...tasks, newTask]);

    // clear form
    setTaskId("");
    setTaskName("");
    setTaskDescription("");
    setTaskStatus("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleStatus = (id) => {
  setTasks(tasks.map(task =>
    task.id === id
      ? { ...task, status: !task.status }
      : task
  ));
    };
    useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
  return (
    <>
      <div className="container">
      <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            value={taskName}
            placeholder="Task Name"
            onChange={(e) => setTaskName(e.target.value)}
          />
      

       
          <input
            type="text"
            value={taskDescription}
            placeholder="Task Description"
            onChange={(e) => setTaskDescription(e.target.value)}
          />
       

        <button type="submit">Add Task</button>
        <button type="clear">Clear</button>
      </form>

      <hr />

      <table className="task-table" border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Task Description</th>
            
            <th>Task Status</th>
            <th>Task Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
                <td>{task.status ? "Done ✅" : "Pending ⏳"}</td>
                <td>
                  <button onClick={() => toggleStatus(task.id)}>
                    {task.status ? "Undo" : "Done"}
                  </button>
                
              
              
                <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Homepage;
