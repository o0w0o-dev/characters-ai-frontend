import { useNavigate } from "react-router-dom";
import { useMyContext } from "../components/Context";
import Field from "../components/Field";

// TODO: Fix the button element, hardcoded navigate path
export default function ResetPassword() {
  const navigate = useNavigate();
  const { onLogout } = useMyContext();

  function handleOnClick() {
    onLogout();
    navigate("/");
  }
  return (
    <>
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          id: "emailReset",
        }}
      />

      <div className="reset-2" onClick={handleOnClick}>
        <div className="button-verify" />

        <div className="text-wrapper-16">Reset</div>
      </div>
      <Field
        field={{
          title: "Old password",
          text: "●●●●●●●●",
          id: "oldPassword",
        }}
      />
      <Field
        field={{
          title: "New password",
          text: "●●●●●●●●",
          id: "newPassword",
        }}
      />
      <Field
        field={{
          title: "Re-enter new password",
          text: "●●●●●●●●",
          id: "newPassword2",
        }}
      />
    </>
  );
}
