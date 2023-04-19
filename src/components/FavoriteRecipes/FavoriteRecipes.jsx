import React from 'react';
import "./FavoriteRecipes.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { recipeSavedActions } from '../../store/saved-description';


const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const savedRecipes = useSelector((savedDescr) => savedDescr.savedRecipe.recipeDescription);
  const handleDelete = (id) => {
    dispatch(recipeSavedActions.removeSavedRecipeDescription(id));
  }
  console.log(savedRecipes);

  // const [showRecipes, setShowRecipes] = useState(savedRecipes)

  // useEffect(() => {
  //   localStorage.setItem('dataKey', JSON.stringify(showRecipes));
  // }, [showRecipes]);


  // useEffect(() => {
  //   const savedRecipesJSON = JSON.stringify(savedRecipes);
  //   localStorage.setItem('savedRecipes', savedRecipesJSON);
  // }, [savedRecipes]);

  return (
    <div className='favorites-container'>
      <h1>My Recipes</h1>
      <div className='favorites-wrapper'>
        <div className='box-favorite-container'>
          {savedRecipes.map((e, i) => {
            return (
              <div className='card-recipe' key={i}>
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
                <button className='delete-button' onClick={() => handleDelete(e.id)}>Delete</button>
              </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default FavoriteRecipes