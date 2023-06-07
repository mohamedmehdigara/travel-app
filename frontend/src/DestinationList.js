import React from 'react';
import { Link } from 'react-router-dom';
import SavedDestinations from './SavedDestinations';

const DestinationList = ({ destinations, onToggleSaveDestination }) => {
  return (
    <div>
      <h2>Travel Destinations</h2>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <Link to={`/destinations/${destination.id}`}>{destination.name}</Link>
            <button onClick={() => onToggleSaveDestination(destination.id)}>
              {SavedDestinations.includes(destination) ? 'Remove from Saved' : 'Add to Saved'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;
