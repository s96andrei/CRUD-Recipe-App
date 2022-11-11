import React, { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";
import './App.css';

const App = () => {

  const APP_ID = "70e253a4";
  const APP_KEY = "3e1c26d95e61dda9f22cd408cc362449";
  // API request
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("banana") //fetch data after click on submit(finished text)
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    console.log(data);
  }

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
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="displayed-recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))};
      </div>

    </div>

  )
}

export default App;
