import React, { useEffect, useState } from 'react';
import "./Recipes.css"
import RecipeDescription from '../RecipeDescription/RecipeDescription';
import { useDispatch } from 'react-redux';
import { recipeActions } from '../../store/open-description';
import { v4 as uuidv4 } from "uuid";

const Recipes = () => {

    const dispatch = useDispatch();

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

    const handleRecipe = ({label, image, mealType, ingredients}) => {
        console.log("title test", label)
        dispatch(recipeActions.setShowDescription({

            label: label,
            image: image,
            mealType: mealType,
            ingredients: ingredients,
            id: uuidv4()
        }))

    }

    dispatch(recipeActions.setShowDescription)

    return (
        <div>
            <div className='title-wrapper'>
                <h1>Search your recipe</h1>
                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                    <button className="search-button" type="submit">search</button>
                </form>
            </div>

            <div className='recipes-wrapper'>
                <div className='recipes-container'>
                    {data.map((e, i) => {
                        return (
                            <div key={i}>
                                <div className='box-container' onClick={() => handleRecipe({label: e.recipe.label, image: e.recipe.image, mealType: e.recipe.mealType, ingredients: e.recipe.ingredients})}>
                                    <h4>{e.recipe.label}</h4>
                                    <img className='box-image' src={e.recipe.image} alt="" />
                                </div>
                            </div>

                        )
                    })}
                </div>
                <RecipeDescription />
            </div>
        </div>

    )
}

export default Recipes