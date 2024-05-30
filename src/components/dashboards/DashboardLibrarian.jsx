import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../../css/dashboard.css';


function DashboardLibrarian({ tab }) {
    switch (tab) {
        case 1:
            return (
                <div className='tab'>
                    {/* < LibrarianEmployees /> */}
                    1
                </div>
            )
        case 2:
            return (
                <div className='tab'>
                    <div className='employees-add'>
                        {/* <LibrarianEmployeeAdd /> */}
                        2
                    </div>
                </div>
            )
    }
}

export default DashboardLibrarian;
