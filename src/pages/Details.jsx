import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";
import diet from "../assets/diet.svg";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  const { darkMode } = useContext(RecipeContext);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const measure = recipe[`strMeasure${i}`];
    const ingredient = recipe[`strIngredients${i}`];
    if (ingredient && ingredient.trim !== "") {
      ingredients.push({ measure, ingredient });
    }
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl">{recipe.strMeal}</h1>
          <img src={diet} alt="" className="w-20 h-20 cursor-pointer mr-6" />
        </header>
        <div className="flex items-center flex-col md:flex-row gap-5">
          <section className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl space-y-3 shadow-xl">
            <h2>Ingredients</h2>
            {ingredients.map((ing) => {
              <p>
                <span>{ing.measure}</span>
                <span>{ing.ingredient}</span>
              </p>;
            })}
          </section>
          <section className="flex-1 items-center">
            <img src={recipe.strMealThumb} alt="" className="rounded-2xl min-w-full max-h-80 object-fill"/>
          </section>
          <section className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl space-y-3 shadow-xl">
            <h2>Information</h2>
            <p>id:{recipe.idMeal}</p>
            <p>id:{recipe.strArea}</p>
            <p>id:{recipe.strInstructions}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
