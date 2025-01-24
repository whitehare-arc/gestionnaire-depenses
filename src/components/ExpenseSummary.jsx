import React from 'react';
import { useExpenseReducer } from '../reducers/expenseReducer.jsx';

const ExpenseSummary = () => {
  const { expenses } = useExpenseReducer();

  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <div className="expense-summary">
      <h3>Total = {total}€</h3>
    </div>
  );
};

export default ExpenseSummary;
