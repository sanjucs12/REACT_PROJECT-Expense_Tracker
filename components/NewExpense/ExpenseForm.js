import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Multiple states method (most common method)

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //using one state instead of multiple states
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredLocation: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })

    //OR Below method is the rigth way to handle multiple states in single state

    //     setUserInput((prevState) => {
    //       return { ...prevState, enteredTitle: event.target.value };
    //     });
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);

    //     setUserInput({
    //       ...userInput,
    //       enteredLocation: event.target.value,
    //     });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    //     setUserInput({
    //       ...userInput,
    //       enteredAmount: event.target.value,
    //     });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      location: enteredLocation,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredLocation("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            onChange={locationChangeHandler}
            value={enteredLocation}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
