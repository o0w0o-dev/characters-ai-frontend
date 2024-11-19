import { createContext, useContext, useState, useMemo } from "react";
import { updateMenu } from "../config";

const Context = createContext();

function Provider({ children }) {
  // Menu's buttons
  const [loginStatus, setLoginStatus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(updateMenu(loginStatus, "Home")); // set path to homepage

  console.log(menuStatus);
  console.log(loginStatus);

  function handleMenuClick(elementText) {
    setMenuStatus(updateMenu(loginStatus, elementText));
  }

  function handleLogin() {
    const [isLogin, clickedButton] = [true, "Settings"];
    setLoginStatus(isLogin);
    setMenuStatus(updateMenu(isLogin, clickedButton));
  }

  function handleLogout() {
    const [isLogin, clickedButton] = [false, "Home"];
    setLoginStatus(isLogin);
    setMenuStatus(updateMenu(isLogin, clickedButton));
  }

  const value = useMemo(() => {
    return {
      loginStatus,
      menuStatus,
      onLogin: handleLogin,
      onLogout: handleLogout,
      onMenuClick: handleMenuClick,
    };
  }, [loginStatus, menuStatus]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useMyContext() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("Context was used outside of the Provider");
  return context;
}

export { Provider, useMyContext };
