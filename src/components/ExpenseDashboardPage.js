import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import selectExpensesTotal from '../selectors/expenses-total';
import ExpensesSummaryTotal from './ExpensesSummaryTotal';


const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummaryTotal />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
