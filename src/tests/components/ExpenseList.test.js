import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expensesDummy from '../fixtures/expenses';

test('render ExpenseList from expensesDummy', () => {
    const wrapper = shallow(<ExpenseList expenses={expensesDummy} />);
    expect(wrapper).toMatchSnapshot();
});
test('render ExpenseList with no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});