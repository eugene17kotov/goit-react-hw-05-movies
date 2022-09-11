import { Link, useLocation } from 'react-router-dom';

import { Box } from 'utils/Box';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Box
        display="grid"
        gridGap="2"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        as="ul"
      >
        {movies.map(({ id, title, poster }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={poster} alt={title} width="100" />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </Box>
    </>
  );
};
