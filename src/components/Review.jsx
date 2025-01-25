import React, { useState } from 'react';
import "../css/Review.css" // Assuming you'll have a CSS file for styling

const Review = ({ review }) => {
  const starRating = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-box">
      <h3>{review.username}</h3>
      <div className="rating">
        {starRating(review.rating)}
        <span>({review.rating}/5)</span>
      </div>
      <p>{review.text}</p>
    </div>
  );
};

const ReviewsList = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      username: "AlexRivera",
      rating: 4,
      text: "Really user-friendly, had a few genuine connections."
    },
    {
      id: 2,
      username: "TinaLopez",
      rating: 3,
      text: "The app is okay, the quality of matches are great, i just need more ladies close to me."
    },
    {
      id: 3,
      username: "SamLee",
      rating: 5,
      text: "Found my weekend fun here, the best place for casual dating."
    },
    {
      id: 4,
      username: "NicoleAdams",
      rating: 5,
      text: "very easy to trust the platform."
    },
    {
      id: 5,
      username: "GregStone",
      rating: 4,
      text: "Easy to use, found some great people to meet up with."
    },
    {
      id: 6,
      username: "LunaPark",
      rating: 5,
      text: "Absolutely love it, met some amazing people for short-term fun."
    },
    {
      id: 7,
      username: "ChrisMiller",
      rating: 3,
      text: "Mixed bag; some good experiences, but also ran into some issues."
    },
    {
      id: 8,
      username: "EllaWhite",
      rating: 4,
      text: "i was shocked, when the girl showed up, real people on here, although its quite expensive."
    }
  ]);
  const [showAll, setShowAll] = useState(false); // State to toggle showing all reviews
  const shownReviews = showAll ? reviews : reviews.slice(0, 3); // Show all or only first 3

  return (
    <div className="reviews-container">
      <h2>User Reviews</h2>
      <div className="reviews-list">
        {shownReviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      {!showAll && reviews.length > 3 && (
        <button className='rev-btn' onClick={() => setShowAll(true)}>See More</button>
      )}
    </div>
  );
};


export default ReviewsList;