import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./open-description";



const store = configureStore({
    reducer: {
        recipe: recipeSlice
    }
})

export default store;