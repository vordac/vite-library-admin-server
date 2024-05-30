// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from "sweetalert2";
// import { useNavigate } from 'react-router-dom';
// import '../css/signin.css';

// import EmployeeItem from './items/EmployeeItem';
// import AddEmployee from './EmployeeAdd';

// function Employees() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:5001/employees');
//         setEmployees(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div className='employees'>
      
//       <div className='employees-list'>
//         {employees.map((employee, index) => (
//           <EmployeeItem key={index} employee={employee} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Employees;
