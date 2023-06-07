import React, { useState } from 'react';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';
import DestinationDetails from './DestinationDetails';
import Destination from './Destination';
import SavedDestinations from './SavedDestinations';

const App = () => {
  const [destinations] = useState([]);
  const [savedDestinations, setSavedDestinations] = useState([]);

  const handleToggleSaveDestination = (destinationId) => {
    const destination = destinations.find((dest) => dest.id === destinationId);

    if (destination) {
      if (savedDestinations.find((dest) => dest.id === destinationId)) {
        setSavedDestinations(savedDestinations.filter((dest) => dest.id !== destinationId));
      } else {
        setSavedDestinations([...savedDestinations, destination]);
      }
    }
  };

  return (
    <div>
      <AddDestinationForm />
      <Destination />
      <DestinationDetails />
      <DestinationList
        destinations={destinations}
        onSaveDestination={handleToggleSaveDestination}
      />
      <SavedDestinations savedDestinations={savedDestinations} />
    </div>
  );
};

export default App;
