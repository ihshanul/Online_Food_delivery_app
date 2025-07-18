import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="row">
        {foodList && foodList.length > 0 ? (
          foodList.map((food, index) => (
            <FoodItem
              key={index}
              name={food.name}
              id={food.id}
              price={food.price}
              imageUrl={food.imageUrl}
              description={food.description}
            />
          ))
        ) : (
          <div className="text-center mt-4">
            <p>No food found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
