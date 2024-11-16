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
  };

  const style = styles[button.type];

  return (
    <button className={style.div}>
      <div className={style.body} />

      <div className="text-wrapper-16">{button.text}</div>
    </button>
  );
}

<button className="button-20">
  <div className="button-21" />

  <div className="home-6">Recovery</div>
</button>;
