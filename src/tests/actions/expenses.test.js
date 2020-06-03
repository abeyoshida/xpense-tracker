import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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

 // test addExpense action generator
 // pass in expense object and account for the dynamic id number
 // use expect.any() and determine the type expected instead of the value
 test('should setup add expense action object with dyanmic id', () => {
    const expenseData = {amount: 10000, createdAt: 10000, description: 'Rent', note: 'edit Rent expense' };
    const actionResult = addExpense(expenseData);
    expect(actionResult).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
 });

 // test addExpense with no data
 test('should setup add expense action object with no data', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      } 
    const actionResult = addExpense();
     expect(actionResult).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
             ...expenseData,
             id: expect.any(String)
         }
     });
 });