import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);  // this will dispatch the addExpense call with the expense argument
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
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


