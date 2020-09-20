import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const { label, image, url, calories, ingredients } = recipe.recipe;
  const [show, setShow] = useState(false);
  const cal = {calories}
  const roundedCal = Math.round(cal.calories);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <h4>Total Calories: {roundedCal}</h4>
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={onClick}>Ingredients</button>
      {show !== false && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
