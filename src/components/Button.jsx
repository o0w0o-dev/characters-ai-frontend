export default function Button({ button }) {
  const styles = {
    login: {
      div: "button-login",
      body: "button-size-4",
    },
    loginWithGoogle: {
      div: "button-loginWithGoogle",
      body: "button-size-4",
    },
    recovery: {
      div: "button-recovery-1",
      body: "button-recovery-2",
    },
    verifyBack: {
      div: "button-verify-back",
      body: "button-verify",
    },
    verifyContinue: {
      div: "button-verify-continue",
      body: "button-verify",
    },
    reset: {
      div: "reset-1",
      body: "button-verify",
    },
  };

  const style = styles[button.type];

  return (
    <button className={style.div}>
      <div className={style.body} />

      <div className="text-wrapper-16">{button.text}</div>
    </button>
  );
}
