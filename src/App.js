import { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])  // [ {id: 1, text: "item1", completed: false}, {id: 2, text: "item2", completed: false}

  function handleSubmit(e) {
    e.preventDefault()  // prevent page from reloading

    setTodos([
      ...todos, { id: crypto.randomUUID(), title: newItem, completed: false }])
  }

  console.log(todos)

  // setNewItem("sjbvdf")
  return (
    <>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item'>New Item</label>
          <input value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" id='item' />
        </div>

        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>My To Do List</h1>
      <ul className='list'>
        <li>
          <label>
            <input type='checkbox' />
            Item1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Item2
          </label>
          <button className='btn btn-danger'>Delete</button>

        </li>
      </ul>
    </>
  );
}

export default App;
