import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFetchMovieReviews } from 'services/api';
import { Box } from 'utils/Box';

import { Container, Content } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      const reviewsData = await getFetchMovieReviews(id);

      setReviews(reviewsData.results);
    }

    fetchMovieReviews();
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <Box as="ul" display="flex" flexDirection="column" gridGap={3}>
          <ul>
            {reviews.map(({ id, author, content, created_at }) => (
              <Container key={id}>
                <p>
                  <b>Author:</b> {author}
                </p>
                <p>
                  <b>Comment:</b>
                </p>
                <Content>{content}</Content>
                <p>
                  <b>Created:</b>{' '}
                  {new Date(created_at).toLocaleDateString('en-US')}
                </p>
              </Container>
            ))}
          </ul>
        </Box>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Reviews;
