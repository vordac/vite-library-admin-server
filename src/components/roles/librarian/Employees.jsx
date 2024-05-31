import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../../../css/signin.css';

import EmployeeItem from './EmployeeItem';

function Employees({ currentUser, jobTitle, address }) {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    console.log("Address from Employees: " + address);
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5001/employees-librarian', { params: { address } });
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };

      fetchEmployees();
  }, [currentUser]);

  return (
    <div className='employees'>

      <div className='employees-list'>
        {employees.map((employee, index) => (
          <EmployeeItem key={index} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default Employees;
