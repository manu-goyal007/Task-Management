import { useState } from "react";
import "./HomePage.css"

function Homepage() {
  const [tasks, setTasks] = useState([]);

  const [taskId, setTaskId] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (!taskId || !taskName || !taskDescription) return;

    const newTask = {
      id: taskId,
      name: taskName,
      description: taskDescription
    };

    setTasks([...tasks, newTask]);

    // clear form
    setTaskId("");
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <>
      <form onSubmit={addTask}>
        <div>
          <label>Task ID</label>
          <input
            type="text"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
          />
        </div>

        <div>
          <label>Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div>
          <label>Task Description</label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>

        <button type="submit">Add Task</button>
      </form>

      <hr />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Homepage;
