import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import FavoriteRecipes from "./components/FavoriteRecipes/FavoriteRecipes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Navbar />,
      children: [ 
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "recipes",
          element: <Recipes />,
        },
      
        {
          path: "favorite-recipes",
          element: <FavoriteRecipes />,
        },
      ],
    },
  ]);
 return (
    <RouterProvider router={router} />
 )
}

export default App;
