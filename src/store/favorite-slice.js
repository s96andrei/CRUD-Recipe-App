import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipeSlice = createSlice({
    name: "myRecipeBook",
    initialState: { myRecipeBook: [], },
    reducers: {
        setMyRecipeBook(state, action) {
            const newFavoriteRecipes = action.payload;
            // console.log(newFavoriteRecipes);
            const existingFavorite = state.myRecipeBook.find((recipe) => recipe.id === newFavoriteRecipes.id)
            if (existingFavorite) {
                // console.log("Test")
                }
                else {
                    state.myRecipeBook.push({
                        id: newFavoriteRecipes.id,
                        label: newFavoriteRecipes.label,
                        image: newFavoriteRecipes.image,
                        mealType: newFavoriteRecipes.mealType,
                        ingredients: newFavoriteRecipes.ingredients,
                        calories: newFavoriteRecipes.calories
                })
        }
    }
}})


export const favoriteRecipeActions = favoriteRecipeSlice.actions;
export default favoriteRecipeSlice.reducer;