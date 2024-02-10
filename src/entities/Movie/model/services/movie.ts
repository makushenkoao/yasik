import {getRandomInt} from '@shared/libs/utils/getRandomInt/getRandomInt.ts';
import axios from 'axios';
import config from '@shared/credentials/credentials.json';

export async function getRandomMovie() {
  const totalPages = 500;
  const randomPage = getRandomInt(1, totalPages);

  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular',
    {
      params: {
        page: randomPage,
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
      },
    },
  );

  const movies = response.data.results;
  const randomIndex = getRandomInt(0, movies.length - 1);
  const randomMovie = movies[randomIndex];

  return randomMovie;
}
