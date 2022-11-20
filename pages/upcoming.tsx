import axios from 'axios'
import Hero from '../components/Hero'
import { server } from '../config'
import MovieGrid from '../components/MovieGrid'

function upcoming({ movies }: any) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <MovieGrid movies={movies.results} title="Up Coming Movies" />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  )
  const movies = res.data
  return {
    props: { movies },
  }
}

export default upcoming
