import Component from "./ComponentX";
import { withBorder } from "./withBorder";

const RedComponent = withBorder(Component, { borderColor: "pink" });
const BlueComponent = withBorder(Component, { borderColor: "blue" });
const GreenComponent = withBorder(Component, { borderColor: "green" });

export { RedComponent, BlueComponent, GreenComponent };
