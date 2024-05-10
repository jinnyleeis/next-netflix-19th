import Image from 'next/image';
import { Movie } from '../types/movies';

interface MainListProps {
  movies: Movie[];
  itemClass: string;
  isCircular: boolean;  
}

const MainLists: React.FC<MainListProps> = ({ movies, itemClass, isCircular }) => {
  return (
    <div className="flex relative ml-[12px] mt-[14px] mb-[22px] w-[375px] overflow-x-auto">
      {movies.map((movie) => {
        if (!movie.backdrop_path) {
          return null;
        }

        const imageSize = isCircular ? "103px" : "161px";  

        return (
          <div className="flex-shrink-0 mr-[7px]" key={movie.id}>
            <div style={{ width: 103, height: imageSize }}>  
              {movie.backdrop_path && (
                <div className={`relative h-full w-full overflow-hidden ${itemClass}`}>
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
