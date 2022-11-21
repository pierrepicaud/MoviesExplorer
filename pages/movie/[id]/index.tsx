import axios from 'axios'
import { server, image_server } from '../../../config'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Meta from '../../../components/Meta'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const Movie = ({ movie }: any) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={movie.title} />
      <div className="px-3">
        <Image
          src={`${image_server}/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md"
          alt={movie.title}
        />
        <h1 className="font-bold text-xl  my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">
          Genres:{' '}
          <span className="font-bold">
            {movie.genres.map((genre: { name: any }) => genre.name).join(', ')}
          </span>
        </p>
        <p className="text-gray-600 text-sm">
          Release Date: <span className="font-bold">{movie.release_date}</span>
        </p>
      </div>
    </div>
  )
}

export default Movie

export async function getStaticProps(context: { params: { id: any } }) {
  const { id } = context.params
  const res = await axios(
    `${server}/movie/${id}?api_key=${publicRuntimeConfig.API_KEY}&language=en-US&page=1`,
  )
  const movie = res.data
  return {
    props: { movie },
  }
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/movie/popular?api_key=${publicRuntimeConfig.API_KEY}&language=en-US&page=1`,
  )
  const movies = res.data.results

  const paths = movies.map((movie: { id: { toString: () => any } }) => ({
    params: { id: movie.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}
