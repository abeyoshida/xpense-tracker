import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

class ExpensesSummaryTotal extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div>
                {
                    (this.props.expensesCount === 0) ? <p>There are no expenses</p> : <p>The total amount of your expenses: {this.props.expensesTotal}</p>
                }
                
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const expensesTotal = selectExpensesTotal(state.expenses);
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        expensesCount: state.expenses.length,
        expensesTotal: numeral(expensesTotal/100).format('$0,0.00')
    }
};

export default connect(mapStateToProps)(ExpensesSummaryTotal);