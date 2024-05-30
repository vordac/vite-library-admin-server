import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../css/employee-add.css';

function EmployeeAdd() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [hireDate, setHireDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmployeeAddClick = async (event) => {
        event.preventDefault();

        // Perform form validation here
        const phoneNumberRegex = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if (!fullName) {
            Swal.fire({
                title: "Full name required",
                icon: "error"
            });
            return;
        }

        if (!address) {
            Swal.fire({
                title: "Address required",
                icon: "error"
            });
            return;
        }

        if (!birthDate) {
            Swal.fire({
                title: "Birthday required",
                icon: "error"
            });
            return;
        }

        if (!phoneNumber) {
            Swal.fire({
                title: "Phone number required",
                icon: "error"
            });
            return;
        }

        if (!phoneNumberRegex.test(phoneNumber)) {
            Swal.fire({
                title: "Invalid Phone Number",
                text: "Please enter the phone number in the format +38(XXX)XXX-XX-XX",
                icon: "error"
            });
            return;
        }

        if (!email) {
            Swal.fire({
                title: "Email required",
                icon: "error"
            });
            return;
        }

        if (!emailRegex.test(email)) {
            Swal.fire({
                title: "Invalid Email",
                text: "Please enter a valid email address",
                icon: "error"
            });
            return;
        }

        if (!hireDate) {
            Swal.fire({
                title: "Hire date required",
                icon: "error"
            });
            return;
        }

        if (!jobTitle) {
            Swal.fire({
                title: "Job title required",
                icon: "error"
            });
            return;
        }

        if (!password) {
            Swal.fire({
                title: "Password required",
                icon: "error"
            });
            return;
        }

        if (password.length < 8) {
            Swal.fire({
                title: "Password too short",
                icon: "error"
            });
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/add-employee', {
                full_name: fullName,
                address: address,
                birth_date: birthDate, // This should be a datepicker
                phone_number: phoneNumber, // This should be in the format +38(XXX)XXX-XX-XX or use Swal.fire for validation
                email: email, // This should be a valid email address
                hire_date: hireDate, // This should be a datepicker
                job_title: jobTitle, // This should be a dropdown with options: librarian or bibliographer
                password: password,
            });

            if (response.status === 201) {
                Swal.fire({
                    title: "Employee Added",
                    text: "The employee has been added successfully",
                    icon: "success"
                });
                navigate('/dashboard'); // Navigate to the dashboard or any other appropriate page
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div className='employee-add'>
            <form onSubmit={handleEmployeeAddClick}>
                <div className='employee-add-fullname'>
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div className='employee-add-address'>
                    <label>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
                <div className='employee-add-birthday'>
                    <label>Birthday</label>
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
                    />
                </div>
                <div className='employee-add-phone'>
                    <label>Phone</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </div>
                <div className='employee-add-email'>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='employee-add-hiredate'>
                    <label>Hire Date</label>
                    <input
                        type="date"
                        value={hireDate}
                        onChange={(event) => setHireDate(event.target.value)}
                    />
                </div>
                <div className='employee-add-jobtitle'>
                    <label>Job Title</label>
                    <select
                        value={jobTitle}
                        onChange={(event) => setJobTitle(event.target.value)}
                    >
                        <option value="">Select Job Title</option>
                        <option value="librarian">Librarian</option>
                        <option value="bibliographer">Bibliographer</option>
                    </select>
                </div>
                <div className='employee-add-password'>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default EmployeeAdd;
