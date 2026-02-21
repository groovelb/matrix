import './MovieCard.css';

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <span className="movie-card__year">{movie.year}</span>
        <span className="movie-card__runtime">{movie.runtime}</span>
      </div>
      <h3 className="movie-card__title">{movie.title}</h3>
      <p className="movie-card__tagline">"{movie.tagline}"</p>
      <p className="movie-card__synopsis">{movie.synopsis}</p>
      <div className="movie-card__footer">
        <div className="movie-card__rating">
          <span className="movie-card__rating-label">IMDb</span>
          <span className="movie-card__rating-value">{movie.rating.imdb}</span>
        </div>
        <div className="movie-card__rating">
          <span className="movie-card__rating-label">RT</span>
          <span className="movie-card__rating-value">{movie.rating.rottenTomatoes}%</span>
        </div>
        <span className="movie-card__box-office">{movie.boxOffice}</span>
      </div>
    </div>
  );
}
