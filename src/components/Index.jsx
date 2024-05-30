import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../css/signin.css';

function Index({ setCurrentUser, setIsAdmin, setIsLibrarian, setIsBibliographer }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setCurrentUser(storedToken);
      navigate('/dashboard');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/signin', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        localStorage.setItem('jwtToken', response.data.jwtToken);
        localStorage.setItem('jobTitle', response.data.job_title);
        setIsAdmin(false);
        setIsLibrarian(false);
        setIsBibliographer(false);

        setCurrentUser(response.data.jwtToken);
        if (response.data.job_title === 'admin') {
          setIsAdmin(true);
        } else if (response.data.job_title === 'librarian') {
          setIsLibrarian(true);
        } else if (response.data.job_title === 'bibliographer') {
          setIsBibliographer(true);
        }
        navigate('/dashboard');
        Swal.fire({
          title: "Успішний вхід",
          text: "Ласкаво просимо назад",
          icon: "success"
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Swal.fire({
          title: "Невірний email або пароль",
          icon: "error"
        });
      } else {
        console.error(error);
        Swal.fire({
          title: "Помилка сервера",
          icon: "error"
        });
      }
    }
  };

  return (
    <div className='signin'>
      <h2>LibraUniversal for employees</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Index;
