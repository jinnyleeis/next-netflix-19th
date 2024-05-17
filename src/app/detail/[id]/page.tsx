// ./app/detail/[id]/page.tsx

import { getMovieDetailsById } from '../../utils/movieAPI';
import { Movie } from '../../types/movies';
import Image from 'next/image';

interface DetailProps {
  params: { id: string };
}

export async function Detail({ params }: DetailProps) {
  const movieDetail: Movie = await getMovieDetailsById(params.id);
  const url = `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`;

  //ex) interstella : http://localhost:3000/detail/157336
  return (
    <div className='w-[375px] h-[768px]'>
      {/*<h1>Movie ID: {params.id}</h1>*/}
      <Image
        src={movieDetail.backdrop_path ? url : ''}
        width={800}
        height={1200}
        alt="movie poster"
        className="w-full"
      />
       <h2 className="ml-[16px] mt-[22px] text-[20.92px] font-bold">{movieDetail.title}</h2>
      <h1>{movieDetail.overview}</h1>
      {/* ID에 따른 정보 렌더링 */}
    </div>
  );
}

export default Detail;
