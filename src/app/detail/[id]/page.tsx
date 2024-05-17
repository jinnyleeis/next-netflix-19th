// ./app/detail/[id]/page.tsx

import { getMovieDetailsById } from '../../utils/movieAPI';
import { Movie } from '../../types/movies';
import Image from 'next/image';
import Play from '@/public/icons/play.svg';

interface DetailProps {
  params: { id: string };
}

export default async function Detail({ params }: DetailProps) {
  const movieDetail: Movie = await getMovieDetailsById(params.id);
  const url = `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`;

  //ex) interstella : http://localhost:3000/detail/157336
  return (
    <div className="h-[768px] w-[375px]">
      {/*<h1>Movie ID: {params.id}</h1>*/}
      <div className="relative h-[415px] w-[375px] overflow-hidden">
        <>
          <Image
            src={movieDetail.backdrop_path ? url : ''}
            alt="movie poster"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* 그라데이션 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '40%',
              backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
            }}
          ></div>
        </>
      </div>
      <button className="mx-auto mb-[32px] mt-[13px] flex h-[45px] w-[303px] cursor-pointer items-center justify-center gap-2.5 rounded-md border-none bg-[#C4C4C4]">
        <Image src={Play} alt="play" width={18} height={21.6} />
        <span className="text-play font-semibold text-[#000000]">Play</span>
      </button>
      <h2 className="ml-[32px] text-[26.75px] font-bold">{movieDetail.title}</h2>
      <div className="mx-auto mt-[24px] h-[170px] w-[311px] overflow-y-auto text-[11.14px]/[14.17px] font-normal">
        {movieDetail.overview}
      </div>
      {/* ID에 따른 정보 렌더링 */}
    </div>
  );
}
