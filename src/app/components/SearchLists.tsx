import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types/movies";

interface SearchListProps {
  movie: Movie;
}

function SearchLists({ movie }: SearchListProps) {
  return (
    <div>
        {movie.backdrop_path && (
        <div>
            <Link href={`/detail/${movie.id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                width={146}
                height = {76}
            />
            <span>{movie.title}</span>
            </Link>
        </div>
        )}
    </div>
  );
}

export default SearchLists;
