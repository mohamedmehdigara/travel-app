import React, { useState } from 'react';

const Destination = ({ destination }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Add a null check for the destination object
  if (!destination) {
    return null;
  }

  return (
    <div>
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Destination;

