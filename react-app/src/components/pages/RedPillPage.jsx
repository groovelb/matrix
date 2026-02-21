import BackButton from '../ui/BackButton';
import PhilosophySection from '../sections/PhilosophySection';
import ScenesSection from '../sections/ScenesSection';
import WorldBuildingSection from '../sections/WorldBuildingSection';
import QuotesSection from '../sections/QuotesSection';
import './RedPillPage.css';

export default function RedPillPage({ onBack }) {
  return (
    <div className="red-pill-page">
      <BackButton onClick={onBack} />
      <div className="red-pill-page__header">
        <h2 className="red-pill-page__title">Red Pill</h2>
        <p className="red-pill-page__subtitle">How deep does the rabbit hole go?</p>
      </div>
      <PhilosophySection />
      <WorldBuildingSection />
      <ScenesSection />
      <QuotesSection />
    </div>
  );
}
