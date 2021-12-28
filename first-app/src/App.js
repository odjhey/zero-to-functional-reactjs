import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";
import Counter from "./components/Counter";
import {
  BlueComponent,
  GreenComponent,
  RedComponent,
} from "./components/Components";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <Layout header={<h1>hello</h1>} footer={<h4>copyright</h4>}>
      <Pokemon></Pokemon>
    </Layout>
  );
}

/*
function App() {
  return (
    <div>
      <div style={{ border: "dashed 5px red" }}>
        <Header />
      </div>
      <div>
        <Nav />
      </div>
      <Body />
      <div style={{ background: "#ccc" }}>
        <Footer />
      </div>
    </div>
  );
}

function NextPage() {
  return (
    <div>
      <div style={{ border: "solid 5px lavender" }}>
        <Header />
      </div>
      <div>
        <Nav />
      </div>
      <Body />
      <div style={{ background: "#ccc" }}>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return <h1>header</h1>;
}
function Body() {
  return <p>lorem ipsum</p>;
}
function Nav() {
  return <p>home about</p>;
}
function Footer() {
  return <h5>footere</h5>;
}
*/

export default App;

/*
 * renderProps
 * slots
 * Layouts
 */
