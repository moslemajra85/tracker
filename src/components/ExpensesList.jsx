import React, { useState } from 'react';

const ExpensesList = ({ filter, deleteExpense, data }) => {
   const calculateTotal = () => {
    let total = 0;
    for (let item of data) {
      total += item.amount;
    }

    return total;
  };

  return (
    <>
      <select
        onChange={(event) => {
           filter(event.target.value);
        }}
        className="form-control mb-3 mt-3"
      >
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="entertainment">Entertainment</option>
        <option value="utilities">Utilities</option>
      </select>
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

        <tfoot>
          <tr>
            <td colSpan={5}>Total: ${calculateTotal()}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpensesList;
