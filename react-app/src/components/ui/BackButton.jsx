import './BackButton.css';

export default function BackButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick}>
      <span className="back-button__arrow">&lt;</span>
      <span className="back-button__text">RETURN TO CHOICE</span>
    </button>
  );
}
