import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard   from "./pages/Dashboard";
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (  
    <div className="w-screen  bg-richblack-900 text-white">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />

      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element= {<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element= {<Dashboard/>} />

      </Routes> 
    </div>
  );
}

export default App;
