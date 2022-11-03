import axios from "axios";
import Hero from "../components/Hero";
import { server } from "../config";
import PopularMovie from "../components/PopularMovie";

export default function Home({ movies }) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <PopularMovie movies={movies.results}/>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(`${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data;
  return {
    props: { movies },
  };
}

