import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";

function App() {
  // Menu's buttons
  const [menuStatus, setMenuStatus] = useState([
    { text: "Home", selected: true, display: true, path: "/" },
    { text: "Chat", selected: false, display: false, path: "/chat" },
    {
      text: "Characters",
      selected: false,
      display: false,
      path: "/characters",
    },
    { text: "Settings", selected: false, display: false, path: "/settings" },
    { text: "Pro", selected: false, display: false, path: "/pro" },
    { text: "Login", selected: false, display: true, path: "/login" },
    { text: "Logout", selected: false, display: false, path: "/" },
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
        <Route
          path="/reset"
          element={<ResetPassword menuStatus={menuStatus} />}
        />
        <Route path="*" element={<PageNotFound menuStatus={menuStatus} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
