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
import { createMenu } from "./config";

function App() {
  // Menu's buttons
  const [loginStatus, setLoginStatus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(createMenu(loginStatus, "Home"));

  console.log(menuStatus);
  console.log(loginStatus);

  function handleMenuClick(elementText) {
    setMenuStatus(createMenu(loginStatus, elementText));
  }

  function handleLogin() {
    setLoginStatus(true);
    setMenuStatus(createMenu(true, "Settings"));
  }

  function handleLogout() {
    setLoginStatus(false);
    setMenuStatus(createMenu(false, "Home"));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main menuStatus={menuStatus} onMenuClick={handleMenuClick} />
          }
        />
        <Route
          path="/login"
          element={
            <Main menuStatus={menuStatus} onMenuClick={handleMenuClick}>
              <Login onLogin={handleLogin} />
            </Main>
          }
        />
        <Route
          path="/signup"
          element={
            <Main menuStatus={menuStatus} onMenuClick={handleMenuClick}>
              <SignUp />
            </Main>
          }
        />

        <Route
          path="/forgot"
          element={
            <Main menuStatus={menuStatus} onMenuClick={handleMenuClick}>
              <ForgotPassword />
            </Main>
          }
        />
        <Route
          path="/verify"
          element={
            <Main menuStatus={menuStatus} onMenuClick={handleMenuClick}>
              <EmailVerification />
            </Main>
          }
        />
        <Route
          path="/settings"
          element={
            <Main menuStatus={menuStatus} onMenuClick={handleMenuClick}>
              <Settings />
            </Main>
          }
        />
        <Route
          path="/reset"
          element={
            <Main menuStatus={menuStatus} onMenuClick={handleMenuClick}>
              <ResetPassword />
            </Main>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
