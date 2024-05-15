const API_KEY = process.env.TMDB_API_KEY || 'your_default_api_key';

export const getMovieDetailsById = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
  const data = await res.json();

  return data;
};
