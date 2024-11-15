import { useState } from 'react';
const AddExpenses = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const reset = () => {
    setDescription('');
    setAmount('');
    setCategory('');
  };
  return (
    <>
      <h1 className="text-primary text-center mb-2">Expense Tracker</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (!description || !amount || !category) return;
          addExpense({
            description,
            amount,
            category,
          });

          reset();
        }}
        className="border rounded p-4"
      >
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            type="text"
            className="form-control"
            placeholder="Enter description..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Add Amount</label>
          <input
            onChange={(event) => setAmount(+event.target.value)}
            value={amount}
            type="number"
            className="form-control"
            placeholder="Enter amount..."
          />
        </div>

        <div className="mb-3">
          <select
            onChange={(event) => setCategory(event.target.value)}
            value={category}
            className="form-control"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
          </select>
        </div>
        <div className="d-grid">
          <button className="btn btn-sm btn-info">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddExpenses;
