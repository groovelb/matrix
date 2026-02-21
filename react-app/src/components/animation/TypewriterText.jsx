import { useEffect, useRef } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import './TypewriterText.css';

export default function TypewriterText({ text, speed = 80, delay = 0, onComplete, className = '' }) {
  const { displayText, isComplete } = useTypewriter(text, speed, delay);
  const calledRef = useRef(false);

  useEffect(() => {
    if (isComplete && onComplete && !calledRef.current) {
      calledRef.current = true;
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <span className={`typewriter ${className}`}>
      {displayText}
      <span className={`typewriter__cursor ${isComplete ? 'typewriter__cursor--blink' : ''}`}>_</span>
    </span>
  );
}
