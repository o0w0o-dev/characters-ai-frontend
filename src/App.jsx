import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./components/Context";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./components/Main";
import PageNotFound from "./pages/PageNotFound";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main protectedRoute={false}>
                <Home />
              </Main>
            }
          />
          <Route
            path="/login"
            element={
              <Main protectedRoute={false}>
                <Login />
              </Main>
            }
          />
          <Route
            path="/signup"
            element={
              <Main protectedRoute={false}>
                <SignUp />
              </Main>
            }
          />

          <Route
            path="/forgot"
            element={
              <Main protectedRoute={false}>
                <ForgotPassword />
              </Main>
            }
          />
          <Route
            path="/verify"
            element={
              <Main protectedRoute={false}>
                <EmailVerification />
              </Main>
            }
          />
          <Route
            path="/settings"
            element={
              <Main protectedRoute={true}>
                <Settings />
              </Main>
            }
          />
          <Route
            path="/reset"
            element={
              <Main protectedRoute={true}>
                <ResetPassword />
              </Main>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
