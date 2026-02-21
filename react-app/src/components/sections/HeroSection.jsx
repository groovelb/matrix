import { useState } from 'react';
import GlitchText from '../animation/GlitchText';
import TypewriterText from '../animation/TypewriterText';
import TerminalPrompt from '../ui/TerminalPrompt';
import { HERO } from '../../data/hero';
import './HeroSection.css';

export default function HeroSection({ onTypingComplete }) {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <div className="hero-section">
      <div className="hero-section__terminal">
        <TerminalPrompt />
      </div>
      <div className="hero-section__typing">
        <TypewriterText
          text={HERO.prompt}
          speed={80}
          delay={1500}
          onComplete={() => setTimeout(() => setShowTitle(true), 500)}
        />
      </div>
      <div className={`hero-section__title ${showTitle ? 'hero-section__title--visible' : ''}`}>
        <GlitchText text={HERO.title} />
      </div>
      <div
        className={`hero-section__subtitle ${showTitle ? 'hero-section__subtitle--visible' : ''}`}
        onTransitionEnd={() => {
          if (showTitle && !showSubtitle) {
            setShowSubtitle(true);
            onTypingComplete?.();
          }
        }}
      >
        <p>{HERO.subtitle}</p>
      </div>
    </div>
  );
}
