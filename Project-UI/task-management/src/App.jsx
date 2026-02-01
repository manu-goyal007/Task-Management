import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/HomePage.jsx'
import Dashboardpage from './pages/DashBoardPage.jsx'
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title ="Manu Goyal" />
      <Header title="Task Management App" />

      <p> This App is Created by Manu Goyal  </p>
{/* 
      <p> <Homepage /> </p>
      <p> <Dashboardpage /> </p> */}
      <Router>
      {/* Navigation Links */}
      <nav style={{ textAlign:'center',display:'flex',width:'100%',textBox:'text',    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    boxSizing: "border-box",
    borderBottom: "1px solid #e5e5e5",fill:'Background',fontSize:'50px'}}>
        <Link style={{padding:'0px',alignItems:'center'}} to="/">Home</Link> |{" "}
        <Link style={{padding:'0px',alignItems:'center'}} to="/dashboard">Dashboard</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
