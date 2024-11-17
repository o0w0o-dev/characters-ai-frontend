import Main from "../components/Main";
import Field from "../components/Field";
import Button from "../components/Button";

export default function Settings({ menuStatus }) {
  // TODO: Fix the button element
  return (
    <Main menuStatus={menuStatus}>
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          type: "emailSettings",
        }}
      />

      <div className="reset-1">
        <div className="button-verify" />

        <div className="text-wrapper-16">Reset</div>
      </div>

      <div className="text-reset">Password</div>
    </Main>
  );
}
