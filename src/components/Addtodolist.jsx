import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todoSlice';
import './Addtodolist.css';

const Addtodolist = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <div className="main-container">
      <form className="main-form" onSubmit={handleSubmit}>
        <label htmlFor="input1" className="input-label">
          Add Your Todo:
        </label>
        <input
          type="text"
          spellCheck="true"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="input1"
          placeholder="Enter your plan here"
        />
        <button type="submit" aria-label="Add todo">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Addtodolist;
