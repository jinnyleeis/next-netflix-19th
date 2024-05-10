import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.TMDB_API_KEY || 'your_default_api_key';

// Function to fetch movies data from TMDB based on category
async function fetchMoviesData(category: string, apiKey: string) {
  const urlMap: { [key: string]: string } = {
    nowPlaying: 'now_playing',
    popular: 'popular',
    topRated: 'top_rated',
    upcoming: 'upcoming',
  };

  const url = `https://api.themoviedb.org/3/movie/${urlMap[category] || 'popular'}?api_key=${apiKey}`;
  const response = await fetch(url, { cache: 'force-cache' });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Failed to fetch ${category} movies: ${data.status_message}`);
  }
  return data.results;
}

export async function GET(request: NextRequest) {
  const category = 'popular';

  try {
    const movies = await fetchMoviesData(category, API_KEY);
    return new NextResponse(JSON.stringify(movies), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return new NextResponse(
      JSON.stringify({
        message: `Failed to fetch data from TMDB for ${category}.`,
        error: (error as Error).message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
