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
  };

  const style = styles[button.type];

  return (
    <button className={style.div}>
      <div className={style.body} />

      <div className="text-wrapper-16">{button.text}</div>
    </button>
  );
}
