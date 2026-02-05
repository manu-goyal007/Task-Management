import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/HomePage.jsx'
import Dashboardpage from './pages/DashBoardPage.jsx'
import Header from "./components/Header";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const cachedTasks = localStorage.getItem("tasks");
    if (cachedTasks) {
      setTasks(JSON.parse(cachedTasks));
    }
  }, []);


  // Save to cache whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <>
      <Header title ="Manu Goyal" />
      <Header title="Task Management App" />
      <Router>
      {/* Navigation Links */}
      <nav style={{ textAlign:'center',display:'flex',width:'100%',textBox:'text',    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "0 24px",
    boxSizing: "border-box",
    borderBottom: "1px solid #e5e5e5",fill:'Background',fontSize:'50px'}}>
        <Link style={{padding:'0px',justifyContent: "center",alignItems:'center'}} to="/">Home</Link> |{" "}
        <Link style={{padding:'0px',justifyContent: "center",alignItems:'center'}} to="/dashboard">Dashboard</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Homepage tasks={tasks} setTasks={setTasks}  />} />
        <Route path="/dashboard" element={<Dashboardpage tasks={tasks}/>} />
      </Routes>
    </Router>

    
    </>
  )
}

export default App
