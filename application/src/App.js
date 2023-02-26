import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminComponent from "./components/AdminComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/admin" element={<AdminComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
