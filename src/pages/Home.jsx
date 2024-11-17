import CircleButton from "../components/CircleButton";

export default function Home() {
  return (
    <>
      <img className="home-image" src="../assets/image.png" alt="Image" />
      <div className="text-64">Backend</div>
      <div className="text-32">Hello Message from backend</div>
      <CircleButton direction={"left"}>&lt;</CircleButton>
      <CircleButton direction={"right"}>&gt;</CircleButton>
    </>
  );
}
