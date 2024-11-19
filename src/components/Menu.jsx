import { useMyContext } from "./Context";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { menuStatus, onMenuClick, onLogout } = useMyContext();
  const navigate = useNavigate();
  const displayButton = menuStatus.filter((button) => button.display === true);

  // menu button's actions
  function onClick(elementText, path) {
    if (elementText === "Logout") {
      onLogout();
    } else {
      onMenuClick(elementText);
    }

    navigate(path);
  }

  return (
    <div className="menu">
      {displayButton.map((button, index) => (
        <div
          className={`menu-button ${button.selected ? "selected" : "block"}`}
          style={{
            top:
              (menuStatus.length - displayButton.length - 2) * 74 + index * 74,
          }}
          key={button.text}
          onClick={(e) => onClick(e.target.textContent, button.path)}
        >
          <div className="text-24">{button.text}</div>
        </div>
      ))}
    </div>
  );
}
