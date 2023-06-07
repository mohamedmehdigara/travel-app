import React, {useState} from 'react';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';
import DestinationDetails from './DestinationDetails';
import Destination from './Destination';


const App = () => {
 
  const [destinations] = useState([]);


  return (
    <div>
      <AddDestinationForm/>
      <Destination/>
      <DestinationDetails/>
      <DestinationList destinations={destinations} />
    </div>
  );
};

export default App;
