'use client';
import React from 'react';
import Image from 'next/image';
import { Movie } from '../types/movies';

interface CarouselProps {
  movies: Movie[];
  currentMovieIndex: number;
}

function Carousel({ movies, currentMovieIndex }:  CarouselProps) {
  return (
    <div className="relative mb-[20px] h-[395px] w-[375px]">
      <div className="h-[395px] w-[375px]">
        {movies.length > 0 && (
          <Image
            src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].backdrop_path}`}
            alt={movies[currentMovieIndex].title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
