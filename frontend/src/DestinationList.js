import React, { useState } from 'react';
import DestinationDetails from './DestinationDetails';

const DestinationList = ({ destinations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(null);
  if (!destinations) {
    return <div>No destinations available</div>;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Travel Destinations</h2>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search destinations" />
      <ul>
        {filteredDestinations.map((destination) => (
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
