import React, { useState } from "react";
import './App.css';
import { Login } from "./Login"
import { Register } from "./Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminComponent from "./components/AdminComponent";
import Userpage from './Userpage';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
          <Route path="/admin" element={<AdminComponent />} />
          <Route path="/userpage" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
