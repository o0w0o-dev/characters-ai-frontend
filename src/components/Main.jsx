import Menu from "./Menu";
import Field from "./Field";

export default function Main({ menuStatus }) {
  return (
    <div className="main">
      <div className="main-wrapper-2">
        <div className="main-wrapper-3">
          <div className="div-3">
            <div className="div-4" />

            <Menu menuStatus={menuStatus} />
          </div>
        </div>
        <div className="login">
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
  );
}
