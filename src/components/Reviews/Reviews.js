import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { getFetchMovieReviews } from 'services/api';

export const Reviews = () => {
  const [movieId, setMovieId] = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      const reviewsData = await getFetchMovieReviews(movieId);

      setReviews(reviewsData.results);
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, updated_at }) => (
            <li key={author}>
              <h1>Author: {author}</h1>
              <p>{content}</p>
              <p>{updated_at}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};
