import { useState } from "react";
import "./HomePage.css"
import Header from "../components/Header.jsx"

function Dashboardpage() {
  return (
    <div className="container">
      <form className="task-form">
        <Header title="Add Task " />


        <input placeholder="Task ID" />
        <input placeholder="Task Name" />
        <input placeholder="Task Description" />

        <button>Add Task</button>
      </form>

      <table className="task-table">
        <thead>
          <tr>
            <th>Done</th>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>1</td>
            <td className="completed">Sample Task</td>
            <td>Sample Description</td>
            <td>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Dashboardpage;