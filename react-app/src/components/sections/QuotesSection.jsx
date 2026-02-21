import Section from '../layout/Section';
import QuoteBlock from '../ui/QuoteBlock';
import { QUOTES } from '../../data/quotes';
import './QuotesSection.css';

export default function QuotesSection() {
  return (
    <Section className="quotes-section">
      <h2 className="section-title">Iconic Quotes</h2>
      <p className="section-subtitle">Words that transcended the screen.</p>
      <div className="quotes-section__marquee">
        <div className="quotes-section__track">
          {QUOTES.map((quote) => (
            <QuoteBlock key={quote.id} quote={quote} />
          ))}
          {QUOTES.map((quote) => (
            <QuoteBlock key={`dup-${quote.id}`} quote={quote} />
          ))}
        </div>
      </div>
    </Section>
  );
}
