import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expensesDummy from '../fixtures/expenses';

let wrapper, editExpense, startRemoveExpense, history, expense;

beforeEach( () => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    expense = expensesDummy[0];
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense}
            history={history} 
            expense={expense}
        />);
});

test('render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
});