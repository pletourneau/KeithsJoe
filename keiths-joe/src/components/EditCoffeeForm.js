import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: Number(event.target.price.value),
      roast: event.target.roast.value,
      inventory: Number(event.target.inventory.value),
      id: coffee.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee"
        isEditing={true}
        defaultValues={{
          name: coffee.name,
          origin: coffee.origin,
          price: coffee.price.toString(),
          roast: coffee.roast,
          inventory: coffee.inventory.toString(),
        }}
      />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func,
};

export default EditCoffeeForm;
