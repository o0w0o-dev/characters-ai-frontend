import { useState } from "react";
import Main from "./Main";

function App() {
  // Menu's buttons
  const [menuStatus, setMenuStatus] = useState([
    { text: "Home", selected: true, display: true },
    { text: "Chat", selected: false, display: true },
    { text: "Characters", selected: false, display: false },
    { text: "Settings", selected: false, display: false },
    { text: "Pro", selected: false, display: false },
    { text: "Login", selected: false, display: false },
    { text: "Logout", selected: false, display: false },
  ]);

  return (
    <div>
      <Main menuStatus={menuStatus} />
    </div>
  );
}

export default App;
