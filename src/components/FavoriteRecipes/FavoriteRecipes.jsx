import React from 'react';
import "./FavoriteRecipes.css"
import { useSelector } from 'react-redux';


const FavoriteRecipes = () => {
  const savedRecipes = useSelector((savedDescr) => savedDescr.savedRecipe.recipeDescription);
 
  return (
    <div className='favorites-container'>
      <h1>My Recipes</h1>
      <div className='favorites-wrapper'>
        <div className='box-favorite-container'>
          {savedRecipes.map((e, i) => {
            return (
              <div key={i}>
                <img src={e.image} alt={e.label} />
                <h4>{e.label}</h4>
                <ul>{e.ingredients.map((e, i) => {
                  return (
                    <li key={i}>
                      {e.text} {e.quantity} {e.measure}
                    </li>
                  )
                })}</ul>
                <p>Calories: {e.calories} Kcal</p>
                <p>Meal Type : {e.mealType}</p>
                <button className='edit-button'>Edit</button>
                <button className='delete-button'>Delete</button>
              </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default FavoriteRecipes