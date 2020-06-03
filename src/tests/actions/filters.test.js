import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

// test setStartDate
test('should generate set start date action object', () => {
    const actionResult = setStartDate(moment(0));
    expect(actionResult).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

// test setEndDate
test('should generate set end date action object', () => {
    const actionResult = setEndDate(moment(0));
    expect(actionResult).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

// test sortByAmount
test('should generate sort by amount action object', () => {
    const actionResult = sortByAmount();
    expect(actionResult).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

// test sortByDate
test('should generate sort by date action object', () => {
    const actionResult = sortByDate();
    expect(actionResult).toEqual({
        type: 'SORT_BY_DATE'
    });
});

// test setTextFilter
test('should generate set Text Filter action object', () => {
    const text = 'whachoodoing';
    const actionResult = setTextFilter(text);
    expect(actionResult).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

// test setTextFilter with no data
test('should generate set text filter action object with no data', () => {
    const actionResult = setTextFilter();
    expect(actionResult).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

