import { useNavigate } from "react-router-dom";
import Field from "../components/Field";

// TODO: Fix the button element
export default function Settings() {
  const navigate = useNavigate();
  return (
    <>
      <Field
        field={{
          title: "Email",
          text: "user@example.com",
          id: "emailSettings",
        }}
      />

      <div className="reset-1" onClick={() => navigate("/reset")}>
        <div className="button-verify" />

        <div className="text-wrapper-16">Reset</div>
      </div>

      <div className="text-reset">Password</div>
    </>
  );
}
