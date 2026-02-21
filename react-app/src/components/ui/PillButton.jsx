import './PillButton.css';

export default function PillButton({ pill, onClick }) {
  return (
    <button
      className={`pill-button pill-button--${pill.id}`}
      onClick={() => onClick(pill.id)}
    >
      <div className="pill-button__capsule" />
      <span className="pill-button__label">{pill.label}</span>
      <p className="pill-button__tagline">{pill.tagline}</p>
    </button>
  );
}
