import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { Box } from 'utils/Box';

import {
  StyledButton,
  StyledLink,
  MiniCaption,
  MiddleCaption,
  LargeCaption,
} from './MovieDetailsPage.styled';

import { getFetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchMovieDetails() {
      const movieData = await getFetchMovieDetails(id);

      setMovieDetails(movieData);
    }

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <Box as="section" p="30px 0">
        <Link to={backLinkHref}>
          <StyledButton type="button">Go back</StyledButton>
        </Link>

        {movieDetails && (
          <>
            <Box display="flex" gridGap={4} mb={4}>
              <Box flexBasis="300px" flexGrow="0" flexShrink="0">
                <img
                  src={
                    'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path
                  }
                  alt={movieDetails.title}
                  width="300"
                />
              </Box>
              <Box>
                <LargeCaption>{movieDetails.title}</LargeCaption>
                <MiddleCaption>Overview</MiddleCaption>
                <p>{movieDetails.overview}</p>
                <MiniCaption>Genres</MiniCaption>
                <p>{movieDetails.genres.map(({ name }) => name).join(', ')}</p>
                <p>
                  <b>Raiting:</b> {(movieDetails.vote_average * 10).toFixed(2)}%
                </p>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="20px"
            >
              <MiniCaption>Additional information</MiniCaption>
              <Box as="ul" display="flex" gridGap={3}>
                <li>
                  <StyledLink to="cast" state={{ from: backLinkHref }}>
                    Cast
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="reviews" state={{ from: backLinkHref }}>
                    Reviews
                  </StyledLink>
                </li>
              </Box>
            </Box>
          </>
        )}
      </Box>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
