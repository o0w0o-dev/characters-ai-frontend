import Button from "../components/Button";
import Field from "../components/Field";

export default function EmailVerification() {
  return (
    <>
      <Field
        field={{
          title: "Please enter verify code:",
          text: "A1B2C3D4",
          type: "emailVerification",
        }}
      />
      <Button button={{ id: "verifyBack", text: "Back" }} />
      <Button button={{ id: "verifyContinue", text: "Continue" }} />

      <div className="text-resend">Resend the verify code</div>

      <div className="text-invalid-code">Invalid verify code</div>
    </>
  );
}
