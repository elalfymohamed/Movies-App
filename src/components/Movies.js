import Movie from "./Movie";
import Spinner from "./Spinner";
const Movies = ({ movies, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="movie-container ">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
