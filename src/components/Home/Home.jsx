import React from "react";

const Home = (props) => {
  const dishesList = props.dishes.map((dish) => {
    return (
      <div>
        <div>
        Dish:<h2>{dish.name}</h2>
          Description: <h2>{dish.description}</h2>
          Price: <h2>{dish.price}</h2>
        </div>
        <hr/>        
      </div>
    );
  });
  return (
    <div>
      <p>{dishesList}</p>
    </div>
  );
};

export default Home;