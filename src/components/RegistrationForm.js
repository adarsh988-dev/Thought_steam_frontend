import React, { useState } from 'react'
import axios from 'axios';
import Alert from './Alert';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  })
  const [alertOutput, setAlertOutput] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8000/user/register/', 
        formData
      )
      .then((response) => {
        setAlertOutput(true);
        setTimeout(() => {
          setAlertOutput(false);
        }, 4000);
        console.log(response.data.message); 
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  }

  return (
    <>
      {alertOutput && (
        <Alert type="success" message="User Register Successfully..." />
      )}
    
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              minLength={5}
              maxLength={20}
              pattern="^[a-zA-Z0-9]+$"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 bg-slate-200 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength={8}
              maxLength={20}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
              title="Password must be 8-20 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

