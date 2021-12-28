import React from "react";

const Layout = ({ header, children, footer }) => {
  return (
    <div>
      <div style={{ border: "dashed 1px red" }}>{header}</div>
      {children}
      {footer}
    </div>
  );
};

const Layout2 = ({ header, children, footer }) => {
  return (
    <div>
      <div style={{ border: "dashed 5px green" }}>{header}</div>
      {children}
      {footer}
    </div>
  );
};

export default Layout;
