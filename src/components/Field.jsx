import { useState } from "react";

// TODO: move style to index.css
export default function Field({ field }) {
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
    emailRecovery: {
      div: "field-email-recovery",
      title: "email-title-text-24",
      text: "email-text-24-block",
    },
    emailVerification: {
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

  const style = styles[field.type];

  const [inputValue, setInputValue] = useState(field.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className={style.div} onClick={() => setIsEditing(true)}>
      <div className={style.title}>{field.title}</div>

      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          placeholder="user@example.com"
          onChange={handleChange}
          onBlur={toggleEdit}
          className={style.text}
          style={{ border: "none", background: "transparent", outline: 0 }}
        />
      ) : (
        <div className={style.text} onClick={toggleEdit}>
          {inputValue}
        </div>
      )}
    </div>
  );
}
