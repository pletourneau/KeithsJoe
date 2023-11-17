import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Coffee Name" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="number" name="price" placeholder="Price" />
        <label htmlFor="roast">Roast</label>
        <select name="roast">
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
          <option value="decaf">Decaf</option>
        </select>
        <input type="number" name="inventory" placeholder="130" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
