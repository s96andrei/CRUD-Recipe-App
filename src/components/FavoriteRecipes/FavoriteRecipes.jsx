import React from 'react';
import "./FavoriteRecipes.css"

const FavoriteRecipes = () => {

  return (
    <div className='favorites-container'>
        <h1>Favorite Recipes</h1>
        <div className='box-favorite-container'>
          <h4>Title</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className='edit-button'>Edit</button>
          <button className='delete-button'>Delete</button>
        </div>
        </div>
  )
}

export default FavoriteRecipes