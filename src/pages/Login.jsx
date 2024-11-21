import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Field from "../components/Field";
import { useMyContext } from "../components/Context";

export default function Login() {
  const navigate = useNavigate();
  const { errorMessages } = useMyContext();

  return (
    <>
      <form className="login">
        <div
          className="recovery-password-url"
          onClick={() => navigate("/forgot")}
        >
          recovery password
        </div>
        <p
          className="don-t-have-an-account"
          onClick={() => navigate("/signup")}
        >
          Don't have an account yet? Sign Up
        </p>

        <Button button={{ id: "loginBtn", text: "Login" }} />
        <Button
          button={{ id: "continueWithGoogle", text: "Login with Google" }}
        />

        <Field
          field={{
            title: "Password",
            text: "●●●●●●●●",
            id: "loginPassword",
          }}
        />
        <Field
          field={{
            title: "Email",
            text: "user@example.com",
            id: "loginEmail",
          }}
        />

        <div className="login-fail-message">{errorMessages?.login}</div>
      </form>
    </>
  );
}
