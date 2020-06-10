import selectExpensesTotal from '../../selectors/expenses-total';
import expensesDummy from '../fixtures/expenses';

test('display 0 for no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('correctly add up single expenses correctly', () => {
    const res = selectExpensesTotal([expensesDummy[0]]);
    expect(res).toBe(225);
});

test('correctly add up multiple expenses correctly', () => {
    const res = selectExpensesTotal(expensesDummy);
    expect(res).toBe(105225);
});