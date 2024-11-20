import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Field from "../components/Field";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <p className="don-t-have-an-account" onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>

        <Button button={{ id: "signupBtn", text: "Sign Up" }} />
        <Button
          button={{ id: "continueWithGoogle", text: "Sign Up with Google" }}
        />

        <Field
          field={{
            title: "Password",
            text: "●●●●●●●●",
            id: "signUpPassword",
          }}
        />
        <Field
          field={{
            title: "Email",
            text: "user@example.com",
            id: "signUpEmail",
          }}
        />
      </div>
    </>
  );
}
