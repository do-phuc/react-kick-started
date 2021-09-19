import "./expense.css";
import { Card, ExpenseItem, NewExpense } from "../components";
import { useEffect, useState } from "react";
import ExpenseFilter from "../components/expense-filter/ExpenseFilter";

export function Expenses() {
  const initialState = [
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

  const [expenses, setExpenses] = useState(initialState);
  const [filteredExpenses, setFilteredExpenses] = useState(initialState);
  const [yearFilter, setYearFilter] = useState("");

  const createNewExpense = (data) => {
    setExpenses((prevState) => {
      return [data, ...prevState];
    });

    setFilteredExpenses((prevState) => {
      return [data, ...prevState];
    });
  };

  const filterExpenseByYear = (year) => {
    setYearFilter(year);
  };

  useEffect(() => {
    const filteredData = !!yearFilter
      ? (expenses || []).filter(
          (expense) => expense.date.getFullYear() === +yearFilter
        )
      : expenses;

    setFilteredExpenses(filteredData);
  }, [expenses, yearFilter]);

  return (
    <Card className="expenses">
      <NewExpense onNewExpenseCreated={createNewExpense}></NewExpense>

      <ExpenseFilter onYearFilterSelect={filterExpenseByYear}></ExpenseFilter>

      {filteredExpenses.map((expense, index) => (
        <ExpenseItem expense={expense} key={index}></ExpenseItem>
      ))}
    </Card>
  );
}
