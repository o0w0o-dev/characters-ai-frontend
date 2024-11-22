import { useMyContext } from "../components/Context";
import Button from "../components/Button";
import Field from "../components/Field";

export default function ForgotPassword() {
  const { errorMessages } = useMyContext();
  return (
    <form>
      <Button button={{ id: "recoveryBtn", text: "Recovery" }} />
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          id: "emailRecovery",
        }}
      />
      <div
        className="recovery-message"
        style={
          errorMessages?.recovery === "Check your mail box."
            ? { color: "#F3BFE3" }
            : {}
        }
      >
        {errorMessages?.recovery}
      </div>
    </form>
  );
}
