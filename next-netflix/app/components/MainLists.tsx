import Image from 'next/image';
import { Movie } from '../types/movies';
import styles from './slide.module.css';

interface MainListProps {
  movies: Movie[];
}

const MainLists: React.FC<MainListProps> = ({ movies }) => {
  return (
    <div className={styles.scrollContainer}>
      {movies.map((movie) => {
        if (!movie.backdrop_path) {
          return null;
        }

        return (
          <div className={styles.imageContainer} key={movie.id}>
            {movie.backdrop_path && (
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                width={200}
                height={300}
                layout="fixed"
              />
            )}
            <h3>{movie.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default MainLists;
