import { createContext, useContext, useState, useMemo } from "react";
import { createMenu } from "../config";

const Context = createContext();

function Provider({ children }) {
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
