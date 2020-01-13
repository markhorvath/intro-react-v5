import { createContext } from 'react';

//anything can go in createContext (string, object, function, etc)
//the empty function is just a placeholder so that it'l just use this function if there is no provider above it,
//but this should never happen (he said in video)
//everything in the bracket on the line below is the hook, it's got a 'state' (the css string color) and an updater (function) which doesn't do anything in this case
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;