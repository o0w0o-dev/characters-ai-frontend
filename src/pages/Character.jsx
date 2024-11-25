import Button from "../components/Button";
import Field from "../components/Field";

export default function Character() {
  const image = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg";
  const avatarStyle = {
    backgroundImage: `url(${image})`,
    borderRadius: "15px",
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    height: "281px",
    width: "379px",
    left: "869px",
    position: "absolute",
    top: "74px",
  };

  return (
    <>
      <Button button={{ id: "characterCreate", text: "Create" }} />
      <Button button={{ id: "chat", text: "Chat" }} />
      <Button button={{ id: "delete", text: "Delete" }} />
      <Field
        field={{
          title: "Name",
          text: "characterName",
          id: "characterName",
        }}
      />
      <Field
        field={{
          title: "Model",
          text: "characterModel",
          id: "characterModel",
        }}
      />
      <Field
        field={{
          title: "Instructions",
          text: "I want you act as a teacher.",
          id: "instructions",
        }}
      />
      <div className="character-avatar-bg"></div>
      <div style={avatarStyle}></div>
    </>
  );
}
