import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface NeuralBackgroundProps {
  color?: string;
  particleCount?: number;
  connectionDistance?: number;
  particleSize?: number;
  speed?: number;
}

const NeuralBackground: React.FC<NeuralBackgroundProps> = ({
  color = 'rgba(100, 108, 255, 0.5)',
  particleCount = 80,
  connectionDistance = 150,
  particleSize = 2,
  speed = 0.5
}) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          connections: []
        });
      }
    };
    
    const updateParticles = () => {
      particles.forEach((particle, index) => {
        // Aggiorna la posizione
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Rimbalza ai bordi
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Resetta le connessioni
        particle.connections = [];
        
        // Trova le connessioni con altre particelle
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              particle.connections.push(otherIndex);
            }
          }
        });
      });
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Disegna le connessioni
      particles.forEach((particle, index) => {
        particle.connections.forEach(connectedIndex => {
          const connectedParticle = particles[connectedIndex];
          const dx = particle.x - connectedParticle.x;
          const dy = particle.y - connectedParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = 1 - (distance / connectionDistance);
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(connectedParticle.x, connectedParticle.y);
          ctx.strokeStyle = color.replace(')', `, ${opacity})`);
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
      });
      
      // Disegna le particelle
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });
    };
    
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Inizializza e avvia l'animazione
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
    
    // Pulizia
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount, connectionDistance, particleSize, speed]);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: theme === 'dark' ? '#242424' : '#ffffff'
      }}
    />
  );
};

export default NeuralBackground;