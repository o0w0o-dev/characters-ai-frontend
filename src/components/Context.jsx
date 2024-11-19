import { createContext, useContext, useState, useMemo } from "react";
import { updateMenu } from "../config";

const Context = createContext();

function Provider({ children }) {
  // Menu's buttons
  const [isLogin, setIsLogin] = useState(false);
  const [menu, setMenu] = useState(updateMenu(isLogin, "Home")); // set path to homepage

  console.log(menu);
  console.log(isLogin);

  function handleMenuClick(elementText) {
    setMenu(updateMenu(isLogin, elementText));
  }

  function handleLogin() {
    const [isLogin, clickedButton] = [true, "Settings"];
    setIsLogin(isLogin);
    setMenu(updateMenu(isLogin, clickedButton));
  }

  function handleLogout() {
    const [isLogin, clickedButton] = [false, "Home"];
    setIsLogin(isLogin);
    setMenu(updateMenu(isLogin, clickedButton));
  }

  const value = useMemo(() => {
    return {
      isLogin,
      menu,
      onLogin: handleLogin,
      onLogout: handleLogout,
      onMenuClick: handleMenuClick,
    };
  }, [isLogin, menu]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useMyContext() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("Context was used outside of the Provider");
  return context;
}

export { Provider, useMyContext };
