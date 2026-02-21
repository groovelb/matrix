import Section from '../layout/Section';
import SceneCard from '../ui/SceneCard';
import FadeInReveal from '../animation/FadeInReveal';
import { FAMOUS_SCENES } from '../../data/scenes';
import './ScenesSection.css';

export default function ScenesSection() {
  return (
    <Section className="scenes-section">
      <FadeInReveal>
        <h2 className="section-title">Iconic Scenes</h2>
        <p className="section-subtitle">Moments that redefined cinema.</p>
      </FadeInReveal>
      <div className="scenes-section__grid">
        {FAMOUS_SCENES.map((scene, i) => (
          <FadeInReveal key={scene.id} delay={i * 100}>
            <SceneCard scene={scene} />
          </FadeInReveal>
        ))}
      </div>
    </Section>
  );
}
