'use client';
import { Movie } from '@/app/types/movies';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import searchIcon from '@/public/icons/search.svg';
import deleteIcon from '@/public/icons/delete.svg';
import SearchLists from '../components/SearchLists';


function Search() {
const [inputValue, setInputValue] = useState("");
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(movies);

  return(
  <div className='w-[375px] h-[768px] flex flex-col'>
    <div className='flex flex-row bg-[#424242]'>
      <Image
        src={searchIcon}
        alt= 'search'
        width={20}
        height={20}
      />
     <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a show, movie, genre, e.t.c."
        className='w-[270px] bg-[#424242]'
      />
      <Image
        src={deleteIcon}
        alt= 'delete'
        width={15}
        height={15}
        onClick={() => setInputValue("")}
      />
    </div>
    <div>Top Searches</div>
    <div className='h-[497ps] overflow-y-auto'>
      {inputValue.trim() === '' ? (
        movies.map((movieList, index) => (
          <div key={index}>
            {movieList.map((movie, movieIndex) => (
            <SearchLists key={movieIndex} movie={movie} />
            ))}
          </div>
        ))
      ) : (
        movies
        .flat()
        .filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()))
        .map((filteredMovie, index) => (
          <SearchLists key={index} movie={filteredMovie} />
        ))
      )
      }
    </div>
  </div>
)
}

export default Search;
