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

function FormularItem({ formular }) {

  const navigate = useNavigate();


  const {formulary_number, employee_full_name, book_isbn, loan_date, loan_days, return_date, reader_full_name, address} = formular;

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
        <div className='employee-item-info'>
          <p>Number: {formulary_number}</p>
          <p>Employee Full Name: {employee_full_name}</p>
          <p>ISBN: {book_isbn}</p>
          <p>Loan Date: {loan_date}</p>
          <p>Loan Days: {loan_days}</p>
          <p>Return Date: {return_date}</p>
          <p>Reader Full Name: {reader_full_name}</p>
          <p>Address: {address}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default FormularItem;
