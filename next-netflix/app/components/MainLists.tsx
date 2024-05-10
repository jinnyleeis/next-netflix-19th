import Image from 'next/image';
import { Movie } from '../types/movies';
//import styles from './slide.module.css';

interface MainListProps {
  movies: Movie[];
}

const MainLists: React.FC<MainListProps> = ({ movies }) => {
  return (
    <div className="flex relative w-[375px] overflow-x-auto">
      {movies.map((movie) => {
        if (!movie.backdrop_path) {
          return null;
        }

        return (
          <div className="flex-shrink-0 mr-4" key={movie.id}>
            <div className="w-[103px] h-[161px]">
              {movie.backdrop_path && (
                <div className="relative h-[161px] w-full">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainLists;
