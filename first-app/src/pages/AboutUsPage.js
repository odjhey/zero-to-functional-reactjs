import React from "react";

const AboutUsPage = () => {
  return (
    <div style={{ padding: "10px" }}>
      <h1>About Us</h1>
      <h2>Subtitle</h2>
      <hr></hr>

      <Component1 firstName="jane"></Component1>
    </div>
  );
};

/*
 * 1st: if props changes, rerender
 * 2nd: if state changes, rerender
 */
const Component1 = (props) => {
  // const useLessVarState = React.useState(30);
  const [useLessVar, setUseLessVar] = React.useState(30);
  const [stateVal1, setStateVal1] = React.useState(10);

  React.useEffect(
    function () {
      setStateVal1(useLessVar + 10);
    },
    [useLessVar]
  );

  return (
    <div style={{ border: "solid 1px green" }}>
      <h3>content</h3>
      <p>{props.firstName}</p>
      <p>{useLessVar}</p>
      <p>{stateVal1}</p>
      <Comp3 value={useLessVar}></Comp3>
      <Comp3 value={10}></Comp3>
      <button
        onClick={() => {
          console.log("add 10");
          setUseLessVar(10);
        }}
      >
        set 10
      </button>
      <button
        onClick={() => {
          console.log("add 10");
          // setUseLessVar(useLessVar + 10);
          // setUseLessVar(prev => prev + 10);

          setUseLessVar(function (prev) {
            return prev + 10;
          });
        }}
      >
        add 10
      </button>
    </div>
  );
};

const Comp3 = (props) => {
  return <h4>ako si comp3 {props.value}</h4>;
};

export default AboutUsPage;
