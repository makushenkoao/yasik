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

export const getMovieDetails = async (id: number) => {
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

export const getMovieImages = async (id?: number) => {
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

export const getMovieTrailer = async (id?: number | string) => {
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

interface GetMovieByGenresArgs {
  genres?: number[];
  page?: number;
}

export const getMovieByGenres = async (args: GetMovieByGenresArgs) => {
  const {page = 1, genres = []} = args;

  try {
    const response = await axios.get(
      `${config.THEMOVIEDB_URL}/discover/movie`,
      {
        params: {
          sort_by: 'popularity.desc',
          page,
          include_adult: false,
          include_video: false,
          'vote_count.gte': 1000,
          with_genres: genres?.join(','),
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
        },
      },
    );

    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies by genres:', error);
    throw error;
  }
};

export const getMovieDetailsByGenres = async (args: GetMovieByGenresArgs) => {
  const {page = 1, genres = []} = args;

  try {
    const response = await axios.get(
      `${config.THEMOVIEDB_URL}/discover/movie`,
      {
        params: {
          sort_by: 'popularity.desc',
          page,
          include_adult: false,
          include_video: false,
          'vote_count.gte': 1000,
          with_genres: genres?.join(','),
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
        },
      },
    );

    const movies = response.data.results;

    // Для каждого фильма получаем детальную информацию
    const moviesWithDetails = await Promise.all(
      movies.map(async (movie: any) => {
        const detailsResponse = await axios.get(
          `${config.THEMOVIEDB_URL}/movie/${movie.id}`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${config.THEMOVIEDB_KEY}`,
            },
          },
        );
        const details = detailsResponse.data;

        // Объединяем базовую информацию о фильме и детали в один объект
        return {
          ...movie,
          details,
        };
      }),
    );

    return moviesWithDetails;
  } catch (error) {
    console.error('Error fetching movies by genres:', error);
    throw error;
  }
};

interface SearchMoviesArgs {
  page?: number;
  query: string;
}

export const searchMovies = async (args: SearchMoviesArgs) => {
  const {page = 1, query} = args;

  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          query: query,
          page: page,
        },
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

interface FilterMoviesArgs {
  page?: number;
  sortBy: string;
  genres: number[];
}

export const filterMovies = async (args: FilterMoviesArgs) => {
  const {page = 1, genres, sortBy} = args;

  const params = {
    page: page,
    with_genres: genres,
    sort_by: 'popularity.desc',
  };

  if (sortBy !== 'default') {
    params.sort_by = sortBy;
  }

  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params,
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
