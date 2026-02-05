import { useState } from "react";
import "./HomePage.css"
import Header from "../components/Header.jsx"
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboardpage({tasks}) {
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
  
  // Read tasks from localStorage

  // Load tasks from localStorage once when component mounts

  return (

  <div className="card">
    <div className="flex-row">
      <div className="half ">
        <div className="card">
          {tasks.length === 0 ? (
            <p>No tasks available</p>
          ) : (
            <Pie  data={data} />
            
        )}
        </div>
      </div>

    {/* RIGHT: Stats */}
    <div className="half">
    <div className="card">
    <div>
      <p>📋 Total: {tasks.length}</p>
      <p>✅ Done: {doneCount}</p>
      <p>⏳ Pending: {pendingCount}</p>
  </div>
  </div>
  </div>

  </div>
  
  
 </div>

  );
};



export default Dashboardpage;