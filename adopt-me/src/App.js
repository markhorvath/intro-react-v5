import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(
  //     "p",
  //     { id: "test-paragraph" },
  //     "This is a test parapgraph"
  //   ),
  //   React.createElement(Pet, {
  //     name: "Zodd",
  //     animal: "Dog",
  //     breed: "Golden Retriever"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Charlie",
  //     animal: "Rabbit",
  //     breed: "whatever"
  //   }),
  //   React.createElement(Pet, { name: "Bear", animal: "Dog", breed: "Mutt" })
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Zodd" animal="Dog" breed="Retriever" />
      <Pet name="Zoe" animal="Dog" breed="Pug" />
      <Pet name="Bo" animal="Cat" breed="Siamese" />

    </div>
  )
};

render(<App />, document.getElementById("root"));
