import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Box } from 'utils/Box';

import {
  StyledMovieCard,
  Rating,
  ContentWrapper,
  ImageWrapper,
  StyledImage,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridGap="20px"
        gridAutoRows="auto"
      >
        {movies.map(({ id, title, poster, vote_average }) => (
          <li key={id}>
            <StyledMovieCard to={`/movies/${id}`} state={{ from: location }}>
              <ImageWrapper>
                <StyledImage src={poster} alt={title} />
              </ImageWrapper>
              <ContentWrapper>
                <p>
                  <b>{title}</b>
                </p>
                <p>
                  <b>Rating: </b>
                  <Rating rating={vote_average.toFixed(2)}>
                    {vote_average.toFixed(2)}
                  </Rating>
                </p>
              </ContentWrapper>
            </StyledMovieCard>
          </li>
        ))}
      </Box>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
