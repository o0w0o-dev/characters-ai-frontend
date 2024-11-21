import { createContext, useContext, useState } from "react";
import { login } from "../services/apiAuth";
import { updateMenu } from "../config";

const Context = createContext();

function Provider({ children }) {
  // Menu's buttons
  const [isLogin, setIsLogin] = useState(false);
  const [menu, setMenu] = useState(updateMenu(isLogin, "Home")); // set path to homepage
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  console.log({ menu });
  console.log({ isLogin });
  console.log({ formData });
  console.log({ errorMessages });

  function handleMenuClick(elementText) {
    setMenu(updateMenu(isLogin, elementText));
  }

  async function handleLogin({ email, password }) {
    let isLogin;

    const { data, error } = await login({ email, password });

    if (error) {
      isLogin = false;

      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        login:
          error.message === "Invalid login credentials"
            ? "Invalid email or password"
            : error.message,
      }));

      return isLogin;
    }

    if (data?.user?.aud === "authenticated") {
      isLogin = true;
      setIsLogin(isLogin);
      setMenu(updateMenu(isLogin, "Settings"));
      setErrorMessages((errorMessages) => ({
        ...errorMessages,
        login: undefined,
      }));

      return isLogin;
    }

    return isLogin;
  }

  function handleLogout() {
    const [isLogin, clickedButton] = [false, "Home"];
    setIsLogin(isLogin);
    setMenu(updateMenu(isLogin, clickedButton));
  }

  const value = {
    isLogin,
    menu,
    formData,
    setFormData,
    errorMessages,
    setErrorMessages,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onMenuClick: handleMenuClick,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useMyContext() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("Context was used outside of the Provider");
  return context;
}

export { Provider, useMyContext };
