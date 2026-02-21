import './GlitchText.css';

export default function GlitchText({ text, tag: Tag = 'h1', className = '' }) {
  return (
    <Tag className={`glitch ${className}`} data-text={text}>
      {text}
    </Tag>
  );
}
