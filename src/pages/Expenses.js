import "./expense.css";
import { Card, ExpenseItem, NewExpense } from "../components";
import { useState } from "react";

export function Expenses() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseData, setExpenseData] = useState(expenses);

  const createNewExpense = (data) => {
    setExpenseData((prevState) => {
      return [data, ...prevState];
    });

    setTimeout(() => {
      checkExpense();
    }, 2000);
  };

  const checkExpense = () => {
    console.log(expenseData);
  };

  return (
    <Card className="expenses">
      <NewExpense onNewExpenseCreated={createNewExpense}></NewExpense>

      {expenseData.map((expense, index) => (
        <ExpenseItem expense={expense} key={index}></ExpenseItem>
      ))}
    </Card>
  );
}
