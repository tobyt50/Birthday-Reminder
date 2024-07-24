import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BirthdayForm from './components/BirthdayForm';
import BirthdayList from './components/BirthdayList';
import UpcomingBirthdays from './components/UpcomingBirthdays';
import './index.css';

const App = () => {
  const [birthdays, setBirthdays] = useState([]);

  const addBirthday = (birthday) => {
    setBirthdays([...birthdays, birthday]);
  };

  return (
    <Router>
      <div className="container">
        <h1>Birthday Reminder</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className='nav-link'>Upcoming Birthdays</Link>
            </li>
            <li>
              <Link to="/add-birthday" className='nav-link'>Add Birthday</Link>
            </li>
            <li>
              <Link to="/all-birthdays" className='nav-link'>All Birthdays</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UpcomingBirthdays birthdays={birthdays} />} />
          <Route path="/add-birthday" element={<BirthdayForm addBirthday={addBirthday} />} />
          <Route path="/all-birthdays" element={<BirthdayList birthdays={birthdays} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
