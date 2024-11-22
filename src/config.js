const menuButtons = [
  { id: "Home", path: "/" },
  { id: "Chat", path: "/chat" },
  { id: "Characters", path: "/characters" },
  { id: "Settings", path: "/settings" },
  { id: "Pro", path: "/pro" },
  { id: "Login", path: "/login" },
  { id: "Logout", path: "/" },
];

// for buttons not in menu
const buttonRedirect = [
  { id: "loginBtn", path: "/" },
  { id: "recoveryBtn", path: "/login" },
  { id: "signupBtn", path: "/login" },
  { id: "verifyBackBtn", path: "/signup" },
  { id: "verifyContinueBtn", path: "/" },
];

function updateMenu(isLogin, clickedButton) {
  return menuButtons.map((button) => ({
    text: button.id,
    selected: button.id === clickedButton,
    display: isLogin
      ? button.id !== "Login"
      : button.id === "Home" || button.id === "Login"
      ? true
      : false,
    path: button.path,
  }));
}

export { updateMenu, buttonRedirect };
