import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // Menu's buttons
  const [menuStatus, setMenuStatus] = useState([
    { text: "Home", selected: true, display: true },
    { text: "Chat", selected: false, display: true },
    { text: "Characters", selected: false, display: false },
    { text: "Settings", selected: false, display: false },
    { text: "Pro", selected: false, display: false },
    { text: "Login", selected: false, display: false },
    { text: "Logout", selected: false, display: false },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home menuStatus={menuStatus} />} />
        <Route path="/login" element={<Login menuStatus={menuStatus} />} />
        <Route path="*" element={<PageNotFound menuStatus={menuStatus} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
