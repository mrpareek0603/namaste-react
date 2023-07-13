import React from "react";
import ReactDOM from "react-dom/client";

const Title = function() {
    return <h1>JSX heading</h1>
};

// Functional Component
// A javascript function which returns a react element or JSX
const Heading = () => (
  // return (
  <div>
    <Title />
    <h1>I am a functional component</h1>
  </div>
  // );
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
root.render(<Title />);