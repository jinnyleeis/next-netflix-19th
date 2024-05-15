'use client';

import Header from '../components/Header';
import Controller from '../components/Controller';
import Carousel from '../components/Carousel';
import MovieList from '../components/MainLists';
import { useEffect, useState } from 'react';
import { Movie } from '../types/movies';

export default function Main() {
  const [movies, setMovies] = useState<Movie[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const mainListsTitle = [
    'Previews',
    'New Releases',
    'Popular on Netflix ',
    'Top 10 in Korea Today'
  ];

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-[1012px] w-[375px] overflow-y-auto ">
      <Header />
      <Carousel movies={movies[0]} />
      <Controller />
      {movies.map((movieList, index) => (
        <div key={index}>
          <h2 className="ml-[16px] mt-[22px] text-[20.92px] font-bold">{mainListsTitle[index]}</h2>
          <MovieList
            movies={movieList}
            itemClass={index === 0 ? 'rounded-full' : ''}
            isCircular={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
