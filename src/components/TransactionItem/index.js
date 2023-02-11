import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteHistory} = props
  const {id, title, amount, type} = transactionDetails
  const removeHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="header1">
      <div className="header-cell1">
        <p>{title}</p>
        <p>Rs {amount}</p>
        <p>{type}</p>
        <button
          data-testid="delete"
          onClick={removeHistory}
          type="button"
          className="delete-btn"
        >
          <img
            className="d-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="separator1" />
    </li>
  )
}

export default TransactionItem
