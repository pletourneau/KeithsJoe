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
        isEditing={false}
      />
    </React.Fragment>
  );
  function handleNewCoffeeFormSubmission(event) {
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: Number(event.target.price.value),
      roast: event.target.roast.value,
      inventory: 130,
      id: v4(),
    });
  }
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};

export default NewCoffeeForm;
