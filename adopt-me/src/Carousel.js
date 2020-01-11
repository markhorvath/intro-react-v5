import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    }

    static getDerivedStateFromProps({ media }) {
        let photos = ['https://placecorgi.com/600/600'];

        if (media.length) {
            photos = media.map(({ large }) => large);
        };

        return { photos };
    };

    //whenever you are passing functions down into children, or doing event listeners, use an arrow function because it guarantes that 'this' is correct
    handleIndexClick = event => {
        this.setState({
            //the '+' is a unary plus will turn a string to a number (because dataset is from the DOM and all from the DOM is a string)
            active: +event.target.dataset.index
        });
    };

    render() {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                {/*in production don't put the eventlistener onClick on the img*/}
                    {photos.map((photo, index) => (
                        <img
                            key={photo}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal-thumbnail"
                        />
                        ))}
                </div>
            </div>)
    }
};

export default Carousel;