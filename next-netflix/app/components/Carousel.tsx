import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Movie } from '../types/movies';

interface CarouselProps {
  movies: Movie[];
}

export const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    // 일정 시간마다 currentMovieIndex를 업데이트하여 다음 영화 이미지를 보여줌
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5초마다 변경, 변경하려는 시간 간격에 맞게 조정 가능

    // 컴포넌트가 언마운트되면 interval을 정리
    return () => clearInterval(interval);
  }, [movies.length]); // movies 배열의 길이가 변경될 때마다 useEffect가 호출되도록 설정

  return (
    <div className="w-[375px] h-[415px] relative">
      {movies.length > 0 && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].backdrop_path}`}
          alt={movies[currentMovieIndex].title}
          width={375}
          height={415}
          layout="responsive"
          priority
        />
      )}
    </div>
  );
};

export default Carousel;
