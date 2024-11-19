import { useNavigate } from "react-router-dom";
import { useMyContext } from "./Context";
import { buttonRedirect } from "../config";

export default function Button({ button }) {
  const navigate = useNavigate();
  const { onLogin } = useMyContext();

  const styles = {
    loginBtn: {
      div: "button-login",
      body: "button-size-4",
    },
    continueWithGoogle: {
      div: "button-continueWithGoogle",
      body: "button-size-4",
    },
    signupBtn: {
      div: "button-login",
      body: "button-size-4",
    },
    recoveryBtn: {
      div: "button-recovery-1",
      body: "button-recovery-2",
    },
    verifyBackBtn: {
      div: "button-verify-back",
      body: "button-verify",
    },
    verifyContinueBtn: {
      div: "button-verify-continue",
      body: "button-verify",
    },
    // TODO: replace div to button
    resetBtn: {
      div: "reset-1",
      body: "button-verify",
    },
    // TODO: replace div to button
    resetBtn2: {
      div: "reset-2",
      body: "button-verify",
    },
  };

  // buttons that not in menu
  function onClick() {
    if (button.id === "loginBtn") onLogin();
    if (button.id === "verifyContinueBtn") onLogin();
    const path = buttonRedirect.find((path) => path.id === button.id)?.path;
    navigate(path);
  }

  const style = styles[button.id];

  return (
    <button className={style.div} onClick={onClick}>
      <div className={style.body} />

      <div className="text-wrapper-16" id={button.id}>
        {button.text}
      </div>
    </button>
  );
}
