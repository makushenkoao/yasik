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

export const getMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(
      `${config.THEMOVIEDB_URL}/movie/${id}?language=en-US`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
        },
      },
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMovieImages = async (id: string) => {
  try {
    const response = await axios.get(
      `${config.THEMOVIEDB_URL}/movie/${id}/images`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
        },
      },
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMovieTrailer = async (id: string) => {
  try {
    const response = await axios.get(
      `${config.THEMOVIEDB_URL}/movie/${id}/videos`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};

export const getMovieGenres = async () => {
  try {
    const response = await axios.get(
      `${config.THEMOVIEDB_URL}/genre/movie/list`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
        },
      },
    );

    return response.data.genres;
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};
