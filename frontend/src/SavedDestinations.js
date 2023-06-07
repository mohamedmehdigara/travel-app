import React from 'react';

const SavedDestinations = ({ savedDestinations }) => {
  return (
    <div>
      <h2>Saved Destinations</h2>
      {savedDestinations.length === 0 ? (
        <p>No saved destinations yet.</p>
      ) : (
        <ul>
          {savedDestinations.map((destination) => (
            <li key={destination.id}>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedDestinations;
