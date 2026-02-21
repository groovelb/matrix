import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(text, speed = 80, delay = 0) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started || index >= text.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [started, index, text.length, speed]);

  const restart = useCallback(() => {
    setIndex(0);
    setStarted(false);
    setTimeout(() => setStarted(true), delay);
  }, [delay]);

  return {
    displayText: text.slice(0, index),
    isComplete: index >= text.length,
    restart,
  };
}
