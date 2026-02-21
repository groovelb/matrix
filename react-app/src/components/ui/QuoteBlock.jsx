import './QuoteBlock.css';

export default function QuoteBlock({ quote }) {
  return (
    <div className="quote-block">
      <p className="quote-block__text">"{quote.text}"</p>
      <footer className="quote-block__footer">
        <span className="quote-block__character">-- {quote.character}</span>
        <span className="quote-block__film">{quote.film}</span>
      </footer>
    </div>
  );
}
