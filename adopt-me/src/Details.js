import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
// this will pretty print any object passed to it (such as props) to the DOM, good for debugging.  can also use devtools
// const Details = props => {
//     return (
//         <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
//         );
// }

class Details extends React.Component {
    state = { loading: true };

    componentDidMount() {
        // throw new Error("lol");
        pet.animal(this.props.id)
            .then(({ animal }) => {
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
                })
            }, console.error);
    }

    render () {
        if (this.state.loading) {
            return <h1>loading...</h1>
        }

        const { animal, breed, location, description, name, media } =
        this.state;

        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    {/*we use themeHook[0] for the background color because the hook by default provides both the 'theme' and 'setTheme' as an array*/}
                    {/*originally the parameter was (themeHook) and the backgroundColor was set to themeHook[0], but we changed it to just [theme]
                    in the parameter and 'theme' in the in-line style to destructure it*/}
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>

                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
};