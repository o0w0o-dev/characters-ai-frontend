import Menu from "./Menu";

export default function Main({ children, menuStatus, onMenuClick }) {
  return (
    <div className="main">
      <div className="main-wrapper-2">
        <div className="main-wrapper-3">
          <div className="div-3">
            <div className="div-4" />

            <Menu menuStatus={menuStatus} onMenuClick={onMenuClick} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
