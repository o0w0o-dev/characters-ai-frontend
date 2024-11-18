import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
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
            <Main
              menuStatus={menuStatus}
              onMenuClick={handleMenuClick}
              onLogout={handleLogout}
            >
              <Home />
            </Main>
          }
        />
        <Route
          path="/login"
          element={
            <Main
              menuStatus={menuStatus}
              onMenuClick={handleMenuClick}
              onLogout={handleLogout}
            >
              <Login onLogin={handleLogin} />
            </Main>
          }
        />
        <Route
          path="/signup"
          element={
            <Main
              menuStatus={menuStatus}
              onMenuClick={handleMenuClick}
              onLogout={handleLogout}
            >
              <SignUp />
            </Main>
          }
        />

        <Route
          path="/forgot"
          element={
            <Main
              menuStatus={menuStatus}
              onMenuClick={handleMenuClick}
              onLogout={handleLogout}
            >
              <ForgotPassword />
            </Main>
          }
        />
        <Route
          path="/verify"
          element={
            <Main
              menuStatus={menuStatus}
              onMenuClick={handleMenuClick}
              onLogout={handleLogout}
            >
              <EmailVerification onLogin={handleLogin} />
            </Main>
          }
        />
        <Route
          path="/settings"
          element={
            <Main
              menuStatus={menuStatus}
              onMenuClick={handleMenuClick}
              onLogout={handleLogout}
            >
              <Settings />
            </Main>
          }
        />
        <Route
          path="/reset"
          element={
            <Main
              menuStatus={menuStatus}
              onMenuClick={handleMenuClick}
              onLogout={handleLogout}
            >
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
