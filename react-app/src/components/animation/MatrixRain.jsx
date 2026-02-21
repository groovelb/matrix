import { useRef } from 'react';
import { useMatrixRain } from '../../hooks/useMatrixRain';
import './MatrixRain.css';

export default function MatrixRain() {
  const canvasRef = useRef(null);
  useMatrixRain(canvasRef);

  return <canvas ref={canvasRef} className="matrix-rain" />;
}
