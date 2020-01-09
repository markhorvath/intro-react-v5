import React from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <React.StrictMode>
    <div>
      <header>
        <Link to="/">
          Adopt Me!
        </Link>
      </header>
{/*      <Pet name="Zodd" animal="Dog" breed="Retriever" />
      <Pet name="Zoe" animal="Dog" breed="Pug" />
      <Pet name="Bo" animal="Cat" breed="Siamese" />*/}
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
    </React.StrictMode>
  )
};

render(<App />, document.getElementById("root"));
