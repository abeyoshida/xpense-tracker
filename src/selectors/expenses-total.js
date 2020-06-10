
// write a function that will take in a list of expenses and return the 
// total amount of those expenses
const selectExpensesTotal = (expenses) => {
    if (expenses.length === 0 ) {
        return 0;
    } else {
        // iterate through the expenses array and 
        // return another array that holds each expense amount
        return expenses
                .map((expense) => expense.amount)
                // reduce takes 2 arguments - a function and an index and
                // adds the element values of an array into one total sum
                .reduce((sum, value) => {
                    return sum + value;
                }, 0);
    }
};
export default selectExpensesTotal;
