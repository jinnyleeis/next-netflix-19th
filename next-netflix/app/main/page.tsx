// app/main/page.tsx
// app/main/page.tsx
'use client';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Controller from '../components/Controller';
import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';
import { Movie } from '../types/movies';


export default function Main() {
  const [movies, setMovies] = useState<Movie[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apis = ['/api1', '/api2', '/api3', '/api4'];
        const responses = await Promise.all(apis.map((api) => fetch(api)));
        const data = await Promise.all(
          responses.map((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          }),
        );
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load movies:', error);
        setError('Failed to load movies.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 이거 대신 로딩중에 랜딤 페이지 보여주면 될듯
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      {movies.map((movieList, index) => (
        <Carousel key={index} movies={movieList} />
      ))}
      <Controller />
      <Navbar />
    </div>
  );
}
