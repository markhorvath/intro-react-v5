import React, { useState } from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  //if you wanted to pass multiple hooks, you'd provide an object instead of just one string ('darkblue' below)
  //e.g. const themeHook = useState({
  //   backgroundColor: 'blue',
  //   color: 'white',
  //   fontSize: 12
  // })
  //then you'd refer to theme.backgroundColor for example, refering to the object keys themselves
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
    {/*Remeber you can use anything for value such as an object with a bunch of key:values*/}
    <ThemeContext.Provider value={themeHook}>
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
    </ThemeContext.Provider>
    </React.StrictMode>
  )
};

render(<App />, document.getElementById("root"));
