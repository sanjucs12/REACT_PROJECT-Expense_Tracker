import "./ExpenseItem.css";

function ExpenseItem() {
  const expensedate= new Date(2023,3,25);
  const expenseplace='Bengaluru';
  const expensetitle='Petrol';
  const expenseprice=200;
  return (
    <div className="expense-item">
      <div>
        <h2>{expensedate.toISOString()}</h2>
      </div>
      <div className="expense-item__description">
      <div className="expense-item__place">{expenseplace}</div>
        <h3>{expensetitle}</h3>        
        <div className="expense-item__price">{expenseprice}</div>        
      </div>
    </div>
  );
}
export default ExpenseItem;
