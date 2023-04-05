import React from 'react';
import "./FavoriteRecipes.css"
import { useSelector } from 'react-redux';


const FavoriteRecipes = () => {
  const recipeBook = useSelector((myRecipes) => myRecipes.favoriteRecipes)
  console.log("book test", recipeBook)


  return (

    <div>
      {/* {recipeBook.FavoriteRecipes.map((e, i) => {
        return (
          <div key ={i}>

          </div>
        )
      })} */}
      <div className='favorites-container'>
        <h1>Favorite Recipes</h1>
        <div className='box-favorite-container'>
          <h4>Title</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className='edit-button'>Edit</button>
          <button className='delete-button'>Delete</button>
        </div>
        </div>
    </div>
    
  )
}

export default FavoriteRecipes