// ./app/detail/[id]/page.tsx

import { getMovieDetailsById } from '../../utils/movieAPI';
import { Movie } from '../../types/movies';


interface DetailProps {
  params: { id: string };
}

export async function Detail({ params }: DetailProps) {
  const movieDetail: Movie = await getMovieDetailsById(params.id);
  //ex) interstella : http://localhost:3000/detail/157336
  return (
    <div>
      <h1>Movie ID: {params.id}</h1>
      <h1>{movieDetail.title}</h1>
      {/* ID에 따른 정보 렌더링 */}
    </div>
  );
}

export default Detail;
