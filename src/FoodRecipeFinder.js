import React, { useState } from "react";
import FoodRecipeList from "./FoodRecipeList";
import "./FoodItems.css";

const FoodRecipeFinder = () => {
  const [result, setResult] = useState();
  const apiKeys = "32727ba01bc7411418343579adebaeb7	";
  const apiId = "fbe3f5b8";
  const [searchValue, setSearchValue] = useState("");

  const fetchApi = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${apiId}&app_key=${apiKeys}`
    );

    const data = await response.json();
    setResult(data.hits);
  };

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = () => {
    if (searchValue.length === 0) {
      alert("Please Enter Your Favourite Food");
      setResult();
    } else {
      fetchApi();
    }
  };
  const refreshItem = () => {
    if (searchValue.length === 0) {
      alert("Please Enter Your Favourite Food");
      setResult();
    } else {
      fetchApi();
    }
  };
  return (
    <div className="container">
      <input type="text" onChange={searchHandler} placeholder="     Search Here" />
      <button type="Submit" onClick={onSearch} style={{ marginLeft: "2rem" }}>
        Search
      </button>
      <button
        type="button"
        onClick={refreshItem}
        style={{ marginLeft: "2rem" }}
      >
        Refresh
      </button>
      {result && <FoodRecipeList data={result} />}
    </div>
  );
};

export default FoodRecipeFinder;
