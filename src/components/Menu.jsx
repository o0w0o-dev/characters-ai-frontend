import { useMyContext } from "./Context";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { menu, onMenuClick, onLogout } = useMyContext();
  const navigate = useNavigate();
  const displayButtons = menu.filter((button) => button.display === true);

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
      {displayButtons.map((button, index) => (
        <div
          className={`menu-button ${button.selected ? "selected" : "block"}`}
          style={{
            top: (menu.length - displayButtons.length - 2) * 74 + index * 74,
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
