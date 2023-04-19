import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./open-description";
import favoriteRecipeSlice from "./favorite-slice";
import recipeDescriptionSave from "./saved-description";



const store = configureStore({
    reducer: {
        recipe: recipeSlice,
        favoriteRecipe: favoriteRecipeSlice,
        savedRecipe: recipeDescriptionSave
    }
})

export default store;