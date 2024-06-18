import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-01', amount: 200, type: 'Income', category: 'Nike' },
    { id: 2, date: '2023-10-02', amount: 150, type: 'Expense', category: 'Adidas' },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    date: '',
    amount: '',
    type: 'Income',
    category: 'Nike',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    setTransactions([
      ...transactions,
      { ...newTransaction, id: transactions.length + 1 },
    ]);
    setNewTransaction({ date: '', amount: '', type: 'Income', category: 'Nike' });
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleEditTransaction = (id) => {
    const transaction = transactions.find((transaction) => transaction.id === id);
    setNewTransaction(transaction);
    handleDeleteTransaction(id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sneaker Accounting App</h1>
      <div className="mb-4">
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          placeholder="Amount"
          className="border p-2 mr-2"
        />
        <select
          name="type"
          value={newTransaction.type}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <select
          name="category"
          value={newTransaction.category}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        >
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Reebok">Reebok</option>
        </select>
        <button
          onClick={handleAddTransaction}
          className="bg-blue-500 text-white p-2"
        >
          Add Transaction
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Date</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Type</th>
            <th className="py-2">Category</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">${transaction.amount}</td>
              <td className="border px-4 py-2">{transaction.type}</td>
              <td className="border px-4 py-2">{transaction.category}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEditTransaction(transaction.id)}
                  className="text-yellow-500 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteTransaction(transaction.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;