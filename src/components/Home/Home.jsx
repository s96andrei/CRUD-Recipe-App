import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="inner-container">
        <h1>Home Page</h1>
        <p>Welcome to our recipe app, your one-stop destination for all your culinary needs! Our app is designed to make cooking an enjoyable and effortless experience, providing you with a wide range of recipes, from simple and quick meals to more complex and exotic dishes.

          With our user-friendly interface, you can easily search for recipes, save your favorite ones, and even create a shopping list based on your chosen recipes. Our app also offers helpful features like step-by-step instructions and ingredient measurements, making sure you have everything you need to prepare delicious meals that will impress your family and friends.

          Whether you are an experienced chef or a beginner in the kitchen, our app has something for everyone. We have a variety of recipes to suit different dietary requirements, including vegan, gluten-free, and low-carb options. Plus, our app is regularly updated with new recipes, so you will never run out of ideas for your next meal !
        </p>
        <p>So why wait? Download our recipe app today and start exploring the world of culinary delights!</p>
        <Link className='home-button' to="/recipes">Go to Recipes</Link>
      </div>

    </div>
  )
}

export default Home