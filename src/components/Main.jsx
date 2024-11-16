import Menu from "./Menu";
import Field from "./Field";
import Button from "./Button";

export default function Main({ menuStatus }) {
  return (
    <div className="main">
      <div className="main-wrapper-2">
        <div className="main-wrapper-3">
          <div className="div-3">
            <div className="div-4" />

            <Menu menuStatus={menuStatus} />
          </div>
          <div className="login">
            <div className="recovery-password-url">recovery password</div>
            <p className="don-t-have-an-account">
              Don't have an account yet? Sign Up
            </p>

            <Button button={{ type: "login", text: "Login" }} />
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
        </div>
      </div>
    </div>
  );
}
