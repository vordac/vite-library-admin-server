import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../../css/dashboard.css';

import Employees from '../Employees';
import EmployeeAdd from '../EmployeeAdd';

function DashboardAdmin({ tab }) {
    switch (tab) {
        case 1:
            return (
                <div className='tab'>
                    < Employees />
                </div>
            )
        case 2:
            return (
                <div className='tab'>
                    <div className='employees-add'>
                        <EmployeeAdd />
                    </div>
                </div>
            )
    }
}

export default DashboardAdmin;
