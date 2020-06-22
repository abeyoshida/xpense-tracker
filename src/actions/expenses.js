import uuid from 'uuid';
import fdb from '../firebase/firebase';

/*******present structure*********/
// component calls action generator
// action generator returns an object
// component dispatches the object
// redux store changes after running a reducer

/*******new structure to add firebase call ************/
// component calls action generator
// action generator returns a function
// component dispatches function (?)
// function runs -- has the ability to dispatch other actions and do whatever it wants

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// this function will update firebase then dispatch an object to update the redux store
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return fdb.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  //console.log('/actions/expenses.js editExpense updates: ', updates);
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  // fetch all expense data once from firebase
  // parse the data into an array
  // dispatch setExpenses
  
  return (dispatch) => {
    return fdb.ref('expenses')
      .once('value')
      .then((snapshot) => {
          const expenses = [];
          snapshot.forEach((childSnapshot) => {
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });
          console.log(expenses);
          dispatch(setExpenses(expenses));
    });
  };
  
};
