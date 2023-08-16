import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAddress, setNewAddress] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [todos, setTodos] = useState([])  // [ {id: 1, text: "item1", completed: false}, {id: 2, text: "item2", completed: false}
  const apiKey = 'YOUR_AZURE_TRANSLATOR_API_KEY';
  function handleSubmit(e) {
    e.preventDefault()  // prevent page from reloading

    setTodos(
      [
        ...todos, { id: crypto.randomUUID(), title: newName, completed: false }])
  }

  console.log(todos)

  // setNewItem("sjbvdf")
  return (
    <>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Name</label>
          <input value={newName}
            placeholder='Full Name'
            onChange={e => setNewName(e.target.value)}
            type="text" id='item' />
        </div>
      </form>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Age</label>
          <input value={newAge}
            placeholder='your age'
            onChange={e => setNewAge(e.target.value)}
            type="text" id='item' />
        </div>
      </form> <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Email</label>
          <input value={newEmail}
            placeholder='your email'
            onChange={e => setNewEmail(e.target.value)}
            type="text" id='item' />
        </div>
      </form>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Address</label>
          <input value={newAddress}
            placeholder='your address'
            onChange={e => setNewAddress(e.target.value)}
            type="text" id='item' />
        </div>
      </form>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>Phone Number</label>
          <input value={newPhone}
            placeholder="+91"
            onChange={e => setNewPhone(e.target.value)}
            type="text" id='item' />
        </div>
      </form>
      <div> <p>  </p>    </div>

      <div > <button className='btn'>Submit</button></div>



      <ul className='list'>

        {/* <li>
          <label>
            <input type='checkbox' />
            Item3
          </label>
          <button className='btn btn-danger'>Delete</button>

        </li> */}
      </ul>
    </>
  );
}

export default App;
