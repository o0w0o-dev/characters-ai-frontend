import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Field from "../components/Field";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
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

        <Button button={{ id: "login", text: "Login" }} />
        <Button button={{ id: "loginWithGoogle", text: "Login with Google" }} />

        <Field
          field={{
            title: "Password",
            text: "●●●●●●●●",
            type: "loginPassword",
          }}
        />
        <Field
          field={{
            title: "Email",
            text: "user@example.com",
            type: "loginEmail",
          }}
        />
      </div>
    </>
  );
}
