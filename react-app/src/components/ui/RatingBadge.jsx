import './RatingBadge.css';

export default function RatingBadge({ movie }) {
  const imdbPercent = (movie.rating.imdb / 10) * 100;
  const rtPercent = movie.rating.rottenTomatoes;

  return (
    <div className="rating-badge">
      <h4 className="rating-badge__title">{movie.title}</h4>
      <span className="rating-badge__year">{movie.year}</span>
      <div className="rating-badge__bars">
        <div className="rating-badge__bar-group">
          <div className="rating-badge__bar-header">
            <span className="rating-badge__label">IMDb</span>
            <span className="rating-badge__value">{movie.rating.imdb}/10</span>
          </div>
          <div className="rating-badge__bar">
            <div
              className="rating-badge__bar-fill rating-badge__bar-fill--imdb"
              style={{ width: `${imdbPercent}%` }}
            />
          </div>
        </div>
        <div className="rating-badge__bar-group">
          <div className="rating-badge__bar-header">
            <span className="rating-badge__label">Rotten Tomatoes</span>
            <span className="rating-badge__value">{rtPercent}%</span>
          </div>
          <div className="rating-badge__bar">
            <div
              className="rating-badge__bar-fill rating-badge__bar-fill--rt"
              style={{ width: `${rtPercent}%` }}
            />
          </div>
        </div>
      </div>
      <span className="rating-badge__box-office">Box Office: {movie.boxOffice}</span>
    </div>
  );
}
