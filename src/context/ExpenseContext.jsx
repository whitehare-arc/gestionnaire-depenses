import React, { createContext, useContext } from 'react';
import { useExpenseReducer } from '../reducers/expenseReducer';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const { expenses, addExpense, deleteExpense } = useExpenseReducer();

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};
