import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Client from "./pages/Client/Client";
import Task from "./pages/task/Task";
import Team from "./pages/team/Team";
import AddNewTask from "./pages/task/AddNewTask";
import Employee from "./pages/employee/Employee";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>} />
            <Route path="/dashboard" element={<Home />} />
          </Route>
          <Route path="/clients" element={<Client/>} />
          <Route path="/tasks" element={<Task/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/addNewtask" element={<AddNewTask/>} />
          <Route path="/employee" element={<Employee/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
