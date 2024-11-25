export default function CharacterItem({ item }) {
  const styles = {
    item0: {
      div: "character-item-0",
      image: "",
    },
    item1: {
      div: "character-item-1",
      image: "",
    },
    item2: {
      div: "character-item-2",
      image: "",
    },
  };

  const avatarStyle = {
    backgroundImage: `url(${styles[item.id].image})`,
    height: "459px",
    left: 0,
    position: "absolute",
    top: 0,
    width: "459px",
    backgroundSize: "cover",
  };

  const style = styles[item.id];

  return (
    <div className={`character-item-background ${style.div}`}>
      <div className={`avatar-background avatar`} style={avatarStyle} />
      <p className="character-detail-text">
        Name: characterName
        <br />
        <br />
        Instructions: I want you act as a teacher and very very very very very
        very very very very very very very very very very very very very very
        very very very very very very very very very very very long text.
      </p>
    </div>
  );
}
