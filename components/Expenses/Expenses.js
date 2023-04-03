import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
//import ExpenseDetails from "./ExpenseDetails";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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
