
import { createSlice } from "@reduxjs/toolkit";

// Retrieve saved data from localStorage
const savedRecipeDescription = JSON.parse(localStorage.getItem("recipeDescription"));

const recipeDescriptionSave = createSlice({
    name: "recipeDescription",
    initialState: { recipeDescription: savedRecipeDescription || [] }, // Use saved data or an empty array as initial state
    reducers: {
        setSaveRecipeDescription(state, action) {
            const newSavedDescription = action.payload;
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

                // Save updated recipeDescription to localStorage
                localStorage.setItem("recipeDescription", JSON.stringify(state.recipeDescription));
            }
        },

        removeSavedRecipeDescription(state, action) {
            const index = state.recipeDescription.findIndex(recipe => recipe.id === action.payload);
            if (index !== -1) {
                state.recipeDescription.splice(index, 1);

                // Save updated recipeDescription to localStorage
                localStorage.setItem("recipeDescription", JSON.stringify(state.recipeDescription));
            }
        }
    },
    extraReducers: {
        // Clear saved data from localStorage when the Redux store is reset
        "@@INIT": () => {
            localStorage.removeItem("recipeDescription");
        }
    }
})


export const recipeSavedActions = recipeDescriptionSave.actions;
export default recipeDescriptionSave.reducer;
