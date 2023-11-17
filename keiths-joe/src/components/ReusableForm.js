import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const { formSubmissionHandler, buttonText, isEditing, defaultValues } = props;
  const formatPrice = (price) => (price ? parseFloat(price).toFixed(2) : "");
  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Coffee Name"
          defaultValue={isEditing ? defaultValues.name : ""}
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          defaultValue={isEditing ? defaultValues.origin : ""}
        />
        <input
          type="number"
          name="price"
          placeholder="Price/lb"
          min="0"
          step="0.01"
          defaultValue={isEditing ? formatPrice(defaultValues.price) : ""}
        />
        <label htmlFor="roast">Roast</label>
        <select
          name="roast"
          defaultValue={isEditing ? defaultValues.roast : ""}
        >
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
          <option value="decaf">Decaf</option>
        </select>
        {isEditing && (
          <input
            type="number"
            name="inventory"
            placeholder="130"
            defaultValue={isEditing ? defaultValues.inventory : ""}
          />
        )}
        <button type="submit">{buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  isEditing: PropTypes.bool,
  defaultValues: PropTypes.object,
};

export default ReusableForm;
