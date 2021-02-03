const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const Movie = ({ movie }) => {
  const vote = movie.vote_average;
  return (
    <div className="movie">
      <img src={IMG_API + movie.poster_path} alt={`poster ${movie.title}`} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span
          className="tag"
          style={{ color: vote >= 8 ? "green" : vote >= 6 ? "orange" : "red" }}
        >
          {movie.vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
