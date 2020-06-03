import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  //const createdAtSafe = (moment.isMoment(createdAt)) ? createdAt.format("dddd, MMMM Do YYYY, h:mm:ss a") : createdAt;
  const createdAtSafe = '';
  return (
      <div>
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
        </Link>
        {/*<p>{amount} - {createdAt}</p>*/}
        <p>{amount} - {createdAtSafe}</p>
      </div>
    );
}
export default ExpenseListItem;
