import { useState } from 'react';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { Box } from 'utils/Box';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);

  return (
    <Box p="30px 0">
      <SearchForm setSearchMovies={setSearchMovies} />

      {searchMovies && <MoviesList movies={searchMovies} />}
    </Box>
  );
};

export default MoviesPage;
