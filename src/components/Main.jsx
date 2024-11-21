import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMyContext } from "./Context";
import Menu from "./Menu";
import Home from "../pages/Home";
import { updateMenu } from "../config";

export default function Main({ children, protectedRoute, selected }) {
  const location = useLocation();
  const { isLogin, setMenu, loading } = useMyContext();

  useEffect(() => {
    setMenu(updateMenu(isLogin, selected));
  }, [isLogin, location]);

  return (
    <div className="main">
      <div className="main-wrapper-2">
        <div className="main-wrapper-3">
          <div className="div-3">
            <div className="div-4" />

            <Menu />
          </div>
          {loading ? <></> : isLogin === protectedRoute ? children : <Home />}
        </div>
      </div>
    </div>
  );
}
