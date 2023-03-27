import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Petrol",
      date: new Date(2023, 3, 25),
      place: "Bengaluru",
      price: 250,
    },
    {
      id: "e2",
      title: "Vegetables",
      date: new Date(2023, 3, 26),
      place: "Bengaluru",
      price: 200,
    },
    {
      id: "e3",
      title: "Food orders",
      date: new Date(2023, 3, 25),
      place: "Bengaluru",
      price: 500,
    },
    {
      id: "e4",
      title: "Travel",
      date: new Date(2023, 3, 30),
      place: "Bengaluru",
      price: 1000,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        place={expenses[0].place}
        price={expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        place={expenses[1].place}
        price={expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        place={expenses[2].place}
        price={expenses[2].price}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        place={expenses[3].place}
        price={expenses[3].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
