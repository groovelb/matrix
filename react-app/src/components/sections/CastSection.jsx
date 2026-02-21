import Section from '../layout/Section';
import CharacterCard from '../ui/CharacterCard';
import FadeInReveal from '../animation/FadeInReveal';
import { CHARACTERS } from '../../data/characters';
import './CastSection.css';

export default function CastSection() {
  return (
    <Section className="cast-section">
      <FadeInReveal>
        <h2 className="section-title">Characters</h2>
        <p className="section-subtitle">The rebels, the agents, and The One.</p>
      </FadeInReveal>
      <div className="cast-section__grid">
        {CHARACTERS.map((character, i) => (
          <FadeInReveal key={character.id} delay={i * 100}>
            <CharacterCard character={character} />
          </FadeInReveal>
        ))}
      </div>
    </Section>
  );
}
