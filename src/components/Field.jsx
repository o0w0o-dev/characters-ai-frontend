import { useState } from "react";
import { useMyContext } from "./Context";

// TODO: move style to index.css
export default function Field({ field }) {
  const { user, formData, setFormData } = useMyContext();

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
    characterName: {
      div: "field-character-name",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    characterModel: {
      div: "field-character-model",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    instructions: {
      div: "field-instructions",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
  };

  const emailFields = [
    "loginEmail",
    "signUpEmail",
    "emailRecovery",
    "emailSettings",
    "emailReset",
  ];

  const style = styles[field.id];
  const notEditableIDs = ["emailReset", "emailSettings"];
  const isEmail = emailFields.includes(field.id);
  const isPassword = field.id.toLowerCase().includes("password");
  const isEditable = !notEditableIDs.includes(field.id);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    // keep email fields in sync
    if (isEmail) {
      const email = user?.email || e.target.value;
      const obj = Object.fromEntries(emailFields.map((key) => [key, email]));

      setFormData((data) => ({
        ...data,
        ...obj,
      }));
    }

    setFormData((data) => ({
      ...data,
      [field.id]: e.target.value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={style.div}
      style={field.id === "oldPassword" ? { display: "none" } : {}}
      onClick={() => setIsEditing(true)}
    >
      <div className={style.title}>{field.title}</div>

      {isEditing && isEditable ? (
        <input
          id={field.id}
          type={isPassword ? "password" : "text"}
          value={isEmail ? user?.email : formData?.[field.id] || ""}
          placeholder={field.text}
          autoFocus
          onChange={handleChange}
          className={style.text}
          style={{ border: "none", background: "transparent", outline: 0 }}
        />
      ) : (
        <div className={style.text} onClick={toggleEdit}>
          {isPassword
            ? "●".repeat(formData?.[field.id]?.length || 0)
            : isEmail
            ? user?.email
            : formData?.[field.id] || ""}
        </div>
      )}
    </div>
  );
}
