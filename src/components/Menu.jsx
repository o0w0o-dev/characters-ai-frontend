export default function Menu({ menuStatus }) {
  return (
    <div className="menu">
      {menuStatus
        .filter((button) => button.display === true)
        .map((button) => (
          <button
            className={button.selected ? "menu-selected" : "menu-block"}
            key={button.text}
          >
            <div className="text-24">{button.text}</div>
          </button>
        ))}
    </div>
  );
}
