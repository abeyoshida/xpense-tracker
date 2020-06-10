import moment from 'moment';

const expensesDummy = [
    {
        id: '1',
        description: 'coffee',
        note: '',
        amount: 225,
        createdAt: 0
    },
    {
        id: '2',
        description: 'rent',
        note: '',
        amount: 100000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'groceries',
        note: '',
        amount: 5000,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
    // total = 105225
];
export default expensesDummy;