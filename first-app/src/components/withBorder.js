function withBorder(Component, { borderColor }) {
  return (props) => (
    <div style={{ background: borderColor }}>
      <Component {...props}></Component>
    </div>
  );
}

export { withBorder };
