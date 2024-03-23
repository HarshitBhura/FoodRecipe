import React from "react";
import "./Style.css";

const ViewItems = (props) => {
  const item = props.item;
  console.log(item.totalNutrients);
  return (
    <>
      <div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Cuisines</td>
              <td>
                {item.cuisineType.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Source</td>
              <td>
                {item.source}
              </td>
            </tr>
            <tr>
              <td>Calories</td>
              <td>{item.calories}</td>
            </tr>
            <tr>
              <td>Type Of Dish</td>
              <td>{item.dishType.map((res) => res)}</td>
            </tr>
            <tr>
              <td>Ingredients</td>
              <td>
                {item.ingredientLines.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>TotalNutrients</td>
              <td>
                <li>
                  {`${item.totalNutrients.CA.label} = 
                  ${item.totalNutrients.CA.quantity}
                  ${item.totalNutrients.CA.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.SUGAR.label} = 
                  ${item.totalNutrients.SUGAR.quantity}
                  ${item.totalNutrients.SUGAR.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.FASAT.label} = 
                  ${item.totalNutrients.FASAT.quantity}
                  ${item.totalNutrients.FASAT.unit}`}
                </li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewItems;
