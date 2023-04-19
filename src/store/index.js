import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./open-description";
import recipeDescriptionSave from "./saved-description";



const store = configureStore({
    reducer: {
        recipe: recipeSlice,
        savedRecipe: recipeDescriptionSave
    }
})

export default store;