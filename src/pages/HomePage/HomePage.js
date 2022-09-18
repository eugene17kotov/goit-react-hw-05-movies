import { useEffect, useState } from 'react';

import { getFetchTrending } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { Box } from 'utils/Box';
import { StyledTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const allDataMovies = await getFetchTrending();
      const requiredDataMovies = allDataMovies.map(
        ({ id, title, poster_path: poster, vote_average }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
          vote_average,
        })
      );
      setMovies(requiredDataMovies);
    };
    fetchTrending();
  }, []);

  return (
    <Box p="30px 0">
      <StyledTitle>Trending Today</StyledTitle>

      {movies && <MoviesList movies={movies} />}
    </Box>
  );
};

export default HomePage;
