import Section from '../layout/Section';
import TimelineNode from '../ui/TimelineNode';
import FadeInReveal from '../animation/FadeInReveal';
import { MOVIES } from '../../data/movies';
import './TimelineSection.css';

export default function TimelineSection() {
  return (
    <Section className="timeline-section">
      <FadeInReveal>
        <h2 className="section-title">Timeline</h2>
        <p className="section-subtitle">1999 - 2021. The evolution of the franchise.</p>
      </FadeInReveal>
      <div className="timeline-section__track">
        <div className="timeline-section__line" />
        {MOVIES.map((movie, i) => (
          <FadeInReveal key={movie.id} delay={i * 150}>
            <TimelineNode movie={movie} index={i} />
          </FadeInReveal>
        ))}
      </div>
    </Section>
  );
}
