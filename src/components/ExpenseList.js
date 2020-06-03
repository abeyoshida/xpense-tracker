import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// this first named export is for testing an version that is not connected to the store
export const ExpenseList = (props) => {
  //console.log('ExpenseList.js ExpenseList props: ', props);
  return (
    <div>
      <h1>Expense List</h1>
      {
        (props.expenses.length === 0) ? (
          <p>There are no expenses.</p>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log('ExpenseList.js mapStateToProps state: ', state);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
    // expenses: state.expenses
    
  };
};

// this export default is for the app and it uses store data
export default connect(mapStateToProps)(ExpenseList);
