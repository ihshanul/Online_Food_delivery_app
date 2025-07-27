import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category , searchText}) => {
  const { foodList } = useContext(StoreContext);
  const filteredFoodList = foodList.filter(food => (
    (category === 'All' || food.category === category) &&
    food.name.toLowerCase().includes(searchText.toLowerCase())
  ));``

  return (
    <div className="container">
      <div className="row">
        {filteredFoodList && filteredFoodList.length > 0 ? (
          filteredFoodList.map((food, index) => (
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
