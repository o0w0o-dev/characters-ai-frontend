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
import { menu } from "./config";

function App() {
  // Menu's buttons
  const [menuStatus, setMenuStatus] = useState(menu.init);
  console.log(menuStatus);

  function handleLogin() {
    setMenuStatus(menu.login);
  }

  function handleLogout() {
    setMenuStatus(menu.init);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home menuStatus={menuStatus} />} />
        <Route
          path="/login"
          element={<Login menuStatus={menuStatus} onLogin={handleLogin} />}
        />
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
