import { createSlice } from "@reduxjs/toolkit";

const recipeDescriptionSave = createSlice({
    name: "recipeDescription",
    initialState: { recipeDescription: [] },
    reducers: {
        setSaveRecipeDescription(state, action) {
            const newSavedDescription = action.payload;
            console.log("sended data", newSavedDescription);
            const existingFavorite = state.recipeDescription.find((recipe) => recipe.id === newSavedDescription.id)
            if (existingFavorite) {
                // console.log("Test SABVE")
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
        }
    }
})


export const recipeSavedActions = recipeDescriptionSave.actions;
export default recipeDescriptionSave.reducer;

