import './SceneCard.css';

export default function SceneCard({ scene }) {
  return (
    <div className="scene-card">
      <div className="scene-card__header">
        <h4 className="scene-card__title">{scene.title}</h4>
        <span className="scene-card__timestamp">{scene.timestamp}</span>
      </div>
      <span className="scene-card__film">{scene.film}</span>
      <p className="scene-card__description">{scene.description}</p>
    </div>
  );
}
