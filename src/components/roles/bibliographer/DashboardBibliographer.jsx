import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import '../../../css/dashboard.css';


function DashboardBibliographer({ tab }) {
    switch (tab) {
        case 1:
            return (
                <div className='tab'>
                    Books
                </div>
            )
        case 2:
            return (
                <div className='tab'>
                    <div className='employees-add'>
                        Notifications
                    </div>
                </div>
            )
    }
}

export default DashboardBibliographer;
