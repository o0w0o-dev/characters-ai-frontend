import { useNavigate } from "react-router-dom";

export default function Menu({ menuStatus }) {
  const navigate = useNavigate();
  const displayButton = menuStatus.filter((button) => button.display === true);

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
          onClick={() => navigate(button.path)}
        >
          <div className="text-24">{button.text}</div>
        </div>
      ))}
    </div>
  );
}
