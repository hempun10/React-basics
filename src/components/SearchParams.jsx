import React, { useState } from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')

    return (
        <>
            <div className='search-params'>
                <form>
                    <label htmlFor='location' onChange={e => setLocation(e.target.value)}>
                        location
                        <input id='location' value={location} placeholder='location'></input>
                    </label>
                    <label htmlFor='animal'>
                        Animal
                        <select id='animal' value={animal} onChange={e => setAnimal(e.target.value)}>
                            {ANIMALS.map((animal) => <option key={animal}>{animal}</option>)}
                        </select>
                    </label>

                    <button>Submit</button>
                </form>
            </div>
        </>
    );

}

export default SearchParams;
