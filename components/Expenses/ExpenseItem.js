//import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <div className="expense-item__place">{props.place}</div>
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.price}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
