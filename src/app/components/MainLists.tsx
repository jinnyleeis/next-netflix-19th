import Image from 'next/image';
import { Movie } from '../types/movies';

interface MainListProps {
  movies: Movie[];
}

const MainLists: React.FC<MainListProps> = ({ movies }) => {
  return (
    <div className="flex relative ml-[12px] mt-[14px] mb-[22px] w-[375px] overflow-x-auto">
      <div>

      </div>

      {movies.map((movie) => {
        if (!movie.backdrop_path) {
          return null;
        }

        return (
          <div className="flex-shrink-0 mr-[7px]" key={movie.id}>
            <div className="w-[103px] h-[161px]">
              {movie.backdrop_path && (
                <div className="relative h-[161px] w-full rounded-sm overflow-hidden">
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
