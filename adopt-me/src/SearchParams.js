import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from '/useDropdown';
import ThemeContext from './ThemeContext';


const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown, setAnimal] = useDropdown("Animal", "dog", ANIMALS); //added setAnimal just to see if it broke anything
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);
    // the below comes with a 'setTheme' but we're not gonna use it so not grabbing it
    const [theme] = useContext(ThemeContext);

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || []);

    }

    useEffect(() => {
        setBreeds([]);
        setBreed('');

        pet.breeds(animal).then(({ breeds: apiBreeds }) => {
            const breedStrings = apiBreeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);
    }, [animal, setBreeds, setBreed]); //this last part [animal, setBreeds, setBreed] is just a list of dependencies for when useEffect runs (required by eslint)

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location"
                    onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                {/*2 curly braces around color theme because the outer one signifies it's a JS expression and the inner is for the object itself*/}
                <button style={{ backgroundColor:theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
};

export default SearchParams;