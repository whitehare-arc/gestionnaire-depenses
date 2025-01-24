import { useReducer } from 'react';

const initialState = {
  expenses: [],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export const useExpenseReducer = () => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  const deleteExpense = (index) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: index });
  };

  return {
    expenses: state.expenses,
    addExpense,
    deleteExpense,
  };
};
