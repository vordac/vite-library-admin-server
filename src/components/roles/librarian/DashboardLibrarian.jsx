import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../../../css/dashboard.css';
import EmployeeAdd from './EmployeeAdd';
import Employees from './Employees';
import Formulars from './Formulars';


function DashboardLibrarian({ tab, currentUser, jobTitle, address }) {

    switch (tab) {
        case 1:
            return (
                <div className='tab'>
                    <Employees currentUser={currentUser} jobTitle={jobTitle} address={address} />
                </div>
            )
        case 2:
            return (
                <div className='tab'>
                    <div className='employees-add'>
                        <EmployeeAdd currentUser={currentUser} jobTitle={jobTitle} address={address} />
                    </div>
                </div>
            )
        case 3:
            return (
                <div className='tab'>
                    <div className='formulars'>
                        <Formulars currentUser={currentUser} jobTitle={jobTitle} address={address} />
                    </div>
                </div>
            )
    }
}

export default DashboardLibrarian;
