import { useNavigate } from "react-router-dom";
import { buttonPaths } from "../config";

export default function Button({ button, onLogin }) {
  const navigate = useNavigate();

  const styles = {
    login: {
      div: "button-login",
      body: "button-size-4",
    },
    loginWithGoogle: {
      div: "button-loginWithGoogle",
      body: "button-size-4",
    },
    signup: {
      div: "button-login",
      body: "button-size-4",
    },
    recovery: {
      div: "button-recovery-1",
      body: "button-recovery-2",
    },
    verifyBack: {
      div: "button-verify-back",
      body: "button-verify",
    },
    verifyContinue: {
      div: "button-verify-continue",
      body: "button-verify",
    },
    reset: {
      div: "reset-1",
      body: "button-verify",
    },
    reset2: {
      div: "reset-2",
      body: "button-verify",
    },
  };

  // buttons that not in menu
  function onClick() {
    if (button.type === "login") onLogin();
    if (button.type === "verifyContinue") onLogin();
    const path = buttonPaths.find((path) => path.type === button.type)?.path;
    navigate(path);
  }

  const style = styles[button.type];

  return (
    <button className={style.div} onClick={onClick}>
      <div className={style.body} />

      <div className="text-wrapper-16">{button.text}</div>
    </button>
  );
}
