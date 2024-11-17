import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Main from "./components/Main";
import PageNotFound from "./pages/PageNotFound";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import { menu } from "./config";

function App() {
  // Menu's buttons
  const [menuStatus, setMenuStatus] = useState(menu.init);
  const [loginStatus, setLoginStatus] = useState(false);

  console.log(menuStatus);

  function handleLogin() {
    setMenuStatus(menu.login);
    setLoginStatus(true);
  }

  function handleLogout() {
    setMenuStatus(menu.init);
    setLoginStatus(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main menuStatus={menuStatus} />} />
        <Route
          path="/login"
          element={
            <Main menuStatus={menuStatus}>
              <Login menuStatus={menuStatus} onLogin={handleLogin} />
            </Main>
          }
        />
        <Route
          path="/signup"
          element={
            <Main menuStatus={menuStatus}>
              <SignUp menuStatus={menuStatus} />
            </Main>
          }
        />

        <Route
          path="/forgot"
          element={
            <Main menuStatus={menuStatus}>
              <ForgotPassword menuStatus={menuStatus} />
            </Main>
          }
        />
        <Route
          path="/verify"
          element={
            <Main menuStatus={menuStatus}>
              <EmailVerification menuStatus={menuStatus} />
            </Main>
          }
        />
        <Route
          path="/settings"
          element={
            <Main menuStatus={menuStatus}>
              <Settings menuStatus={menuStatus} />
            </Main>
          }
        />
        <Route
          path="/reset"
          element={
            <Main menuStatus={menuStatus}>
              <ResetPassword menuStatus={menuStatus} />
            </Main>
          }
        />
        <Route path="*" element={<PageNotFound menuStatus={menuStatus} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
