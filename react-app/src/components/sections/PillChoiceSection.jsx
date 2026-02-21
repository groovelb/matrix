import PillButton from '../ui/PillButton';
import PillGlow from '../animation/PillGlow';
import { PILLS } from '../../data/pills';
import { HERO } from '../../data/hero';
import './PillChoiceSection.css';

export default function PillChoiceSection({ onChoice, visible }) {
  return (
    <div className={`pill-choice-section ${visible ? 'pill-choice-section--visible' : ''}`}>
      <p className="pill-choice-section__intro">{HERO.choiceIntro}</p>
      <div className="pill-choice-section__buttons">
        <PillGlow color="red">
          <PillButton pill={PILLS.red} onClick={onChoice} />
        </PillGlow>
        <PillGlow color="blue">
          <PillButton pill={PILLS.blue} onClick={onChoice} />
        </PillGlow>
      </div>
    </div>
  );
}
