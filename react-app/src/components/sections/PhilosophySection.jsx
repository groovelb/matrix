import { useState } from 'react';
import Section from '../layout/Section';
import PhilosophyAccordion from '../ui/PhilosophyAccordion';
import FadeInReveal from '../animation/FadeInReveal';
import { PHILOSOPHY_THEMES } from '../../data/philosophy';
import './PhilosophySection.css';

export default function PhilosophySection() {
  const [openId, setOpenId] = useState(null);

  return (
    <Section className="philosophy-section">
      <FadeInReveal>
        <h2 className="section-title">Philosophy</h2>
        <p className="section-subtitle">The ideas behind the illusion.</p>
      </FadeInReveal>
      <div className="philosophy-section__list">
        {PHILOSOPHY_THEMES.map((theme, i) => (
          <FadeInReveal key={theme.id} delay={i * 100}>
            <PhilosophyAccordion
              theme={theme}
              isOpen={openId === theme.id}
              onToggle={() => setOpenId(openId === theme.id ? null : theme.id)}
            />
          </FadeInReveal>
        ))}
      </div>
    </Section>
  );
}
