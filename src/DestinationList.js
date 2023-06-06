import React, { useState } from 'react';
import DestinationDetails from './DestinationDetails';

const DestinationList = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    // Your list of destinations
  ];

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div>
      <h2>Travel Destinations</h2>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id} onClick={() => handleDestinationClick(destination)}>
            {destination.name}
          </li>
        ))}
      </ul>
      <DestinationDetails destination={selectedDestination} />
    </div>
  );
};

export default DestinationList;
