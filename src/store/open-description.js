import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name : "recipe",
    initialState: {recipe: []},
    reducers: {
        setShowDescription(state, action) {
            const newRecipe = action.payload;
            console.log(newRecipe);
            const existingRecipe = state.recipe.find((recipe) => recipe.id === newRecipe.id)
            if (!existingRecipe) {
                state.recipe = [{ 
                    id: newRecipe.id,
                    label: newRecipe.label,
                    image: newRecipe.image,
                    mealType: newRecipe.mealType,
                    ingredients: newRecipe.ingredients,
                    calories: newRecipe.calories
                 }];
            }
            console.log("state test", state.recipe)
        }
    }

})


export const recipeActions = recipeSlice.actions;
export default recipeSlice.reducer;