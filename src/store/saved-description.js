import { createSlice } from "@reduxjs/toolkit";

const recipeDescriptionSave = createSlice({
    name: "recipeDescription",
    initialState: { recipeDescription: [] },
    reducers: {
        setSaveRecipeDescription(state, action) {
            const newSavedDescription = action.payload;
            console.log("sended data", newSavedDescription);
            const savedRecipe = state.recipeDescription.find((recipe) => recipe.label === newSavedDescription.label)
            if (savedRecipe) {
                console.log("extra")
            }
            else {
                state.recipeDescription.push({
                    id: newSavedDescription.id,
                    label: newSavedDescription.label,
                    image: newSavedDescription.image,
                    mealType: newSavedDescription.mealType,
                    ingredients: newSavedDescription.ingredients,
                    calories: newSavedDescription.calories
                })
            }
            console.log('TESSSST',Array.from(state.recipeDescription))
        },

        removeSavedRecipeDescription(state, action) {
            const index = state.recipeDescription.findIndex(recipe => recipe.id === action.payload);
            if (index !== -1) {
              state.recipeDescription.splice(index, 1);
            }
          }
    }
})


export const recipeSavedActions = recipeDescriptionSave.actions;
export default recipeDescriptionSave.reducer;

