import React from 'react';
import "./RecipeDescription.css";
import { useSelector } from 'react-redux';
import { favoriteRecipeActions} from '../../store/favorite-slice';
import { useDispatch } from 'react-redux';

const RecipeDescription = () => {
  const dispatch = useDispatch();
  const singularRecipe = useSelector((recipeDescr) => recipeDescr.recipe)
  console.log("test add to my book", singularRecipe);

  const clickHandler = ({label, image, mealType, ingredients, id, calories}) => {
    dispatch(favoriteRecipeActions.setMyRecipeBook({
      label: label,
      image: image,
      mealType: mealType,
      ingredients: ingredients,
      id: id,
      calories: calories
    }))
  }



  return (
    <div>
      {singularRecipe.recipe.length > 0 ?
        <div>
          {singularRecipe.recipe.map((e, i) => {
            return (
              <div key={i}>
                <h4>{e.label}</h4>
                <img src={e.image} alt={e.label} />
                <div>
                  <h5>Ingredients:</h5>
                  <ul>
                    {e.ingredients.map((e, i) => {
                      return (
                        <li key={i}>
                          {e.text} {e.quantity} {e.measure}
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <p>Meal Type : {e.mealType}</p>
                <p>Calories :{e.calories} Kcal</p>
                <button className="description-button" onClick={() => clickHandler({label: e.label, image: e.image, mealType: e.mealType, ingredients: e.ingredients, calories: e.calories})}>Add to My Recipes</button>
              </div>
            )
          })}
        </div>
        :
        <div>
          <h2>Add your recipe here</h2>
          <h6>Welcome to our recipe app, your one-stop destination for all your culinary needs!
            With our user-friendly interface, you can easily search for recipes, save your favorite ones and create your own culinary book based on your chosen recipes.
          </h6>
        </div>

      }
    </div>
  )
}

export default RecipeDescription