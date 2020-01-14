import React from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import { Link } from '@reach/router';
import Modal from './Modal';
// this will pretty print any object passed to it (such as props) to the DOM, good for debugging.  can also use devtools
// const Details = props => {
//     return (
//         <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
//         );
// }

class Details extends React.Component {
    state = { loading: true, showModal: false };

    componentDidMount() {
        // throw new Error("lol");
        pet.animal(this.props.id)
            .then(({ animal }) => {
                this.setState({
                    url: animal.url,
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
                })
            }, console.error);
    };
    //this just sets the showModal in state to the opposite of what it currently is
    toggleModal = () => this.setState({ showModal: !this.state.showModal });
    // navigate to this.state.url (the url to adopt the animal from the api), could also use the Redirect component
    adopt = () => navigate(this.state.url);

    render () {
        if (this.state.loading) {
            return <h1>loading...</h1>
        }

        const { animal, breed, location, description, name, media, showModal } =
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
                            <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>

                    <p>{description}</p>
                    {/*ternary to decide whether to show the modal*/}
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                  <h1>Would you like to adopt { name }?</h1>
                                  <div className="buttons">
                                    <button onClick={this.adopt}>Yes</button>
                                    <button onClick={this.toggleModal}>No</button>
                                  </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
                <Link to='/'>
                <button>Go Back</button>
                </Link>
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