import { Suspense, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Button } from 'components/Button/Button';

import { Box } from 'utils/Box';

export const MovieDetails = ({ movieDetails, backLinkHref }) => {
  const {
    id,
    poster_path: poster,
    title,
    vote_average: score,
    overview,
    genres,
  } = movieDetails;

  const [movieId, setMovieId] = useState(id);

  const genresList = genres.map(({ name }) => name).join(', ');

  return (
    <>
      <Link to={backLinkHref}>
        <Button>Go back</Button>
      </Link>

      <Box>
        <img
          src={'https://image.tmdb.org/t/p/w500' + poster}
          alt={title}
          width="300"
        />
        <h2>{title}</h2>
        <p>User Score: {score}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList}</p>
      </Box>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">
            <p>Cast</p>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <p>Reviews</p>
          </Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={[movieId, setMovieId]} />
      </Suspense>
    </>
  );
};
