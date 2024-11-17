export default function CircleButton({ children, direction }) {
  return (
    <div className={`circle-button ${direction}`}>
      <div className="div-5">{children}</div>
    </div>
  );
}
