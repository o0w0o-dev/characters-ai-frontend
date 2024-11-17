import Button from "../components/Button";
import Field from "../components/Field";

export default function SignUp() {
  return (
    <>
      <div className="login">
        <p className="don-t-have-an-account">Already have an account? Login</p>

        <Button button={{ type: "login", text: "Sign Up" }} />
        <Button
          button={{ type: "loginWithGoogle", text: "Sign Up with Google" }}
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
