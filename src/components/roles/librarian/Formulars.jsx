import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../../../css/signin.css';

import EmployeeItem from './EmployeeItem';
import FormularItem from './FormularItem';

function Formulars({ currentUser, jobTitle, address }) {
  const [formulars, setFormulars] = useState([]);

  useEffect(() => {
    console.log("Address from Employees: " + address);
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5001/formulars', { params: { address } });
        setFormulars(response.data);
      } catch (error) {
        console.error(error);
      }
    };

      fetchEmployees();
  }, [currentUser]);

  return (
    <div className='employees'> 

      <div className='employees-list'>
        {formulars.map((formular, index) => (
          <FormularItem key={index} formular={formular} />
        ))}
      </div>
    </div>
  );
}

export default Formulars;
