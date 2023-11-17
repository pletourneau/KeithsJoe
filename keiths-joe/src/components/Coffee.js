import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>
          {props.origin}
          {Number(props.price)}
          {props.roast}
          {Number(props.inventory)}
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  inventory: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
};

export default Coffee;
