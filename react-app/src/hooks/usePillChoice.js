import { useState, useCallback } from 'react';

export function usePillChoice() {
  const [pillChoice, setPillChoiceState] = useState(() => {
    return sessionStorage.getItem('matrix-pill-choice') || null;
  });

  const setPillChoice = useCallback((choice) => {
    setPillChoiceState(choice);
    sessionStorage.setItem('matrix-pill-choice', choice);
  }, []);

  const resetChoice = useCallback(() => {
    setPillChoiceState(null);
    sessionStorage.removeItem('matrix-pill-choice');
  }, []);

  return [pillChoice, setPillChoice, resetChoice];
}
