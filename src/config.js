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
const buttonPaths = [{ type: "login", path: "/" }];

const menu = {
  init: menuButtonPaths.map((path) => ({
    text: path.type,
    selected: path.type === "Home" ? true : false,
    display: path.type === "Home" || path.type === "Login" ? true : false,
    path: path.path,
  })),
  login: menuButtonPaths.map((path) => ({
    text: path.type,
    selected: path.type === "Home" ? true : false,
    display: path.type !== "Login" ? true : false,
    path: path.path,
  })),
};

export { menu, menuButtonPaths, buttonPaths };
