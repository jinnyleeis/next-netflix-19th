//메인화면에서 화면 바뀌는 메인 이미지!
//Image 태그 안에 api로 받아온 이미지 계속 바뀌게끔

import Image from 'next/image';
import { Movie } from '../types/movies';
import img03 from '../../public/icons/back.png';
import styles from './Carousel.module.css';

/*function Carousel() {
  return (
    <div className="w-[375px] h-[415px]">Carousel</div>
  )
  */
interface CarouselProps {
  movies: Movie[];
}

export const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  return (
    <div className={styles.scrollContainer}>
      {movies.map((movie: Movie) => {
        const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

        // backdrop_path가 없으면 아무 것도 렌더링x
        if (!movie.backdrop_path) {
          return null;
        }

        return (
          <div className={styles.imageContainer} key={movie.id}>
            <Image
              src={imageUrl}
              alt={movie.title}
              width={1280}
              height={2001}
              layout="responsive"
              priority
            />
            <h3>{movie.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
