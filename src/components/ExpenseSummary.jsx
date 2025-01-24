import React from 'react';

const ExpenseSummary = ({ expenses }) => {

  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount || 0), 0).toFixed(2);
  const categoryTotals = expenses.reduce((totals, expense) => {
    const category = expense.category || 'Autres';
    if (!totals[category]) {
      totals[category] = 0;
    }
    totals[category] += parseFloat(expense.amount || 0);
    return totals;
  }, {});

  return (
    <div className="expense-summary">
      <h3>Total des dépenses = {total} €</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <li key={category}>
            {category}: {amount.toFixed(2)} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
