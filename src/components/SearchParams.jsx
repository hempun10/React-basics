import React, { useState, useEffect } from 'react';
import useSetBread from './useSetBread';
import Results from './Result';
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./FetchSearch";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });
    const [animal, setAnimal] = useState('')
    const [breads] = useSetBread(animal)


    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <>
            <div className='search-params'>
                <form onSubmit={e => {
                    e.preventDefault()
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };
                    setRequestParams(obj);
                }}>
                    <label htmlFor='location'>
                        location
                        <input id='location' name='location' placeholder='location' ></input>
                    </label>
                    <label htmlFor='animal'>
                        Animal
                        <select id='animal' onChange={e => {
                            setAnimal(e.target.value)
                        }}>
                            {ANIMALS.map((animal) => <option key={animal}>{animal}</option>)}
                        </select>
                    </label>
                    <label htmlFor='bread'>
                        Bread
                        <select id='bread' name='breed' disabled={breads.length === 0} >
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
