import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  console.log('ExpenseListItem createdAt: ', createdAt);
  //const createdAtSafe = (moment.isMoment(createdAt)) ? moment(createdAt).format("MMMM Do YYYY") : '';
  const createdAtSafe = moment(createdAt).format("MMMM Do YYYY");
  const amountSafe = numeral(amount/100).format('$0,0.00');
  console.log('ExpenseListItem createdAtSafe: ', createdAtSafe);
  return (
      <div>
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
        </Link>
        {/*<p>{amount} - {createdAt}</p>*/}
        <p>{amountSafe} - {createdAtSafe}</p>
      </div>
    );
}
export default ExpenseListItem;
