import React from 'react';
import "./RecipeDescription.css";
import { useSelector } from 'react-redux';
import { recipeActions } from '../../store/open-description';

const RecipeDescription = () => {

  const recipe = useSelector((recipe) => recipe.recipe)
  console.log("test", recipe);

  return (
    <div>
      <div>
        Title
      </div>
      <button>Add to My Recipe</button>
    </div>
  )
}

export default RecipeDescription