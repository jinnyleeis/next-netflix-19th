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
  <div>
    <div>
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
      />
      <Image
        src={deleteIcon}
        alt= 'delete'
        width={20}
        height={20}
        onClick={() => setInputValue("")}
      />
    </div>
    <div>Top Searches</div>

    {movies.map((movieList, index) => (
  <div key={index}>
    {movieList.map((movie, movieIndex) => (
      <SearchLists key={movieIndex} movie={movie} />
    ))}
  </div>
))}


  </div>
)
}

export default Search;
