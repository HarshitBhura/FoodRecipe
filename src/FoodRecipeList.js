import React from "react";
import FoodItems from "./FoodItems";
import "./FoodItems.css";
const FoodRecipeList = (props) => {
  return (
    <>
      <div className="show">
        {props.data.map((map) => (
          <div key={map.recipe.label}>
            <FoodItems data={map.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodRecipeList;
