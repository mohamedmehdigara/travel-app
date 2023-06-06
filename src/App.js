import React from 'react';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';
import DestinationDetails from './DestinationDetails';
import Destination from './Destination';

const App = () => {
  return (
    <div>
      <DestinationList />
      <AddDestinationForm/>
      <Destination/>
      <DestinationDetails/>
      
    </div>
  );
};

export default App;
