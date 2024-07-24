import React from 'react';

const UpcomingBirthdays = ({ birthdays }) => {
  const today = new Date();
  const oneWeekLater = new Date();
  oneWeekLater.setDate(today.getDate() + 7);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

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

  const upcomingBirthdays = birthdays.filter(birthday => {
    const birthdayDate = new Date(birthday.date);
    birthdayDate.setFullYear(today.getFullYear());
    return birthdayDate >= today && birthdayDate <= oneWeekLater;
  });

  return (
    <div>
      <h3>Upcoming Birthdays this Week</h3>
      <ul>
        {upcomingBirthdays.map((birthday, index) => (
          <li className='birthday-list' key={index}>{birthday.name} - {formatDate(birthday.date)}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingBirthdays;
