import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Coffee Detail</h2>
      <h3>{coffee.name}</h3>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${parseFloat(coffee.price).toFixed(2)}</p>
      <p>Roast Level: {coffee.roast}</p>
      <p>Inventory (in lbs): {coffee.inventory}</p>
      <button
        onClick={() => props.onClickingSell(coffee.id)}
        disabled={coffee.inventory === 0}
      >
        Sell 1LB Coffee
      </button>
      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id)}>
        Remove Coffee
      </button>{" "}
      <hr />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
};

export default CoffeeDetail;
