import { useNavigate } from "react-router-dom";

export default function Menu({ menuStatus }) {
  const navigate = useNavigate();

  return (
    <div className="menu">
      {menuStatus
        .filter((button) => button.display === true)
        .map((button, index) => (
          <div
            className={`menu-button ${button.selected ? "selected" : "block"}`}
            style={{ top: 296 - index * 74 }}
            key={button.text}
            onClick={() => navigate(button.path)}
          >
            <div className="text-24">{button.text}</div>
          </div>
        ))}
    </div>
  );
}
