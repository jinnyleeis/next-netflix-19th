const API_KEY = process.env.TMDB_API_KEY || 'your_default_api_key';

export async function getMovieNowPlaying() {
  const previewMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    { cache: 'force-cache' },
  );

  const previewMovieData = await previewMovieResponse.json();

  return previewMovieData.results;
}

// 인기 있는 영화 데이터를 반환하는 함수
export async function getMoviePopular() {
  const popularMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    { cache: 'force-cache' },
  );

  const popularMovieData = await popularMovieResponse.json();

  return popularMovieData.results;
}

// top-rated 된 영화 데이터를 반환하는 함수
export async function getMovieTopRated() {
  const topRatedMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    { cache: 'force-cache' },
  );

  const topRatedMovieData = await topRatedMovieResponse.json();

  return topRatedMovieData.results;
}

export async function getMovieUpComing() {
  const upComingMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    { cache: 'force-cache' },
  );

  const upComingMovieData = await upComingMovieResponse.json();

  return upComingMovieData.results;
}
