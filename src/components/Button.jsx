import { useNavigate } from "react-router-dom";
import { useMyContext } from "./Context";
import { buttonRedirect } from "../config";

export default function Button({ button }) {
  function redirect(clickedButton) {
    const path = buttonRedirect.find(
      (path) => path.id === clickedButton.id
    )?.path;
    navigate(path);
    if (clickedButton.id === "resetBtn2") onLogout();
  }

  const navigate = useNavigate();
  const {
    formData,
    setFormData,
    onSignup,
    onLogin,
    onLogout,
    onReset,
    onRecovery,
    setErrorMessages,
  } = useMyContext();

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
    resetBtn2: {
      div: "reset-2",
      body: "button-verify",
    },
    addItem: {
      div: "button-addItem",
      body: "button-verify",
    },
    pervious: {
      div: "button-pervious",
      body: "button-verify",
    },
    next: {
      div: "button-next",
      body: "button-verify",
    },
    characterCreate: {
      div: "button-create",
      body: "button-verify",
    },
    chat: {
      div: "button-chat",
      body: "button-verify",
    },
    delete: {
      div: "button-delete",
      body: "button-body-delete",
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
    function clearFields() {
      const fieldsToClean = [
        "loginPassword",
        "signUpPassword",
        "oldPassword",
        "newPassword",
        "newPassword2",
        "verifyCode",
      ];

      const obj = Object.fromEntries(fieldsToClean.map((key) => [key, ""]));

      setFormData((data) => ({
        ...data,
        ...obj,
      }));
    }

    console.log({ clicked: e.target.parentNode.id });

    if (isSubmitButton && button.id === "loginBtn") {
      e.preventDefault();

      const { loginEmail: email, loginPassword: password } = formData;

      if (!email || !password) {
        setErrorMessages((errorMessages) => ({
          ...errorMessages,
          login: "Invalid email or password",
        }));
        return;
      }

      const success = await onLogin({ email, password });
      if (success) {
        redirect(button);
        clearFields();
      }
    }

    if (isSubmitButton && button.id === "signupBtn") {
      e.preventDefault();

      const { signUpEmail: email, signUpPassword: password } = formData;

      if (!email || !password) {
        setErrorMessages((errorMessages) => ({
          ...errorMessages,
          signup: "Invalid email or password",
        }));
        return;
      }

      const success = await onSignup({ email, password });
      if (success) {
        redirect(button);
        clearFields();
      }
    }

    if (isSubmitButton && button.id === "resetBtn2") {
      e.preventDefault();

      const { newPassword, newPassword2 } = formData;

      if (!newPassword || !newPassword2 || newPassword !== newPassword2) {
        setErrorMessages((errorMessages) => ({
          ...errorMessages,
          reset: "Invalid password",
        }));
        return;
      }

      const successReset = await onReset({ password: newPassword });
      if (successReset) {
        redirect(button);
        clearFields();
      }
    }

    if (isSubmitButton && button.id === "recoveryBtn") {
      e.preventDefault();

      const { emailRecovery: email } = formData;

      if (!email) {
        setErrorMessages((errorMessages) => ({
          ...errorMessages,
          signup: "Invalid email",
        }));
        return;
      }

      await onRecovery({ email });
    }

    if (isSubmitButton && button.id === "verifyContinueBtn") {
      e.preventDefault();
    }
  }

  const style = styles[button.id];

  return (
    <div
      id={button.id}
      type={isSubmitButton ? "submit" : "button"}
      className={style.div}
      onClick={handleClick}
    >
      <div className={style.body} />

      <div className="text-wrapper-16" id={button.id}>
        {button.text}
      </div>
    </div>
  );
}
