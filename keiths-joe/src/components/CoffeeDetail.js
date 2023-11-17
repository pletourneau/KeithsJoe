import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name}</h3>
      <p>
        {coffee.origin}
        {coffee.price}
        {coffee.roast}
        {coffee.inventory}
      </p>
      <button onClick={props.onClickingSell}>Sell 1LB Coffee</button>
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
