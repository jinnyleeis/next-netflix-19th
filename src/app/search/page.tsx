'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import searchIcon from '@/public/icons/search.svg';
import deleteIcon from '@/public/icons/delete.svg';
import SearchLists from '../components/SearchLists';
import { Movie } from '@/app/types/movies';
import removeDuplicates from '@/app/utils/etc';

export default function Search() {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api',{
          headers: {
            'X-Client-Request': 'true' 
            // 클라이언트에서 요청하는 것을 나타내는 헤더 추가(직접 주소창에 입력하는 것과 구분)
          }});
        const data: Movie[][] = await response.json();

        //중복 제거
        const flatData = data.flat();
        const filteredMovies = removeDuplicates(flatData);

        setAllMovies(filteredMovies);
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
          placeholder="Search for a show, movie, genre, etc."
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
        ? allMovies.map((movie, index) => <SearchLists key={index} movie={movie} />)
        : allMovies
            .filter((movie) => movie.title.toLowerCase().includes(inputValue.toLowerCase()))
            .map((filteredMovie, index) => <SearchLists key={index} movie={filteredMovie} />)}
    </div>
  );
}
