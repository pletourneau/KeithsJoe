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
    console.log("Selected Coffee:", selectedCoffee);
    this.setState({ selectedCoffee: selectedCoffee });
  };

  //DELETE COFFEE
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

  //SELL 1LB COFFEE
  handleSellingCoffee = (id) => {
    this.setState((prevState) => {
      const updatedCoffeeList = prevState.mainCoffeeList.map((coffee) => {
        if (coffee.id === id && coffee.inventory >= 1) {
          return {
            ...coffee,
            inventory: coffee.inventory - 1,
          };
        }
        console.log(coffee.id);
        return coffee;
      });
      this.setState({
        mainCoffeeList: updatedCoffeeList,
        editing: false,
        selectedCoffee: null,
      });
      return {
        mainCoffeeList: updatedCoffeeList,
      };
    });
  };

  // handleSellingCoffee = (id) => {
  //   const selectedCoffee = this.state.mainCoffeeList.filter(
  //     (coffee) => coffee.id === id
  //   )[0];
  //   console.log(id);
  //   if (selectedCoffee.inventory >= 1) {
  //     const coffeeSale = {
  //       ...selectedCoffee,
  //       inventory: selectedCoffee.inventory - 1,
  //     };
  //     const newMainCoffeeList = this.state.mainCoffeeList
  //       .filter((coffee) => coffee.id !== id)
  //       .concat(coffeeSale);
  //     this.setState({
  //       mainCoffeeList: newMainCoffeeList,
  //     });
  //     this.handleEditingCoffeeInList(id);
  //   }
  // };

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
          onClickingSell={this.handleSellingCoffee}
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
          coffeeList={this.state.mainCoffeeList}
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
