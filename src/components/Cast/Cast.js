import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from 'utils/Box';

import { getFetchMovieCast } from 'services/api';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      const castData = await getFetchMovieCast(id);

      setCast(castData.cast);
    }

    fetchMovieCast();
  }, [id]);

  return (
    <>
      {cast.length > 0 ? (
        <Box
          as="ul"
          display="grid"
          gridTemplateColumns="repeat(5, 1fr)"
          gridGap="10px"
        >
          {cast.slice(0, 20).map(({ id, profile_path, name, character }) => (
            <Box as="li" key={id} width="200px">
              <Box
                as="img"
                mb="10px"
                borderRadius="10px"
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://dummyimage.com/200x300/000/fff&text=No+photo'
                }
                alt={name}
                width="200"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </Box>
          ))}
        </Box>
      ) : (
        <p>No cast</p>
      )}
    </>
  );
};

export default Cast;
