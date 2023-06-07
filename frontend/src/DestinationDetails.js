import React, { useState } from 'react';

const DestinationDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Create a new review object
    const newReview = {
      rating,
      reviewText
    };

    // Add the new review to the list
    setReviews([...reviews, newReview]);

    // Reset the form fields
    setRating(0);
    setReviewText('');
  };

  // Calculate the average rating
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div>
      <h2>Destination Details</h2>
      {/* Display destination details */}
      {/* ... */}
      <h3>Reviews</h3>
      <p>Average Rating: {averageRating}</p>
      {/* Display user reviews */}
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating}</p>
          <p>{review.reviewText}</p>
        </div>
      ))}
      {/* Form for submitting reviews */}
      <form onSubmit={handleSubmitReview}>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="reviewText">Review:</label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default DestinationDetails;

