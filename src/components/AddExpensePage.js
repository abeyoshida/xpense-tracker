import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);  // this will dispatch the addExpense call with the expense argument
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>  
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
        
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
   // the mapDispatchToProps passes the dispatch call to startAddExpense
   // startAddExpense will now be available to the component via this.props.addExpense
   startAddExpense: (expense) => dispatch(startAddExpense(expense)) 
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);


