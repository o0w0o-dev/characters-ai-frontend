import Button from "../components/Button";
import Field from "../components/Field";
import Main from "../components/Main";

export default function ForgotPassword({ menuStatus }) {
  return (
    <Main menuStatus={menuStatus}>
      <Button button={{ type: "recovery", text: "Recovery" }} />
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          type: "emailRecovery",
        }}
      />
    </Main>
  );
}
