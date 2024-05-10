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
        // 단일 API만 요청하도록 수정
        const response = await fetch('/api1');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // 데이터를 배열 안에 넣어줌
        setMovies([data]);
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
    <div className='flex flex-col w-[375px] h-[812px]'>
      <Header />
      <Carousel movies={movies[0]} />
      <Controller />
      <Navbar />
    </div>
  );
}
