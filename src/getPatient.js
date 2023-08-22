import React from "react";
import axios from 'axios';
import './App.css';

import { useState } from 'react';


const GetPatient = () => {

    const url = "https://velocityclinicalstage.clinicalconductor.com/CCSWeb/api/v1/patients/371030"

    const [PatientID, setPatientID] = useState(0);
    const handlechange = (e) => {
        // console.log(e.target.value);
        setPatientID(e.target.value);
    }

    const handleSubmit = (e) => {
    f
    };

    return (
        <div>
            <h3>Submit</h3>
            <p> Patient Id for getting the information</p>

            <form className='new-item-form'>
                <div className="form-row">
                    <label htmlFor='item'>PatientID</label>
                    <input
                        name="PatientID"
                        onChange={handlechange}
                        placeholder='371032'
                        type="number" id='item' />
                </div>
            </form>
            <button onClick={handleSubmitapi} className='btn'>Get Details</button>
        </div>
    );
};

export default GetPatient;