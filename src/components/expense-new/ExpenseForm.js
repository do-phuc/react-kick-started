import "./ExpenseForm.css";
import { useState } from "react";

export const ExpenseForm = (props) => {
  const initialState = {
    title: "",
    amount: "",
    date: "",
  };

  const [expense, setExpense] = useState(initialState);

  const titleChangeHandler = (ev) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        title: ev.target.value,
      };
    });
  };

  const amountChangeHandler = (ev) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        amount: ev.target.value,
      };
    });
  };

  const dateChangeHandler = (ev) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        date: ev.target.value,
      };
    });
  };

  const submitExpenseFormHandler = (ev) => {
    ev.preventDefault();

    const expenseForm = {
      title: expense.title,
      amount: expense.amount,
      date: new Date(expense.date),
    };

    props.onSubmitNewExpense(expenseForm);

    setExpense(initialState);
  };

  return (
    <form onSubmit={submitExpenseFormHandler}>
      <div className="controls">
        <div className="control">
          <label>Title</label>
          <input
            type="text"
            value={expense.title}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="control">
          <label>Amount</label>
          <input
            type="number"
            value={expense.amount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="control">
          <label>Date</label>
          <input
            type="date"
            value={expense.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="actions">
        <button>Add expense</button>
      </div>
    </form>
  );
};
