const menuButtonPaths = [
  { type: "Home", path: "/" },
  { type: "Chat", path: "/chat" },
  { type: "Characters", path: "/characters" },
  { type: "Settings", path: "/settings" },
  { type: "Pro", path: "/pro" },
  { type: "Login", path: "/login" },
  { type: "Logout", path: "/" },
];

// for buttons not in menu
const buttonPaths = [{ type: "login", path: "/settings" }];

function createMenu(login, selected) {
  return menuButtonPaths.map((path) => ({
    text: path.type,
    selected: path.type === selected,
    display: login
      ? path.type !== "Login"
      : path.type === "Home" || path.type === "Login"
      ? true
      : false,
    path: path.path,
  }));
}

export { createMenu, menuButtonPaths, buttonPaths };
