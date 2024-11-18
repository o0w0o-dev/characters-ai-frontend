import Button from "../components/Button";
import Field from "../components/Field";

export default function EmailVerification({ onLogin }) {
  return (
    <>
      <Field
        field={{
          title: "Please enter verify code:",
          text: "A1B2C3D4",
          type: "emailVerification",
        }}
      />
      <Button button={{ type: "verifyBack", text: "Back" }} />
      <Button
        button={{ type: "verifyContinue", text: "Continue" }}
        onLogin={onLogin}
      />

      <div className="text-resend">Resend the verify code</div>

      <div className="text-invalid-code">Invalid verify code</div>
    </>
  );
}
