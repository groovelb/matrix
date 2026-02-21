import { useState, useEffect } from 'react';
import PageShell from './components/layout/PageShell';
import EntryScreen from './components/pages/EntryScreen';
import RedPillPage from './components/pages/RedPillPage';
import BluePillPage from './components/pages/BluePillPage';
import { usePillChoice } from './hooks/usePillChoice';
import './App.css';

function App() {
  const [pillChoice, setPillChoice, resetChoice] = usePillChoice();
  const [transitioning, setTransitioning] = useState(false);
  const [flashColor, setFlashColor] = useState(null);

  const handleChoice = (choice) => {
    setFlashColor(choice === 'red' ? 'var(--color-red-pill)' : 'var(--color-blue-pill)');
    setTransitioning(true);

    setTimeout(() => {
      setPillChoice(choice);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setTransitioning(false);
        setFlashColor(null);
      }, 100);
    }, 600);
  };

  const handleBack = () => {
    setTransitioning(true);
    setTimeout(() => {
      resetChoice();
      window.scrollTo(0, 0);
      setTimeout(() => setTransitioning(false), 100);
    }, 400);
  };

  return (
    <div className="app">
      <PageShell>
        {flashColor && (
          <div
            className="app__flash"
            style={{ backgroundColor: flashColor }}
          />
        )}

        <div className={`app__content ${transitioning ? 'app__content--fading' : ''}`}>
          {pillChoice === null && <EntryScreen onChoice={handleChoice} />}
          {pillChoice === 'red' && <RedPillPage onBack={handleBack} />}
          {pillChoice === 'blue' && <BluePillPage onBack={handleBack} />}
        </div>
      </PageShell>
    </div>
  );
}

export default App;
