import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-list">
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <div className="expense-item" key={index}>
            <span>{expense.label}</span>
            <span>{expense.amount} €</span>
            <span>{expense.category}</span>
            <button onClick={() => deleteExpense(index)}>Supprimer</button>
          </div>
        ))
      ) : (
        <p>N/A</p>
      )}
    </div>
  );
};

export default ExpenseList;
