import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expensesDummy from '../fixtures/expenses';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('render the ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('render an ExpenseForm from expensesDummy data', () => {
    const wrapper = shallow(<ExpenseForm key={expensesDummy[2].id} expenses={ expensesDummy[2] }/>);
    expect(wrapper).toMatchSnapshot();
});

test('render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('set description on input change', () => {
    const value = 'New Foo!';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('set note on input change', () => {
    const value = 'meat';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('set amount if valid on input change', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('set amount if valid on input change', () => {
    const value = '12.222';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('call onSubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expensesDummy[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    
    expect(wrapper.state('error')).toEqual('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expensesDummy[0].description,
        amount: expensesDummy[0].amount,
        note: expensesDummy[0].note,
        createdAt: expensesDummy[0].createdAt
    });
});

test('set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});