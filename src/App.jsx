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
