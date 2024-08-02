import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const initialFormData = {
    name: '',
    email: '',
    password: '',
    college: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    alert('Form submitted! Check the console for the logged data.');
    setFormData(initialFormData); 
  };

  const SubmitData = (e) => {
    e.preventDefault();
    axios.post('${}', formData)  
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert('Data sent');
        } else {
          alert('Something went wrong');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong');
      });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/6863516/pexels-photo-6863516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat flex justify-center items-center">
      <div className="formHolder bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <p className="font-bold text-3xl mb-4 flex justify-center items-center">SignUp</p>
          <input
            type="text"
            className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name..."
          />
          <input
            type="email"
            className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email..."
          />
          <input
            type="password"
            className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password..."
          />
          <input
            type="text"
            className="p-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="Enter your college..."
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 border-2 border-transparent hover:border-white transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
