import PropTypes from 'prop-types';
import {
  StyledSearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchForm.styled';
import { FcSearch } from 'react-icons/fc';
import { Box } from 'utils/Box';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getFetchSearchMovies } from 'services/api';

export const SearchForm = ({ setSearchMovies }) => {
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
    if (!query) return;

    async function fetchAwaiter() {
      const allDataMovies = await getFetchSearchMovies(query);

      const requiredDataMovies = allDataMovies.map(
        ({ id, title, poster_path: poster, vote_average }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
          vote_average,
        })
      );

      setSearchMovies(requiredDataMovies);
    }

    fetchAwaiter();
  }, [query, setSearchMovies]);

  return (
    <Box display="flex" justifyContent="center" mb="30px">
      <StyledSearchForm onSubmit={handleSubmitSearchMovies}>
        <SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchFormButton type="submit">
          <FcSearch size={32} />
        </SearchFormButton>
      </StyledSearchForm>
    </Box>
  );
};

SearchForm.propTypes = {
  setSearchMovies: PropTypes.func.isRequired,
};
