import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function useMatrixRain(canvasRef, { fontSize = 14, speed = 50, opacity = 0.15 } = {}) {
  const dropsRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let columns;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      dropsRef.current = Array.from({ length: columns }, () =>
        Math.random() * -100
      );
    }

    function draw() {
      ctx.fillStyle = `rgba(10, 10, 10, ${0.05})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      const drops = dropsRef.current;
      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.98
          ? `rgba(180, 255, 180, ${opacity + 0.3})`
          : `rgba(0, 255, 65, ${opacity})`;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    const intervalId = setInterval(draw, speed);

    window.addEventListener('resize', resize);

    return () => {
      clearInterval(intervalId);
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef, fontSize, speed, opacity]);
}
