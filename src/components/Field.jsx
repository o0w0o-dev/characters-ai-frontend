import { useState } from "react";
import { useMyContext } from "./Context";

// TODO: move style to index.css
export default function Field({ field }) {
  const { formData, setFormData } = useMyContext();

  const styles = {
    loginEmail: {
      div: "field-email",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    loginPassword: {
      div: "field-password",
      title: "password-title-text-24",
      text: "password-text-24-block",
    },
    signUpEmail: {
      div: "field-email",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    signUpPassword: {
      div: "field-password",
      title: "password-title-text-24",
      text: "password-text-24-block",
    },
    emailRecovery: {
      div: "field-email-recovery",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    verifyCode: {
      div: "field-email-verification",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    emailSettings: {
      div: "field-email-recovery",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    emailReset: {
      div: "field-email-verification",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    oldPassword: {
      div: "old-password",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    newPassword: {
      div: "new-password",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    newPassword2: {
      div: "new-password-2",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
  };

  const style = styles[field.id];
  const notEditableIDs = ["emailReset", "emailSettings"];
  const isPassword = field.id.toLowerCase().includes("password");
  const isEditable = !notEditableIDs.includes(field.id);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData((data) => ({ ...data, [field.id]: e.target.value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className={style.div} onClick={() => setIsEditing(true)}>
      <div className={style.title}>{field.title}</div>

      {isEditing && isEditable ? (
        <input
          id={field.id}
          type={isPassword ? "password" : "text"}
          value={formData?.[field.id] || ""}
          placeholder={field.text}
          onChange={handleChange}
          // onBlur={toggleEdit}
          className={style.text}
          style={{ border: "none", background: "transparent", outline: 0 }}
        />
      ) : (
        <div className={style.text} onClick={toggleEdit}>
          {isPassword
            ? "●".repeat(formData?.[field.id]?.length || 0)
            : formData?.[field.id] || ""}
        </div>
      )}
    </div>
  );
}
