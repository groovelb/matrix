import Section from '../layout/Section';
import MovieCard from '../ui/MovieCard';
import FadeInReveal from '../animation/FadeInReveal';
import { MOVIES } from '../../data/movies';
import './SynopsisSection.css';

export default function SynopsisSection() {
  return (
    <Section className="synopsis-section">
      <FadeInReveal>
        <h2 className="section-title">The Franchise</h2>
        <p className="section-subtitle">Four films. One question. What is the Matrix?</p>
      </FadeInReveal>
      <div className="synopsis-section__grid">
        {MOVIES.map((movie, i) => (
          <FadeInReveal key={movie.id} delay={i * 100}>
            <MovieCard movie={movie} />
          </FadeInReveal>
        ))}
      </div>
    </Section>
  );
}
