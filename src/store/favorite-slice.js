import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipeSlice = createSlice({
    name: "favoriteRecipes",
    initialState: {favoriteRecipes:[]},
    reducers: {
        setFavoriteRecipes(state, action) {
            const newFavoriteRecipes = action.payload;
            console.log(newFavoriteRecipes);
            const existingFavorite = state.favoriteRecipes.find((recipe) => recipe.id === newFavoriteRecipes.id)
            if (!existingFavorite) {
                state.favoriteRecipes.push({
                    id: newFavoriteRecipes.id

                })

        }
    }
}})


export const favoriteRecipeActions = favoriteRecipeSlice.actions;
export default favoriteRecipeSlice.reducer;