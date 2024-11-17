import Button from "../components/Button";
import Field from "../components/Field";
import Main from "../components/Main";

export default function EmailVerification({ menuStatus }) {
  return (
    <Main menuStatus={menuStatus}>
      <Field
        field={{
          title: "Please enter verify code:",
          text: "A1B2C3D4",
          type: "emailVerification",
        }}
      />
      <Button button={{ type: "verifyBack", text: "Back" }} />
      <Button button={{ type: "verifyContinue", text: "Continue" }} />

      <div className="text-resend">Resend the verify code</div>

      <div className="text-invalid-code">Invalid verify code</div>
    </Main>
  );
}