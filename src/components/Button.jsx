import { useNavigate } from "react-router-dom";
import { useMyContext } from "./Context";
import { buttonRedirect } from "../config";

export default function Button({ button }) {
  function redirect(clickedButton) {
    const path = buttonRedirect.find(
      (path) => path.id === clickedButton.id
    )?.path;
    navigate(path);
  }

  const navigate = useNavigate();
  const { formData, onLogin, setErrorMessages } = useMyContext();

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

  const formButtons = [
    "loginBtn",
    "signupBtn",
    "recoveryBtn",
    "verifyContinueBtn",
    "resetBtn2",
  ];

  const isSubmitButton = formButtons.includes(button.id);

  // buttons that not in menu
  async function handleClick(e) {
    console.log({ clicked: e.target.parentNode.id });

    if (isSubmitButton && button.id === "loginBtn") {
      e.preventDefault();

      const email = formData.loginEmail;
      const password = formData.loginPassword;

      if (!email || !password) {
        setErrorMessages((errorMessages) => ({
          ...errorMessages,
          login: "Invalid email or password",
        }));
        return;
      }

      const success = await onLogin({ email, password });
      if (success) redirect(button);
    }

    if (isSubmitButton && button.id === "verifyContinueBtn") {
      e.preventDefault();
    }
  }

  const style = styles[button.id];

  return (
    <button
      id={button.id}
      type={isSubmitButton ? "submit" : "button"}
      className={style.div}
      onClick={handleClick}
    >
      <div className={style.body} />

      <div className="text-wrapper-16" id={button.id}>
        {button.text}
      </div>
    </button>
  );
}
