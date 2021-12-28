export default function Component({ borderColor, children }) {
  return (
    <div
      style={{ borderWidth: 1, borderStyle: "solid", borderColor: borderColor }}
    >
      <p>alsdfkj</p>
      {children}
    </div>
  );
}
