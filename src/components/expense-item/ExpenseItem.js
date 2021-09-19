import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { ExpenseItemDescription } from "./ExpenseItemDescription";
import { Card } from "../card";

export function ExpenseItem(props) {
  const { title, amount, date } = props.expense;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <ExpenseItemDescription
        title={title}
        amount={amount}
      ></ExpenseItemDescription>
    </Card>
  );
}
