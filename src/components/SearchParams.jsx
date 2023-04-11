import React, { useState, useEffect } from 'react';
import useSetBread from './useSetBread';
import Results from './Result';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    const [bread, setBread] = useState('')
    const [pets, setPets] = useState([])
    const [breads] = useSetBread(animal)


    useEffect(() => {
        requestPets()
    }, [])

    const requestPets = async () => {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${bread}`)
        const json = await res.json()
        setPets(json.pets)

    }
    return (
        <>
            <div className='search-params'>
                <form onSubmit={e => {
                    e.preventDefault()
                    requestPets()
                }}>
                    <label htmlFor='location'>
                        location
                        <input id='location' value={location} placeholder='location' onChange={(e) => setLocation(e.target.value)}></input>
                    </label>
                    <label htmlFor='animal'>
                        Animal
                        <select id='animal' onChange={e => {
                            setAnimal(e.target.value)
                            setBread('')
                        }}>
                            {ANIMALS.map((animal) => <option key={animal}>{animal}</option>)}
                        </select>
                    </label>
                    <label htmlFor='bread'>
                        Bread
                        <select id='bread' disabled={breads.length === 0} onChange={e => setBread(e.target.value)}>
                            {breads.map((bread) => <option key={bread}>{bread}</option>)}
                        </select>
                    </label>

                    <button>Submit</button>
                </form>
                <Results pets={pets} />
            </div>
        </>
    );

}

export default SearchParams;
