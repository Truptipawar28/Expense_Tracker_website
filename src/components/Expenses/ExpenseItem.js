import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate.';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const [amount, setAmount] = useState(props.amount);

  const clickHandle = () => {
    setAmount('100$');
    console.log(amount);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        
        <div className='expense-item__price'>${props.amount}</div>
        <h2>{amount}</h2>
      </div>
      <button onClick={clickHandle}>Change Amount</button>
      <button onClick={clickHandler}>Change Title</button>
      
    </Card>
  );
}

export default ExpenseItem;