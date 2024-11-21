import { useMyContext } from "./Context";
import Menu from "./Menu";
import Home from "../pages/Home";

export default function Main({ children, protectedRoute }) {
  const { isLogin, loading } = useMyContext();
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
