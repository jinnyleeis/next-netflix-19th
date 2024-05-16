import { Movie } from '../types/movies';

const API_KEY = process.env.TMDB_API_KEY || 'your_default_api_key';

export const getMovieDetailsById = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
  const data = await res.json();

  return data;
};

export const fetchMoviesData = async (category: string) => {
  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();

  if (!data.results) {
    throw new Error(
      `Failed to fetch ${category} movies: ${data.status_message || 'No results found'}`,
    );
  }

  return data.results;
};

export const fetchAllCategories = async (): Promise<Movie[][]> => {
  const categories = ['top_rated', 'popular', 'upcoming', 'now_playing'];

  try {
    const movies = await Promise.all(categories.map((category) => fetchMoviesData(category)));

    return movies;
  } catch (error) {
    console.error('Failed to fetch movie data:', error);
    throw error;
  }
};
