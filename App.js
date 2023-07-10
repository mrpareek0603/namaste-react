{
  /* <div id="parent">
    <div id = "child">
        <h1>h1111 im inside child</h1>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h111 im inside child"),
    React.createElement("h2", {}, "h2 im also inside child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h111 im inside child"),
    React.createElement("h2", {}, "h2 im also inside child"),
  ]),
]);

// const heading = React.createElement("h1", { id: "h" }, "hi from ro");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(heading, typeof heading);
