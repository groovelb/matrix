import { useState } from 'react';
import HeroSection from '../sections/HeroSection';
import PillChoiceSection from '../sections/PillChoiceSection';
import './EntryScreen.css';

export default function EntryScreen({ onChoice }) {
  const [showPills, setShowPills] = useState(false);

  return (
    <div className="entry-screen">
      <HeroSection onTypingComplete={() => setShowPills(true)} />
      <PillChoiceSection onChoice={onChoice} visible={showPills} />
    </div>
  );
}
