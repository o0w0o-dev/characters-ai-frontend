import { useMyContext } from "../components/Context";
import Button from "../components/Button";
import Field from "../components/Field";

export default function ResetPassword() {
  const { errorMessages } = useMyContext();

  return (
    <form>
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          id: "emailReset",
        }}
      />
      <Button button={{ id: "resetBtn2", text: "Reset" }} />
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

      <div className="reset-fail-message">
        {errorMessages?.login || errorMessages?.reset}
      </div>
    </form>
  );
}
