import { useRef, useEffect } from 'react';
import './MatrixTitle.css';

const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function MatrixTitle({ text, active = true }) {
  const canvasRef = useRef(null);
  const rainCanvasRef = useRef(null);
  const dropsRef = useRef([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rainCanvas = document.createElement('canvas');
    rainCanvasRef.current = rainCanvas;
    const rainCtx = rainCanvas.getContext('2d');

    const charSize = 14;

    const PADDING = 60;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const container = canvas.parentElement;
      const containerW = container.offsetWidth;

      // measure text to determine canvas size
      const fontSize = Math.min(containerW * 0.18, 180);
      ctx.font = `900 ${fontSize}px 'Black Ops One', 'Fira Code', monospace`;
      const textMetrics = ctx.measureText(text);
      const textW = textMetrics.width;

      const w = textW + PADDING * 2;
      const h = fontSize + PADDING * 2;

      canvas.width = rainCanvas.width = w * dpr;
      canvas.height = rainCanvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rainCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.floor(w / charSize);
      dropsRef.current = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * (h / charSize)),
      );
      sizeRef.current = { w, h, dpr, fontSize };
    }

    function frame() {
      const { w, h, fontSize } = sizeRef.current;
      if (!w || !h) return;

      /* ---- rain layer ---- */
      rainCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      rainCtx.fillRect(0, 0, w, h);
      rainCtx.font = `${charSize}px 'Fira Code', monospace`;

      const drops = dropsRef.current;
      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * charSize;
        const y = drops[i] * charSize;

        rainCtx.fillStyle =
          Math.random() > 0.95 ? '#b4ffb4' : '#00ff41';
        rainCtx.fillText(char, x, y);

        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }

      /* ---- composite: text‑masked rain ---- */
      ctx.clearRect(0, 0, w, h);

      ctx.font = `900 ${fontSize}px 'Black Ops One', 'Fira Code', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // 1. solid text shape (acts as mask)
      ctx.fillStyle = '#fff';
      ctx.fillText(text, w / 2, h / 2);

      // 2. rain clipped to text
      ctx.globalCompositeOperation = 'source-in';
      ctx.drawImage(rainCanvas, 0, 0, w, h);

      // 3. green glow behind
      ctx.globalCompositeOperation = 'destination-over';
      ctx.shadowColor = '#00ff41';
      ctx.shadowBlur = 30;
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.2)';
      ctx.lineWidth = 1;
      ctx.strokeText(text, w / 2, h / 2);
      ctx.shadowBlur = 0;

      ctx.globalCompositeOperation = 'source-over';
    }

    resize();
    const id = setInterval(frame, 50);
    window.addEventListener('resize', resize);

    return () => {
      clearInterval(id);
      window.removeEventListener('resize', resize);
    };
  }, [text, active]);

  return (
    <div className="matrix-title">
      <canvas ref={canvasRef} />
    </div>
  );
}
