import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [label, setLabel] = useState('');
  const [category, setCategory] = useState('Alimentation');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && label) {
      addExpense({ amount, label, category });
      setAmount('');
      setLabel('');
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input 
        type="number" 
        placeholder="Montant en euros" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Label" 
        value={label} 
        onChange={(e) => setLabel(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Alimentation</option>
        <option>Logement</option>
        <option>Transport</option>
        <option>Divertissement</option>
        <option>Santé</option>
        <option>Éducation</option>
        <option>Autres</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default ExpenseForm;
