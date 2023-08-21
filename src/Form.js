import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import GetPatient from './getPatient';
import './App.css';

function Form() {
  // navigation to patient page
  // const navigate = useNavigate();
  const getPatient = () => {
    // 👇️ navigate to /contacts
    // navigate('/getPatient');
    alert("")
  };




  const [formValue, setFormValue] = useState({ fullName: "", age: "", email: "", address: "", phone: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    // console.log(formValue);

  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page from reloading
    // console.log(formValue);
    try {
      const jsonData = JSON.stringify(formValue);
      console.log('JSON Data:', jsonData);
      const response = await axios.post('https://eosjnadspe5j83r.m.pipedream.net', formValue, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('successful', response.data);
      setFormValue({
        fullName: '',
        age: '',
        email: '',
        address: '',
        phone: '',
      });
    } catch (error) {
      console.error('error in geeting the response', error);
      // Handle the error
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Name</label>
          <input value={formValue.fullName}
            placeholder='Full Name'
            name="fullName"
            onChange={handleInput}
            type="text" id='item' />
        </div>
      </form>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Age</label>
          <input value={formValue.age}
            placeholder='your age'
            name='age'
            onChange={handleInput}
            type="text" id='item' />
        </div>
      </form>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Email</label>
          <input value={formValue.email}
            placeholder='your email'
            name="email"
            onChange={handleInput}
            type="email" id='item' />
        </div>
      </form>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Address</label>
          <input value={formValue.address}
            placeholder='your address'
            name="address"
            onChange={handleInput}
            type="text" id='item' />
        </div>
      </form>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Phone Number</label>
          <input value={formValue.phone}
            placeholder="+91"
            name="phone"
            onChange={handleInput}
            type="number" id='item' />
        </div>
      </form>

      <div> <p>  </p>    </div>

      <div > <button className='btn'
        onClick={handleSubmit}>Submit</button></div >

      <div> <p>  </p>    </div>

      <div > <button className='btn'
        onClick={getPatient}>Get Patient information</button>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Link to="/getPatient">Get Patient Details</Link>} />
          <Route path="/getPatient" element={<GetPatient />} />
        </Routes>
      </div>

    </>
  );
}

export default Form;
