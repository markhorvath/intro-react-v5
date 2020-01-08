import React from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <React.StrictMode>
    <div>
      <h1 id="something-important">Adopt Me!</h1>
{/*      <Pet name="Zodd" animal="Dog" breed="Retriever" />
      <Pet name="Zoe" animal="Dog" breed="Pug" />
      <Pet name="Bo" animal="Cat" breed="Siamese" />*/}
      <SearchParams />
    </div>
    </React.StrictMode>
  )
};

render(<App />, document.getElementById("root"));
