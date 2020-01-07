import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '/useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown, setAnimal] = useDropdown("Animal", "dog", ANIMALS); //added setAnimal just to see if it broke anything
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    useEffect(() => {
        setBreeds([]);
        setBreed('');

        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);
    }, [animal, setBreeds, setBreed]); //this last part [animal, setBreeds, setBreed] is just a list of dependencies for when useEffect runs (required by eslint)

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location"
                    onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;