import { useEffect, useRef } from "react";

export const PeacefulBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Peaceful breathing orbs with enhanced effects
    const orbs: Array<{
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      phase: number;
      speed: number;
      color: string;
      opacity: number;
      breatheIntensity: number;
      floatSpeed: number;
    }> = [];

    // Create enhanced breathing orbs
    for (let i = 0; i < 12; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 20 + Math.random() * 35,
        baseRadius: 20 + Math.random() * 35,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.004,
        color: `hsl(${175 + Math.random() * 85}, ${40 + Math.random() * 25}%, ${60 + Math.random() * 20}%)`,
        opacity: 0.08 + Math.random() * 0.12,
        breatheIntensity: 15 + Math.random() * 25,
        floatSpeed: 0.1 + Math.random() * 0.2
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016; // ~60fps

      orbs.forEach((orb, index) => {
        // Enhanced breathing effect with variable intensity
        const breathePhase = Math.sin(time * orb.speed + orb.phase) * 0.5 + 0.5;
        orb.radius = orb.baseRadius + breathePhase * orb.breatheIntensity;
        
        // Gentle floating movement with figure-8 pattern
        orb.x += Math.sin(time * orb.floatSpeed + index) * 0.3;
        orb.y += Math.cos(time * orb.floatSpeed * 0.7 + index) * 0.2;

        // Smooth boundary wrapping
        if (orb.x < -orb.radius * 2) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius * 2) orb.x = -orb.radius;
        if (orb.y < -orb.radius * 2) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius * 2) orb.y = -orb.radius;

        // Create multi-layered radial gradient for depth
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius * 2.5
        );
        
        // Enhanced gradient with more depth
        gradient.addColorStop(0, orb.color.replace(')', `, ${orb.opacity * 1.2})`));
        gradient.addColorStop(0.3, orb.color.replace(')', `, ${orb.opacity * 0.8})`));
        gradient.addColorStop(0.7, orb.color.replace(')', `, ${orb.opacity * 0.3})`));
        gradient.addColorStop(1, 'transparent');

        // Draw main breathing orb
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add subtle inner glow
        const innerGradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius * 0.6
        );
        innerGradient.addColorStop(0, orb.color.replace(')', `, ${orb.opacity * 0.4})`));
        innerGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = innerGradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{ background: "transparent" }}
    />
  );
};