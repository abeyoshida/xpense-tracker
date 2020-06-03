import React from 'react';
import { shallow } from 'enzyme';
import expensesDummy from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('render an ExpenseListItem from expensesDummy', () => {
    const wrapper = shallow(<ExpenseListItem key={expensesDummy[2].id} expenses={ expensesDummy[2] }/>);
    expect(wrapper).toMatchSnapshot();
});
