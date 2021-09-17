import './ExpenseItemDescription.css'

export function ExpenseItemDescription(props) {
  const { title, amount } = props
  return (
    <div className={'description'}>
      <h2>{title}</h2>
      <div className={'price'}>{amount}</div>
    </div>
  )
}
