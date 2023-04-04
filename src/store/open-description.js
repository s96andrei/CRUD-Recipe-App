import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name : "recipe",
    initialState: [],
    reducers: {
        setShowDescription(state, action) {
            const newRecipe = action.payload;
            console.log(newRecipe);
            const existingRecipe = state.recipe.find((recipe) => recipe.id === newRecipe.id)
            if (!existingRecipe) {
                state.recipe.push({
                    id: newRecipe.id

                })
            }
            console.log("state test", state.recipe)
        }
    }

})

export const recipeActions = recipeSlice.actions;
export default recipeSlice.reducer;