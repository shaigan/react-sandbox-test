import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Test() {
  return (
    <div>
      <h3>test</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Test />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
