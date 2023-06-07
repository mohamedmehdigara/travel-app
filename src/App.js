import React from 'react';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';
import DestinationDetails from './DestinationDetails';
import Destination from './Destination';

const App = () => {
  const destinations = [
    // Your list of destinations
  ];
  return (
    <div>
      <DestinationList />
      <AddDestinationForm/>
      <Destination/>
      <DestinationDetails/>
      <DestinationList destinations={destinations} />

    </div>
  );
};

export default App;
