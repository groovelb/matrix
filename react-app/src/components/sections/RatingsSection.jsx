import Section from '../layout/Section';
import RatingBadge from '../ui/RatingBadge';
import FadeInReveal from '../animation/FadeInReveal';
import { MOVIES } from '../../data/movies';
import './RatingsSection.css';

export default function RatingsSection() {
  return (
    <Section className="ratings-section">
      <FadeInReveal>
        <h2 className="section-title">Ratings</h2>
        <p className="section-subtitle">How the world received each chapter.</p>
      </FadeInReveal>
      <div className="ratings-section__grid">
        {MOVIES.map((movie, i) => (
          <FadeInReveal key={movie.id} delay={i * 100}>
            <RatingBadge movie={movie} />
          </FadeInReveal>
        ))}
      </div>
    </Section>
  );
}
