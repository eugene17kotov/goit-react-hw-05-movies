import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { getFetchMovieCast } from 'services/api';

export const Cast = ({ id }) => {
  const [movieId, setMovieId] = useOutletContext();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      const castData = await getFetchMovieCast(movieId);

      setCast(castData.cast);
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ profile_path, name, character }) => (
            <li key={name}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + profile_path}
                alt={name}
                width="200"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
