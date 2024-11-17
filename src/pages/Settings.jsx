import Field from "../components/Field";

export default function Settings() {
  // TODO: Fix the button element
  return (
    <>
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
    </>
  );
}
