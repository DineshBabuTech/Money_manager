import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="container-2">
      <div className="balance-container">
        <img
          className="image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="text-in-cont">Your Balance</p>
          <p data-testid="balanceAmount" className="money-in-cont">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          className="image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p className="text-in-cont">Your Income</p>
          <p data-testid="incomeAmount" className="money-in-cont">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          className="image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p className="text-in-cont">Your Expenses</p>
          <p data-testid="expensesAmount" className="money-in-cont">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
