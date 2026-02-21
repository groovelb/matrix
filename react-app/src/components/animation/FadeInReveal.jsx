import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FadeInReveal.css';

export default function FadeInReveal({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`fade-in-reveal ${isVisible ? 'fade-in-reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
