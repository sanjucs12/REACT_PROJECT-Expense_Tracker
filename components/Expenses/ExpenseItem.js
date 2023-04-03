import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
//import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem=(props) =>{
  const [title,setTitle]= useState(props.title);
  
  const clickHandler=()=>{
   setTitle('Updated...!!!');
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <ExpenseDetails
        title={props.title}
        place={props.place}
        price={props.price}
      /> */}
      <div className="expense-item__description">
        <div className="expense-item__place">{props.place}</div>
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
