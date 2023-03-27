import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <div>
        <h2>{props.date.toISOString()}</h2>
      </div>
      <div className="expense-item__description">
      <div className="expense-item__place">{props.place}</div>
        <h3>{props.title}</h3>        
        <div className="expense-item__price">{props.price}</div>        
      </div>
    </div>
  );
}
export default ExpenseItem;
