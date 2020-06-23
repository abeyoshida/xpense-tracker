import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expensesDummy from '../fixtures/expenses';

let wrapper, startEditExpense, startRemoveExpense, history, expense;

beforeEach( () => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    expense = expensesDummy[0];
    wrapper = shallow(
        <EditExpensePage 
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense}
            history={history} 
            expense={expense}
        />);
});

test('render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
});