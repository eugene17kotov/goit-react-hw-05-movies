import { useEffect, useState } from 'react';

import { getFetchTrending } from 'services/api';
import { Trending } from 'components/Trending/Trending';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { Box } from 'utils/Box';

// import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const allDataMovies = await getFetchTrending();
      const requiredDataMovies = allDataMovies.map(
        ({ id, title, poster_path: poster }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
        })
      );
      setMovies(requiredDataMovies);
    };
    fetchTrending();
  }, []);

  return (
    <Box>
      <Trending>{movies && <MoviesList movies={movies} />}</Trending>

      {/* <MovieDetails movieDetails={} /> */}
    </Box>
  );
};
