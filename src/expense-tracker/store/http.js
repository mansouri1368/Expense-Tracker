import axios from "axios";


const BACKEND_URL = "http://localhost:5000/api/expenses";

export async function storeExpense(expensesData) {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response= await axios.post(BACKEND_URL, expensesData, config);

 const id=response.data;
  return id;
}


export async function fetchExpense() {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
 
  const response= await axios.get(BACKEND_URL, config);
  const expenses = [];

  for (let index of response.data)
  {
   const date=index.date.slice(0,10)
      expenses.push({...index,date:date });
      
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
 return await axios.put(BACKEND_URL + `/${id}`, expenseData, config);

}

export async function deleteExpense(id) {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
 return await axios.delete(BACKEND_URL + `/${id}`, config);

}
