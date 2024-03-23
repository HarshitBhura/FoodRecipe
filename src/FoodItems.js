import React, { useState } from "react";
import  "./FoodItems.css";
import ViewItems from "./ViewItems";

const FoodItems = (props) => {
  const [items, setItems] = useState();
  const item = props.data;
  const viewItems = () => {
    if (items) {
      setItems();
    } else {
      setItems(item);
    }
  };
  return (
    <>
      <div className="ShowItems">
        <img src={item.image} alt="Img" />
        <p>{item.label}</p>
        <button type="button" onClick={viewItems} >
          View
        </button>
      </div>
      {items && <ViewItems item={items} />}
    </>
  );
};

export default FoodItems;
