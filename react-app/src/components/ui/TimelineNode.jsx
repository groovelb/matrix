import './TimelineNode.css';

export default function TimelineNode({ movie, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-node ${isLeft ? 'timeline-node--left' : 'timeline-node--right'}`}>
      <div className="timeline-node__dot" />
      <div className="timeline-node__card">
        <span className="timeline-node__year">{movie.year}</span>
        <h4 className="timeline-node__title">{movie.title}</h4>
        <p className="timeline-node__tagline">"{movie.tagline}"</p>
        <p className="timeline-node__synopsis">{movie.synopsis}</p>
      </div>
    </div>
  );
}
