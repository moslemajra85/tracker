import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddExpenses from './components/AddExpenses';
import ExpensesList from './components/ExpensesList';
const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/expenses');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addExpense = async (expense) => {
    // update database
    const response = await axios.post(
      'http://localhost:5000/expenses',
      expense
    );

    //update the state
    setData([...data, response.data]);
  };

  const deleteExpense = async (id) => {
    // update Database
    axios.delete(`http://localhost:5000/expenses/${id}`);

    // update ui (state)
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <AddExpenses addExpense={addExpense} />
      <ExpensesList deleteExpense={deleteExpense} data={data} />
    </div>
  );
};

export default App;
