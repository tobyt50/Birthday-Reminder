import React from 'react';

const BirthdayList = ({ birthdays }) => {

  // Function to format the date as "12th July, 2002"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Function to get the ordinal suffix for the day
    const getOrdinalSuffix = (day) => {
      if (day === 1 || day === 21 || day === 31) {
        return 'st';
      } else if (day === 2 || day === 22) {
        return 'nd';
      } else if (day === 3 || day === 23) {
        return 'rd';
      } else {
        return 'th';
      }
    };

    const suffix = getOrdinalSuffix(day);
    return `${day}${suffix} ${month}, ${year}`;
  };

  return (
    <div>
      <h3>All Birthdays</h3>
      <ul>
        {birthdays.map((birthday, index) => (
          <li className='birthday-list' key={index}>{birthday.name} - {formatDate(birthday.date)}</li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
