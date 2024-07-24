import React, { useState } from 'react';

const BirthdayForm = ({ addBirthday }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBirthday({ name, date });
    setName('');
    setDate('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter New Birthday</h3>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          placeholder='Enter full name'
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Birthday</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Add Birthday</button>
    </form>
  );
};

export default BirthdayForm;
