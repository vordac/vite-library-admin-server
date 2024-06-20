import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import '../../../css/formular-item.css';
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
      const response = await fetch(`http://localhost:5001/formulars/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {

        Swal.fire({
          title: "Formular was deleted",
          icon: "success"
        });
        
        navigate('/');
      } else {
        console.log('Failed to delete formular');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card className='formular-item'>
      <CardBody>
        <div className='formular-item-info'>
          <p><b>Number:</b> {formulary_number}</p>
          <p><b>Employee:</b> {employee_full_name}</p>
          <p><b>ISBN:</b> {book_isbn}</p>
          <p><b>Loan Date:</b> {formatDate(loan_date)}</p>
          <p><b>Loan Days:</b> {loan_days}</p>
          <p><b>Return Date:</b> {formatDate(return_date)}</p>
          <p><b>Reader Full Name:</b> {reader_full_name}</p>
          <p><b>Address:</b> {address}</p>
          <button onClick={() => handleDeleteClick(formulary_number)}>DELETE</button>
        </div>
      </CardBody>
    </Card>
  );
}

export default FormularItem;
