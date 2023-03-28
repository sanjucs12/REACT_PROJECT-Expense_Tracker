import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem=(props) =>{
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <ExpenseDetails
        title={props.title}
        place={props.place}
        price={props.price}
      /> */}
      <div className="expense-item__description">
        <div className="expense-item__place">{props.place}</div>
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
