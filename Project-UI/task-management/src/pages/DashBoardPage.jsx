import { useState } from "react";
import "./HomePage.css"
import Header from "../components/Header.jsx"
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboardpage = () => {
  const [tasks, setTasks] = useState([]);

  // Read tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const doneCount = tasks.filter(task => task.status).length;
  const pendingCount = tasks.filter(task => !task.status).length;

  const data = {
    labels: ["Done", "Pending"],
    datasets: [
      {
        data: [doneCount, pendingCount],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ width: "350px", margin: "40px auto", textAlign: "center" }}>
      <h2>Dashboard</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <Pie data={data} />
      )}

      <div style={{ marginTop: "20px" }}>
        <p>✅ Done: {doneCount}</p>
        <p>⏳ Pending: {pendingCount}</p>
        <p>📋 Total: {tasks.length}</p>
      </div>
    </div>
  );
};



export default Dashboardpage;