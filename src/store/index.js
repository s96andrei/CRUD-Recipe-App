import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./open-description";
import favoriteRecipeSlice from "./favorite-slice";



const store = configureStore({
    reducer: {
        recipe: recipeSlice,
        favoriteRecipe: favoriteRecipeSlice
    }
})

export default store;