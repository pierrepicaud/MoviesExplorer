import Image from 'next/image'
import Link from 'next/link'
import { image_server } from '../config'

function MovieCard({ movie }: any) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div
        className="bg-white shadow-sm rounded-md cursor-pointer h-full hover:scale-105"
        data-testid={`movie-${movie.id}`}
      >
        <Image
          src={`${image_server}/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={movie.title}
        ></Image>
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
