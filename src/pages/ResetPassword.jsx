import { useNavigate } from "react-router-dom";
import { useMyContext } from "../components/Context";
import Field from "../components/Field";

// TODO: Fix the button element, hardcoded navigate path
export default function ResetPassword() {
  const navigate = useNavigate();
  const { onLogout } = useMyContext();

  function onClick() {
    onLogout();
    navigate("/");
  }
  return (
    <>
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          type: "emailReset",
        }}
      />

      <div className="reset-2" onClick={onClick}>
        <div className="button-verify" />

        <div className="text-wrapper-16">Reset</div>
      </div>
      <Field
        field={{
          title: "Old password",
          text: "●●●●●●●●",
          type: "oldPassword",
        }}
      />
      <Field
        field={{
          title: "New password",
          text: "●●●●●●●●",
          type: "newPassword",
        }}
      />
      <Field
        field={{
          title: "Re-enter new password",
          text: "●●●●●●●●",
          type: "newPassword2",
        }}
      />
    </>
  );
}
