import { createContext, useContext, useEffect, useState } from "react";
import {
  signup,
  login,
  getCurrentUser,
  updateCurrentUser,
} from "../services/apiAuth";
import { updateMenu } from "../config";

const Context = createContext();

function Provider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [menu, setMenu] = useState(updateMenu(false, "Home"));
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
      setIsLogin(!!user);
      // setMenu(updateMenu(!!user, "Home"));
      setLoading(false);
    };

    fetchCurrentUser();
  }, []);

  function handleMenuClick(elementText) {
    setMenu(updateMenu(isLogin, elementText));
  }

  async function handleSignup({ email, password }) {
    const { data, error } = await signup({ email, password });

    if (error) {
      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        signup: error.message.replace(
          "Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789.",
          "⚠️ Contain at least 1 character of each: a-z, A-Z, 0-9."
        ),
      }));

      return false;
    }

    if (data?.user?.aud === "authenticated") {
      setMenu(updateMenu(false, "Login"));
      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        signup: undefined,
      }));

      return true;
    }

    return undefined;
  }

  async function handleLogin({ email, password, reset }) {
    const { data, error } = await login({ email, password });

    if (error) {
      if (reset) {
      } else {
        setIsLogin(false);
      }
      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        login:
          error.message === "Invalid login credentials"
            ? "Invalid email or password"
            : error.message,
      }));

      return false;
    }

    if (data?.user?.aud === "authenticated") {
      if (reset) {
      } else {
        setUser(data.user);
        setIsLogin(true);
        setMenu(updateMenu(true, "Home"));
      }
      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        login: undefined,
      }));

      return true;
    }

    return undefined;
  }

  function handleLogout() {
    localStorage.clear();
    setIsLogin(false);
    setMenu(updateMenu(false, "Home"));
    window.location.reload(false);
  }

  async function handleReset({ password }) {
    const { data, error } = await updateCurrentUser({ password });

    if (error) {
      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        reset: error.message.replace(
          "Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789.",
          "⚠️ Contain at least 1 character of each: a-z, A-Z, 0-9."
        ),
      }));

      return false;
    }

    if (data?.user?.aud === "authenticated") {
      setMenu(updateMenu(false, "Login"));
      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        reset: undefined,
      }));

      return true;
    }

    return undefined;
  }

  const value = {
    user,
    isLogin,
    menu,
    setMenu,
    formData,
    setFormData,
    errorMessages,
    setErrorMessages,
    loading,
    onReset: handleReset,
    onSignup: handleSignup,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onMenuClick: handleMenuClick,
  };

  console.log({ menu });
  console.log({ isLogin });
  console.log({ user });
  console.log({ formData });
  console.log({ errorMessages });

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useMyContext() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("Context was used outside of the Provider");
  return context;
}

export { Provider, useMyContext };
