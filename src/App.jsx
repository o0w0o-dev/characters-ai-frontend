import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EmailVerification from "./pages/EmailVerification";
import PageNotFound from "./pages/PageNotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";

function App() {
  // Menu's buttons
  const [menuStatus, setMenuStatus] = useState([
    { text: "Home", selected: true, display: true },
    { text: "Chat", selected: false, display: false },
    { text: "Characters", selected: false, display: false },
    { text: "Settings", selected: false, display: false },
    { text: "Pro", selected: false, display: false },
    { text: "Login", selected: false, display: true },
    { text: "Logout", selected: false, display: false },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home menuStatus={menuStatus} />} />
        <Route path="/login" element={<Login menuStatus={menuStatus} />} />
        <Route path="/signup" element={<SignUp menuStatus={menuStatus} />} />

        <Route
          path="/forgot"
          element={<ForgotPassword menuStatus={menuStatus} />}
        />
        <Route
          path="/verify"
          element={<EmailVerification menuStatus={menuStatus} />}
        />
        <Route
          path="/settings"
          element={<Settings menuStatus={menuStatus} />}
        />
        <Route path="*" element={<PageNotFound menuStatus={menuStatus} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
