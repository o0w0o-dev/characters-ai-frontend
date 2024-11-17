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
  };

  const style = styles[field.type];
  return (
    <div className={style.div}>
      <div className={style.text}>{field.text}</div>
      <div className={style.title}>{field.title}</div>
    </div>
  );
}
