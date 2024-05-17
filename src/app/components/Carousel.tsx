'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Movie } from '../types/movies';

interface CarouselProps {
  movies: Movie[];
}

export const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    // 컴포넌트가 언마운트되면 interval을 정리
    return () => clearInterval(interval);
  }, [movies.length]); // movies 배열의 길이가 변경될 때마다 useEffect가 호출

  return (
    <div className="relative mb-[20px] h-[395px] w-[375px] ">
    <div className="w-[375px] h-[415px] overflow-hidden relative">
          {movies.length > 0 && (
          <Image
            src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].backdrop_path}`}
            alt={movies[currentMovieIndex].title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
