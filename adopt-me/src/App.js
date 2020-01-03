const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(
      "p",
      { id: "test-paragraph" },
      "This is a test parapgraph"
    ),
    React.createElement(Pet, {
      name: "Zodd",
      animal: "Dog",
      breed: "Golden Retriever"
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Rabbit",
      breed: "whatever"
    }),
    React.createElement(Pet, { name: "Bear", animal: "Dog", breed: "Mutt" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
