import BackButton from '../ui/BackButton';
import SynopsisSection from '../sections/SynopsisSection';
import CastSection from '../sections/CastSection';
import RatingsSection from '../sections/RatingsSection';
import TimelineSection from '../sections/TimelineSection';
import QuotesSection from '../sections/QuotesSection';
import './BluePillPage.css';

export default function BluePillPage({ onBack }) {
  return (
    <div className="blue-pill-page">
      <BackButton onClick={onBack} />
      <div className="blue-pill-page__header">
        <h2 className="blue-pill-page__title">Blue Pill</h2>
        <p className="blue-pill-page__subtitle">The story. The cast. The numbers.</p>
      </div>
      <SynopsisSection />
      <CastSection />
      <RatingsSection />
      <TimelineSection />
      <QuotesSection />
    </div>
  );
}
