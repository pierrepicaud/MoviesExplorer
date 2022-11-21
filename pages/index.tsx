import axios from 'axios'
import Hero from '../components/Hero'
import { server } from '../config'
import MovieGrid from '../components/MovieGrid'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

// "71661be18f2fafefa4966ae143fa2251" = "71661be18f2fafefa4966ae143fa2251"

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
    `${server}/movie/popular?api_key=${"71661be18f2fafefa4966ae143fa2251"}&language=en-US&page=1`,
  )
  const movies = res.data
  return {
    props: { movies },
  }
}
