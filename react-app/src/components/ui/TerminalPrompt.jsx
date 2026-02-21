import './TerminalPrompt.css';

export default function TerminalPrompt({ text = '' }) {
  return (
    <div className="terminal-prompt">
      <span className="terminal-prompt__prefix">&gt;</span>
      <span className="terminal-prompt__text">{text}</span>
      <span className="terminal-prompt__cursor" />
    </div>
  );
}
