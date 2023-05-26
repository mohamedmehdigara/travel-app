import React from 'react';
import DestinationList from './DestinationList';

export default  DestinationList(); {
     const destinations = [
       { id: 1, name: 'Paris', image: 'https://example.com/paris.jpg' },
       { id: 2, name: 'Tokyo', image: 'https://example.com/tokyo.jpg' },
       { id: 3, name: 'London', image: 'https://example.com/london.jpg' },
       { id: 4, name: 'Sydney', image: 'https://example.com/sydney.jpg' },
     ];

    render ();{ return (
       <div>
         <h2>Travel Destinations</h2>
         <ul>
           {destinations.map(destination => (
             <li key={destination.id}>
               <img src={destination.image} alt={destination.name} />
               <h3>{destination.name}</h3>
               <p>Information about {destination.name}</p>
             </li>
           ))}
         </ul>
       </div>
     );
     
   }}

