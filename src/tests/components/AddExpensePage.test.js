import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expensesDummy from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesDummy[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expensesDummy[2]);
});