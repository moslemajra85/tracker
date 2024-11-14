import React from 'react';

const ExpensesList = ({ deleteExpense, data }) => {
  return (
    <table className="table table-hover table-bordered mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                onClick={() => deleteExpense(item.id)}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesList;
