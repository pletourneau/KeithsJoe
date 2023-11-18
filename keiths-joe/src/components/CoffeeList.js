import React from "react";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
    <React.Fragment>
      <h2>List of Coffee</h2>
      <h4>Click a coffee to see its details</h4>
      {props.coffeeList.map((coffee) => (
        <div key={coffee.id}>
          <p
            onClick={() => props.onCoffeeSelection(coffee.id)}
            style={{
              textDecoration: coffee.inventory === 0 ? "line-through" : "none",
            }}
          >
            {coffee.name} - On hand inventory (in lbs): {coffee.inventory}
            {coffee.inventory === 0 && "- 86'ed"}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
}
CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
};

export default CoffeeList;
