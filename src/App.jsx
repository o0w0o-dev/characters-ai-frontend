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
              <Main>
                <Home />
              </Main>
            }
          />
          <Route
            path="/login"
            element={
              <Main>
                <Login />
              </Main>
            }
          />
          <Route
            path="/signup"
            element={
              <Main>
                <SignUp />
              </Main>
            }
          />

          <Route
            path="/forgot"
            element={
              <Main>
                <ForgotPassword />
              </Main>
            }
          />
          <Route
            path="/verify"
            element={
              <Main>
                <EmailVerification />
              </Main>
            }
          />
          <Route
            path="/settings"
            element={
              <Main>
                <Settings />
              </Main>
            }
          />
          <Route
            path="/reset"
            element={
              <Main>
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
