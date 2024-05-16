'use client';
import { Movie } from '@/app/types/movies';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import searchIcon from '@/public/icons/search.svg';
import deleteIcon from '@/public/icons/delete.svg';
import SearchLists from '../components/SearchLists';

export default function Search() {
  const [movies, setMovies] = useState<Movie[][]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Failed to load movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Image src={searchIcon} alt="search" width={20} height={20} />

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        <Image
          src={deleteIcon}
          alt="delete"
          width={20}
          height={20}
          onClick={() => setInputValue('')}
        />
      </div>
      <div>Top Searches</div>

      {inputValue.trim() === ''
        ? movies.map((movieList, index) => (
            <div key={index}>
              {movieList.map((movie, movieIndex) => (
                <SearchLists key={movieIndex} movie={movie} />
              ))}
            </div>
          ))
        : movies
            .flat()
            .filter((movie) => movie.title.toLowerCase().includes(inputValue.toLowerCase()))
            .map((filteredMovie, index) => <SearchLists key={index} movie={filteredMovie} />)}
    </div>
  );
}
