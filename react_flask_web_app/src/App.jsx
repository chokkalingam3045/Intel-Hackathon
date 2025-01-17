import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import FileUpload from "./components/fileUpload";
import AddURL from "./components/addURL";
import Not_found from "./components/Not_found";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <main className="w-50vw justify-center">
        <Routes>
          <Route path="/exe" element={<FileUpload />} />
          <Route path="/url" element={<AddURL />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Not_found />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
