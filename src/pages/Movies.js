import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { getFetchSearchMovies } from 'services/api';

import { Box } from 'utils/Box';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmitSearchMovies = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.search.value;

    setSearchParams({ query });

    form.reset();
  };

  useEffect(() => {
    if (query === '') return;

    async function fetchAwaiter() {
      const allDataMovies = await getFetchSearchMovies(query);

      const requiredDataMovies = allDataMovies.map(
        ({ id, title, poster_path: poster }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
        })
      );

      setSearchMovies(requiredDataMovies);
    }

    fetchAwaiter();
  }, [query]);

  return (
    <Box pl="4">
      <SearchForm onSubmit={handleSubmitSearchMovies} />
      {searchMovies && <MoviesList movies={searchMovies} />}
    </Box>
  );
};
