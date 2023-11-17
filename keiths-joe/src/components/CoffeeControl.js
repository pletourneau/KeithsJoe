import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false,
    };
  }

  //NEW COFFEE

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false,
    });
  };

  //EDIT COFFEE
  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingCoffeeInList = (CoffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter((Coffee) => Coffee.id !== this.state.selectedCoffee.id)
      .concat(CoffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null,
    });
  };

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ selectedCoffee: selectedCoffee });
  };

  //DELETE coffee
  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id !== id
    );
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null,
    });
  };

  //DEAL WITH BUTTON CLICK
  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditCoffeeForm
          coffee={this.state.selectedCoffee}
          onEditCoffee={this.handleEditingCoffeeInList}
        />
      );
      buttonText = "Return to coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = (
        <CoffeeDetail
          coffee={this.state.selectedCoffee}
          onClickingDelete={this.handleDeletingCoffee}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to coffee List";
    } else {
      currentlyVisibleState = (
        <CoffeeList
          ticketList={this.state.mainCoffeeList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
      );
      buttonText = "Add coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;
