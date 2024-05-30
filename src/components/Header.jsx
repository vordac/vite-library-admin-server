import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../css/header.css';

function Header({ setCurrentUser, setTab, setIsAdmin, setIsBibliographer, setIsLibrarian, isAdmin, isLibrarian, isBibliographer }) {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');

    const handleLogoutClick = () => {
        setCurrentUser(null);
        setIsAdmin(false);
        setIsLibrarian(false);
        setIsBibliographer(false);
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('jobTitle');
        navigate('/');
    };

    const handleEmployeesClick = () => {
        setTab(1);
    };

    const handleBooksClick = () => {
        setTab(2);
    }

    useEffect(() => {
        if (isAdmin) {
            setTitle('Admin')
        } else if (isLibrarian) {
            setTitle('Librarian')
        } else {
            setTitle('Bibliographer')
        }
    }, [isAdmin, isLibrarian, isBibliographer])

    return (
        <div className='header'>
            <div className='header-title'>
                <h2>LibraUniversal {title}</h2>
            </div>
            <div className='header-control'>
                <button onClick={handleBooksClick}>Add Employee</button>
                <button onClick={handleEmployeesClick}>Employees</button>
                <button onClick={handleLogoutClick}>Logout</button>
            </div>
        </div>
    );
}

export default Header;
