import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expensesDummy from '../fixtures/expenses';

test('set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE' };
    const state = expensesReducer(expensesDummy, { ...action, id: expensesDummy[1].id });
    expect(state).toEqual([ expensesDummy[0], expensesDummy[2] ]);
});
test('do not remove expense if id is not fount', () => {
    const action = { type: 'REMOVE_EXPENSE' };
    const state = expensesReducer(expensesDummy, { ...action, id: '-1'});
    expect(state).toEqual( expensesDummy );
});
test('add expense to expenses list', () => {
    const action = { type: 'ADD_EXPENSE' };
    const expenseToBeAdded = {
        id: '4',
        description: 'coffee',
        note: '',
        amount: 225,
        createdAt: 0
    };
    const state = expensesReducer(expensesDummy, {...action, expense: expenseToBeAdded });
    expect(state).toEqual([ ...expensesDummy, expenseToBeAdded ]);
});
test('edit an existing expense', () => {
    const action = { type: 'EDIT_EXPENSE' };
    const updatedExpense = {
        id: '3',
        description: 'groceries',
        note: 'bought meat and vegetables',
        // note: '',
        amount: 5000,
        createdAt: moment(0).add(4, 'days').valueOf()
    };
    const state = expensesReducer( expensesDummy, { ...action, id: updatedExpense.id, updates: updatedExpense } );
    // console.log('edit an existing expense state: ', state);
    expensesDummy.splice(2);
    // console.log('expensesDummy after splice(): ', expensesDummy);
    expect(state).toEqual([ ...expensesDummy, updatedExpense ]);
});
test('do not edit anything if expense is not found', () => {
    const action = { type: 'EDIT_EXPENSE' };
    const updatedExpense = {
        id: '-1',
        description: 'groceries',
        note: 'bought meat and vegetables',
        // note: '',
        amount: 5000,
        createdAt: moment(0).add(4, 'days').valueOf()
    };
    const state = expensesReducer( expensesDummy, { ...action, id: updatedExpense.id, updates: updatedExpense } );
    expect(state).toEqual(expensesDummy);
});
// NOTE:  to simplify code create an action object and pass that into expensesReducer

test('should set expenses', () => {
    const action = { 
        type: 'SET_EXPENSES',
        expenses: [expensesDummy[1]]
    };
    const state = expensesReducer(expensesDummy, action);
    expect(state).toEqual([expensesDummy[1]]);
});