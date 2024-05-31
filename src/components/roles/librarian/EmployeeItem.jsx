import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import '../../../css/employee-item.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('en-GB', options); // en-GB for dd-mm-YYYY format
}

function EmployeeItem({ employee }) {

  const navigate = useNavigate();

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/employees/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {

        Swal.fire({
          title: "Employee was deleted",
          icon: "success"
        });
        
        navigate('/');
      } else {
        console.log('Failed to delete employee');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card className='employee-item'>
      <CardBody>
        <h3>{employee.full_name}</h3>
        <div className='employee-item-info'>
          <div className='employee-item-info-left'>
            <p>Address: {employee.address}</p>
            <p>Birth Date: {formatDate(employee.birth_date)}</p>
            <p>Phone Number: {employee.phone_number}</p>
          </div>
          <div className='employee-item-info-right'>
            <p>Email: {employee.email}</p>
            <p>Hire Date: {formatDate(employee.hire_date)}</p>
            <p>Job Title: {employee.job_title}</p>
          </div>
        </div>
        <div className='employee-item-delete'>
          <button onClick={() => handleDeleteClick(employee.personal_id)}>Delete</button>
        </div>
      </CardBody>
    </Card>
  );
}

export default EmployeeItem;
