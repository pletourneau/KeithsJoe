import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add Coffee"
      />
    </React.Fragment>
  );
  function handleNewCoffeeFormSubmission(event) {
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: Number(event.target.price.value),
      roast: event.target.roast.value,
      inventory: Number(event.target.inventory.value),
      id: v4(),
    });
  }
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};

export default NewCoffeeForm;
