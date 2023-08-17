import React from "react";

const GetPatient = () => {



    return (
        <div>
            <h3>Submit</h3>
            <p> Patient Id for getting the information</p>

            <form className='new-item-form'>
                <div className="form-row">
                    <label htmlFor='item'>PatientID</label>
                    <input

                        placeholder='PatientID'
                        type="number" id='item' />
                </div>
            </form>
            <button className='btn'>Get Details</button>
        </div>
    );
};

export default GetPatient;