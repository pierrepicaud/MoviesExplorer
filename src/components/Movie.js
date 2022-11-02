import 'font-awesome/css/font-awesome.min.css';

const Movie = ({ title, index, overview, poster_path }) => {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie" key={index}>
      <div class="overlay">
      </div>
      <h3>{title}</h3>
      <button className="fav-button">
        <i className="fa fa-star-o"></i>
      </button>
      <img src={IMAGES_API + poster_path} alt={title} />
      <div className="movie-overview">{overview}</div>
    </div>
  );
};

export default Movie;
