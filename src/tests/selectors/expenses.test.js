import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expensesDummy from '../fixtures/expenses';

// test selectExpenses - filters a list of expenses 
// input: expenses list, filters

const filterDummy = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

test('filter by text value', () => {
    const fd = {
        ...filterDummy,
        text: 'c'
    };
    // console.log('filter by text fd: ', fd);
    const result = selectExpenses(expensesDummy, fd );
    expect(result).toEqual([ expensesDummy[2], expensesDummy[0] ]);
});

test('filter by startDate', () => {
    const fd = {
        ...filterDummy,
        startDate: moment(0)
    };
    // console.log('filter by startDate fd: ', fd);
    const result = selectExpenses(expensesDummy, fd );
    expect(result).toEqual([ expensesDummy[2], expensesDummy[0] ]);
});

test('filter by endDate', () => {
    const fd = {
        ...filterDummy,
        endDate: moment(0)
    };
    const result = selectExpenses(expensesDummy, fd );
    expect(result).toEqual([ expensesDummy[0], expensesDummy[1] ]);
});

test('sort by date', () => {
    const fd = {
        ...filterDummy,
        sortBy: 'date'
    };
    const result = selectExpenses(expensesDummy, fd);
    expect(result).toEqual([ expensesDummy[2], expensesDummy[0], expensesDummy[1] ]);
});

test('sort by amount', () => {
    const fd = {
        ...filterDummy,
        sortBy: 'amount'
    };
    const result = selectExpenses(expensesDummy, fd);
    expect(result).toEqual([ expensesDummy[1], expensesDummy[2], expensesDummy[0] ]);
});