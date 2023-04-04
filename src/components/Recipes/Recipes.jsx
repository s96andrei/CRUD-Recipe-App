import React, { useEffect, useState } from 'react';
import "./Recipes.css"
import RecipeDescription from '../RecipeDescription/RecipeDescription';

const Recipes = () => {
    const APP_ID = "70e253a4";
    const APP_KEY = "3e1c26d95e61dda9f22cd408cc362449";
    // API request
    const [data, setData] = useState([]);
    const [query, setQuery] = useState(""); //fetch data after click on submit(finished text)
    const [search, setSearch] = useState("");

    useEffect(() => {
        dataFetch();
    }, [query]);

    const dataFetch = async () => {
        const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
        const response = await data.json();
        setData(response.hits);
        console.log(response.hits);
    };



    const updateSearch = e => {
        setSearch(e.target.value);
    }

    //stop page refresh before finished word
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }


    return (
        <div className='recipes-wrapper'>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">search</button>
            </form>
            <div className='recipes-container'>
                {data.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className='box-container'>
                                <h4>{e.recipe.label}</h4>
                                <img className='box-image' src={e.recipe.image} alt="" />
                            </div>
                        </div>

                    )
                })}
            </div>
            <RecipeDescription />
        </div>
    )
}

export default Recipes