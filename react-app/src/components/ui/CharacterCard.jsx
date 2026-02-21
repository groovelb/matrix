import { useState } from 'react';
import './CharacterCard.css';

export default function CharacterCard({ character }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`character-card ${expanded ? 'character-card--expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="character-card__icon">
        {character.name[0]}
      </div>
      <h3 className="character-card__name">{character.name}</h3>
      <p className="character-card__role">{character.role}</p>
      <p className="character-card__actor">{character.actor}</p>
      <div className="character-card__details">
        <p className="character-card__bio">{character.bio}</p>
        <blockquote className="character-card__quote">
          "{character.quote}"
        </blockquote>
        <div className="character-card__stats">
          <span>Films: {character.stats.films}</span>
          <span>Since: {character.stats.firstAppearance}</span>
        </div>
      </div>
    </div>
  );
}
