import React from 'react';

const DestinationList = () => {
  const destinations = [
    'Destination 1',
    'Destination 2',
    'Destination 3'
  ];

  return (
    <div>
      <h2>Travel Destinations</h2>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>{destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;
