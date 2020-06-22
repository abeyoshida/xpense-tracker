import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses } from '../../actions/expenses';
import expensesDummy from '../fixtures/expenses';
import fdb from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expensesDummy.forEach(( {id, description, note, amount, createdAt} ) => {
        expensesData[id] = {description, note, amount, createdAt};
    });
    fdb.ref('expenses').set(expensesData).then(() => done());
});

// test removeExpense action generator
// you need to pass in an id and get back an object
test('should setup up remove expense action object', () => {
    const actionResult = removeExpense({id: 'xxxyyyzzz'});
    expect(actionResult).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'xxxyyyzzz'
    });
});

// test editExpense action generator
// pass in id, updates - updates is the rest of the expenses properties without the id
/*  expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
  */
 test('should setup up edit expense action object', () => {
    const id = {id: 'xxxyyyzzz'};
    const updates = {amount: 10000, createdAt: 10000, description: 'Rent', note: 'edit Rent expense' }
    const actionResult = editExpense(id, updates);
    expect(actionResult).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    });
 });

 // test addExpense with provided data
 test('should setup add expense action object with provided values', () => {
    const actionResult = addExpense(expensesDummy[2]);
     expect(actionResult).toEqual({
         type: 'ADD_EXPENSE',
         expense: expensesDummy[2]
     });
 });

 // Jest needs to be told when testing an asynchonous process 
 // startAddExpense makes a call to the Firebase database so
 // done needs to be passed into test so it will wait until 
 // Firebase returns a result
 test('add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is gooder',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return fdb.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
 });

 test('add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaultData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaultData
            }
        });

        return fdb.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        console.log('snapshot.val(): ', snapshot.val());
        expect(snapshot.val()).toEqual(expenseDefaultData);
        done();
    });
 });

 test('setup set expense action object with data', () => {
    const action = setExpenses(expensesDummy);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expensesDummy
    })
 });