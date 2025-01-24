import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { useExpenseReducer } from './reducers/expenseReducer';
import './styles/App.css';

const App = () => {
  const { expenses, addExpense, deleteExpense } = useExpenseReducer();

  return (
    <div className="app">
      <h2>Projet : Gestionnaire de dépenses personnelles</h2>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
