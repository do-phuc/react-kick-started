import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
  const submitNewExpenseHandler = (data) => {
    const createdExpense = {
      id: Math.random().toFixed(3),
      ...data,
    };
    props.onNewExpenseCreated(createdExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitNewExpense={submitNewExpenseHandler}></ExpenseForm>
    </div>
  );
};
