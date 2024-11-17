import Field from "../components/Field";
import Main from "../components/Main";

export default function ResetPassword({ menuStatus }) {
  // TODO: Fix the button element
  return (
    <Main menuStatus={menuStatus}>
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
    </Main>
  );
}
