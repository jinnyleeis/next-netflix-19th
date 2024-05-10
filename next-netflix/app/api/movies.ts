// app/api/movies.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return NextResponse.json({ hell: 'world' });
  /* try {
    const res = await fetch(URL);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${data.status_message}`);
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    // Asserting that error is of type Error
    const message = (error as Error).message;
    return new NextResponse(
      JSON.stringify({
        message: 'Failed to fetch data from TMDB.',
        error: message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
       },
     );
  } */
}
