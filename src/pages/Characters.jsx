import Button from "../components/Button";
import CharacterItem from "../components/CharacterItem";

export default function Characters() {
  return (
    <>
      <Button button={{ id: "addItem", text: "+" }} />
      <Button button={{ id: "pervious", text: "<" }} />
      <Button button={{ id: "next", text: ">" }} />
      <CharacterItem item={{ id: "item0" }} />
      <CharacterItem item={{ id: "item1" }} />
      <CharacterItem item={{ id: "item2" }} />
    </>
  );
}
