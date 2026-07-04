import React, { useRef, useEffect, useState } from 'react';

const PongGame = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');
  const gameStateRef = useRef(null);
  const animationIdRef = useRef(null);
  const dimensionsRef = useRef({ w: 0, h: 260 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Use the header parent's dimensions
    const parent = container.closest('.headerCSS') || container.parentElement;
    const rect = parent.getBoundingClientRect();
    const w = Math.max(rect.width, 600);
    const h = Math.max(rect.height, 260);
    canvas.width = w;
    canvas.height = h;
    dimensionsRef.current = { w, h };

    const ctx = canvas.getContext('2d');

    // Paddles positioned inward from edges but not overlapping center text (~0-40% is text, ~60-100% is buttons)
    const gutter = 0.08; // 8% from each edge for paddles
    const paddleW = 12;
    const paddleH = 90;

    const game = {
      ball: { x: w / 2, y: h / 2, dx: 4, dy: 3, r: 7 },
      player: { 
        x: Math.round(w * gutter), 
        y: h / 2 - paddleH / 2, 
        w: paddleW, 
        h: paddleH, 
        score: 0 
      },
      computer: { 
        x: Math.round(w * (1 - gutter) - paddleW), 
        y: h / 2 - paddleH / 2, 
        w: paddleW, 
        h: paddleH, 
        score: 0 
      },
      playerSpeed: 4,
      computerSpeed: 4.8,
      active: true,
    };
    gameStateRef.current = game;

    // Track mouse across the ENTIRE parent container, not just canvas
    const handleMouseMove = (e) => {
      const parentRect = parent.getBoundingClientRect();
      const relativeY = e.clientY - parentRect.top;
      const clampedY = Math.min(canvas.height - game.player.h, Math.max(0, relativeY - game.player.h / 2));
      game.player.y = clampedY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const parentRect = parent.getBoundingClientRect();
      const touchY = e.touches[0].clientY - parentRect.top;
      const clampedY = Math.min(canvas.height - game.player.h, Math.max(0, touchY - game.player.h / 2));
      game.player.y = clampedY;
    };

    // Attach listeners to parent so mouse movement anywhere in header area works
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('touchmove', handleTouchMove, { passive: false });

    const resetBall = () => {
      game.ball.x = w / 2;
      game.ball.y = h / 2;
      const angle = (Math.random() * 0.8 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
      game.ball.dx = Math.cos(angle) * 4;
      game.ball.dy = Math.sin(angle) * 3;
    };

    const update = () => {
      if (!game.active) return;

      game.ball.x += game.ball.dx;
      game.ball.y += game.ball.dy;

      if (game.ball.y + game.ball.r > h || game.ball.y - game.ball.r < 0) {
        game.ball.dy = -game.ball.dy;
      }

      if (
        game.ball.x - game.ball.r <= game.player.x + game.player.w &&
        game.ball.y >= game.player.y &&
        game.ball.y <= game.player.y + game.player.h
      ) {
        game.ball.dx = -game.ball.dx * 1.04;
        game.ball.x = game.player.x + game.player.w + game.ball.r;
      }

      if (
        game.ball.x + game.ball.r >= game.computer.x &&
        game.ball.y >= game.computer.y &&
        game.ball.y <= game.computer.y + game.computer.h
      ) {
        game.ball.dx = -game.ball.dx * 1.04;
        game.ball.x = game.computer.x - game.ball.r;
      }

      if (game.ball.x - game.ball.r < 0) {
        game.computer.score++;
        if (game.computer.score >= 7) { game.active = false; setGameOver(true); setWinner('CPU'); }
        resetBall();
      } else if (game.ball.x + game.ball.r > w) {
        game.player.score++;
        if (game.player.score >= 7) { game.active = false; setGameOver(true); setWinner('You'); }
        resetBall();
      }

      const computerCenter = game.computer.y + game.computer.h / 2;
      if (computerCenter < game.ball.y - 15) {
        game.computer.y += game.computerSpeed;
      } else if (computerCenter > game.ball.y + 15) {
        game.computer.y -= game.computerSpeed;
      }
      game.computer.y = Math.min(h - game.computer.h, Math.max(0, game.computer.y));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Subtle grid
      ctx.strokeStyle = '#57ff57';
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      ctx.globalAlpha = 1.0;

      // Center line
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = 'rgba(87, 255, 87, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h); ctx.stroke();
      ctx.setLineDash([]);

      // Ball
      ctx.fillStyle = '#57ff57';
      ctx.shadowColor = '#57ff57';
      ctx.shadowBlur = 12;
      ctx.beginPath(); ctx.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;

      // Player paddle
      ctx.fillStyle = '#57ff57';
      ctx.shadowColor = '#57ff57';
      ctx.shadowBlur = 8;
      ctx.fillRect(game.player.x, game.player.y, game.player.w, game.player.h);
      ctx.shadowBlur = 0;

      // Computer paddle
      ctx.fillStyle = '#57ff57';
      ctx.shadowColor = '#57ff57';
      ctx.shadowBlur = 8;
      ctx.fillRect(game.computer.x, game.computer.y, game.computer.w, game.computer.h);
      ctx.shadowBlur = 0;

      // Scores
      ctx.font = 'bold 18px "Courier New", monospace';
      ctx.fillStyle = 'rgba(87, 255, 87, 0.6)';
      ctx.textAlign = 'center';
      ctx.fillText(`${game.player.score}`, 70, 25);
      ctx.fillText(`${game.computer.score}`, w - 70, 25);
    };

    const gameLoop = () => {
      update();
      draw();
      animationIdRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('touchmove', handleTouchMove);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  const handleRestart = () => {
    const { w, h } = dimensionsRef.current;
    const gutter = 0.08;
    const paddleW = 12, paddleH = 90;
    const game = gameStateRef.current;
    game.player.score = 0;
    game.computer.score = 0;
    game.active = true;
    game.ball.x = w / 2;
    game.ball.y = h / 2;
    game.ball.dx = 4;
    game.ball.dy = 3;
    game.player.y = h / 2 - paddleH / 2;
    game.player.x = Math.round(w * gutter);
    game.computer.y = h / 2 - paddleH / 2;
    game.computer.x = Math.round(w * (1 - gutter) - paddleW);
    setGameOver(false);
    setWinner('');
  };

  return (
    <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
      {gameOver && (
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.88)',
            color: '#57ff57',
            fontFamily: '"Courier New", monospace',
          }}
        >
          <div style={{ fontSize: '26px', marginBottom: '14px' }}>{winner} Win!</div>
          <button onClick={handleRestart} style={{
            background: '#000', color: '#57ff57', border: '1px solid #57ff57',
            padding: '10px 24px', fontSize: '18px', cursor: 'pointer',
            fontFamily: '"Courier New", monospace',
          }}>PLAY AGAIN</button>
        </div>
      )}
    </div>
  );
};

export default PongGame;