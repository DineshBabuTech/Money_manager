import {Component} from 'react'

import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeChoosen: 'INCOME',
    transactionsList: [],
  }

  onAdd = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeChoosen} = this.state
    const newHistory = {
      id: v4(),
      amount: parseInt(amountInput),
      title: titleInput,
      type: typeChoosen,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newHistory],
      amountInput: '',
      titleInput: '',
      typeChoosen: 'INCOME',
    }))
  }

  deleteHistory = id => {
    const {transactionsList} = this.state
    const filteredTransaction = transactionsList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({transactionsList: filteredTransaction})
  }

  getTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  getAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  getTypeChoosen = event => {
    this.setState({typeChoosen: event.target.value})
  }

  getIncome = () => {
    let income = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachHistory => {
      if (eachHistory.type === 'INCOME') {
        income += eachHistory.amount
      }
    })
    return income
  }

  getExpenses = () => {
    let expenses = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachHistory => {
      if (eachHistory.type === 'EXPENSES') {
        expenses += eachHistory.amount
      }
    })
    return expenses
  }

  getBalance = () => {
    let income = 0
    let expenses = 0
    let balance = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachHistory => {
      if (eachHistory.type === 'INCOME') {
        income += eachHistory.amount
      } else {
        expenses += eachHistory.amount
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {titleInput, amountInput, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="app-container">
        <div className="container-1">
          <h1 className="heading">Hi, Richard</h1>
          <p className="descript">
            Welcome back to your{' '}
            <span className="span-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="container-3">
          <div className="add-transaction">
            <h1 className="transaction-title">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onAdd}>
              <label className="text-trans" htmlFor="Title">
                TITLE
              </label>
              <input
                value={titleInput}
                onChange={this.getTitleInput}
                className="input-size"
                id="Title"
                placeholder="TITLE"
              />
              <label className="text-trans" htmlFor="Amount">
                AMOUNT
              </label>
              <input
                value={amountInput}
                onChange={this.getAmountInput}
                className="input-size"
                id="Amount"
                placeholder="AMOUNT"
              />
              <label className="text-trans" htmlFor="Type">
                TYPE
              </label>
              <select onChange={this.getTypeChoosen} className="input-size">
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1 className="history-text">History</h1>
            <ul className="box">
              <li className="header">
                <div className="header-cell">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </div>
                <hr className="separator" />
              </li>
              {transactionsList.map(eachHistory => (
                <TransactionItem
                  deleteHistory={this.deleteHistory}
                  transactionDetails={eachHistory}
                  key={eachHistory.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
