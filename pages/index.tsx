import axios from 'axios'
import Hero from '../components/Hero'
import { server } from '../config'
import MovieGrid from '../components/MovieGrid'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Home({ movies }: any) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <MovieGrid movies={movies.results} title="What's Popular?" />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/movie/popular?api_key=${publicRuntimeConfig.API_KEY}&language=en-US&page=1`,
  )
  const movies = res.data
  return {
    props: { movies },
  }
}
