import React from 'react';
// this will pretty print any object passed to it (such as props) to the DOM, good for debugging.  can also use devtools
// const Details = props => {
//     return (
//         <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
//         );
// }

const Details = props => {
    return (
        <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
        );
}

export default Details;