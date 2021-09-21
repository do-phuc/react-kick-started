import "./ExpenseList.css";
import { ExpenseItem } from "../expense-item";

export const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="fallback">No expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense, index) => (
        <ExpenseItem expense={expense} key={index}></ExpenseItem>
      ))}
    </ul>
  );
};
