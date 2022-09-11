import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getFetchMovieDetails } from 'services/api';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      const movieData = await getFetchMovieDetails(id);

      setMovieDetails(movieData);
    }

    fetchMovieDetails();
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      {movieDetails && (
        <MovieDetails movieDetails={movieDetails} backLinkHref={backLinkHref} />
      )}
    </>
  );
};
