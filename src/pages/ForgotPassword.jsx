import Button from "../components/Button";
import Field from "../components/Field";

export default function ForgotPassword() {
  return (
    <>
      <Button button={{ id: "recoveryBtn", text: "Recovery" }} />
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          id: "emailRecovery",
        }}
      />
    </>
  );
}
