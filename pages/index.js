import Head from "next/head";
import getConfig from "next/config";
import Movie from "../src/components/Movie";
import { useState, useEffect } from "react";
import { Button, Container, Row, Col} from "react-bootstrap";



const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function Home(initialData) {
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchResults(initialData.trendingMovies.results);
  }, [initialData]);

  const handleInputs = (event) => {
    let { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    setSearchTerm(event.target.value);
  };

  const search = async (event) => {
    event.preventDefault();
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.apiKey}&language=en-US&page=1&include_adult=false&query=${formInput.searchTerm}`
    );

    movies = await movies.json();
    setSearchResults(movies.results);
  };

  return (
    <div className="container">
      <h1 className="page-title">Upcoming Movies</h1>
      <div className="red-background"></div>
      <Head>
        <title>Movies Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col>
          <form className="search-form" onSubmit={search}>
            <input
              className="search"
              name="searchTerm"
              value={searchTerm}
              onChange={handleInputs}
              type="text"
              required
              placeholder="Search for movies"
            />
            <button className="btn-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </Col>
      </Row>
      <div className="movie-search-results-grid">
        {searchResults.map((each) => {
          return (
            <Movie
              title={each.title}
              key={each.id}
              index={each.id}
              poster_path={each.poster_path}
              overview={each.overview}
            ></Movie>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let trendingMovies = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${serverRuntimeConfig.apiKey}`
  );
  trendingMovies = await trendingMovies.json();

  return {
    props: { trendingMovies }, // will be passed to the page component as props
  };
}
