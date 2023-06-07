import React, { useState } from 'react';

const AddDestinationForm = () => {
  const [destination, setDestination] = useState({
    name: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setDestination({ ...destination, [e.target.name]: e.target.files[0] });
    } else {
      setDestination({ ...destination, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation before submitting the form
    // Here, you can send the form data to an API or perform any desired actions
    console.log(destination);

    // Reset the form fields
    setDestination({
      name: '',
      description: '',
      image: null
    });
  };

  return (
    <div>
      <h2>Add a New Destination</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={destination.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={destination.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;

