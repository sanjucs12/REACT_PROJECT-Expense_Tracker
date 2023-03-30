import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Card'
//import ExpenseDetails from "./ExpenseDetails";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        place={props.items[0].place}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        place={props.items[1].place}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        place={props.items[2].place}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        place={props.items[3].place}
        price={props.items[3].price}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
