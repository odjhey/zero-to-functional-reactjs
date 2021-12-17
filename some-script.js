// use css selector i.e. #inject_here
const domContainer = document.querySelector("#inject_here");

// create component -- with some state
const SomeButton = () => {
  // useState <- will have its own explanation in the next parts of the series
  const [state, setState] = React.useState({ liked: false });

  if (state.liked) {
    return "Yay! Thanks you!";
  }

  return (
    <button onClick={() => setState({ liked: true })}>
      Like me please. (JSX) + function component
    </button>
  );
};

const SideBySideLayout = () => {
  return (
    <div>
      <SomeButton></SomeButton>
      <SomeButton></SomeButton>
    </div>
  );
};

// render ze element
ReactDOM.render(React.createElement(SideBySideLayout), domContainer);
