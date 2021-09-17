import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate'
import { ExpenseItemDescription } from './ExpenseItemDescription'

export function ExpenseItem(props) {
  const { title, amount, date } = props.expense

  return (
    <div className='expense-item'>
      <ExpenseDate date={date}></ExpenseDate>
      <ExpenseItemDescription title={title} amount={amount}></ExpenseItemDescription>
    </div>
  )
}
