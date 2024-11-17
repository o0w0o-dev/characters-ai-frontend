import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Field from "../components/Field";

export default function Login({ onLogin }) {
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
        <p className="don-t-have-an-account">
          Don't have an account yet? Sign Up
        </p>

        <Button button={{ type: "login", text: "Login" }} onLogin={onLogin} />
        <Button
          button={{ type: "loginWithGoogle", text: "Login with Google" }}
        />

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
