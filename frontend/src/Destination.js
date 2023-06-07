import React from 'react';

const Destination = ({ destination }) => {
  if (!destination) {
    return null; // or render a loading indicator
  }

  return (
    <div>
      <h3>{destination.name}</h3>
      {/* Render other destination details */}
    </div>
  );
};

export default Destination;
