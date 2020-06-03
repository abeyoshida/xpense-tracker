import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER' };
    const state = filtersReducer(undefined, { ...action, text: 'bungee jump' });
    expect(state.text).toBe('bungee jump');
});

test('set startDate filter', () => {
    const action = { type: 'SET_START_DATE' };
    const state = filtersReducer(undefined, { ...action, startDate: moment(0) } );
    expect(state.startDate).toEqual(moment(0));
});

test('set endDate filter', () => {
    const action = { type: 'SET_END_DATE' };
    const state = filtersReducer(undefined, { ...action, endDate: moment(0) });
    expect(state.endDate).toEqual(moment(0));
});