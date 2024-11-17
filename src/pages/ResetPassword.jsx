import Field from "../components/Field";

export default function ResetPassword() {
  // TODO: Fix the button element
  return (
    <>
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          type: "emailReset",
        }}
      />

      <div className="reset-2">
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
