import React, { useRef, useEffect, useState } from 'react';

const PongGame = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [highestScore, setHighestScore] = useState(() => {
    return parseInt(localStorage.getItem('pongHighScore') || '0', 10);
  });
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
    const gutter = 0.08;
    const paddleW = 12;
    const paddleH = 90;

    const game = {
      ball: { x: w / 2, y: h / 2, dx: 4, dy: 3, r: 7 },
      score: 0,
      player: { 
        x: Math.round(w * gutter), 
        y: h / 2 - paddleH / 2, 
        w: paddleW, 
        h: paddleH, 
      },
      computer: { 
        x: Math.round(w * (1 - gutter) - paddleW), 
        y: h / 2 - paddleH / 2, 
        w: paddleW, 
        h: paddleH, 
      },
      playerSpeed: 4,
      computerSpeed: 6,
      active: true,
      ballServed: false,
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

    const resetBall = (goingTowardPlayer = true) => {
      game.ball.x = w / 2;
      game.ball.y = h / 2 + (Math.random() - 0.5) * 60;
      const angle = (Math.random() * 0.6 + 0.2);
      const direction = goingTowardPlayer ? -1 : 1;
      game.ball.dx = Math.cos(angle) * 4 * direction;
      game.ball.dy = Math.sin(angle) * 3;
      game.ballServed = false;
    };

    const update = () => {
      if (!game.active) return;

      game.ball.x += game.ball.dx;
      game.ball.y += game.ball.dy;

      // Top/bottom wall bounce
      if (game.ball.y + game.ball.r > h || game.ball.y - game.ball.r < 0) {
        game.ball.dy = -game.ball.dy;
      }

      // Player paddle hit
      if (
        game.ball.x - game.ball.r <= game.player.x + game.player.w &&
        game.ball.y >= game.player.y &&
        game.ball.y <= game.player.y + game.player.h
      ) {
        // Player successfully returned the ball
        game.score++;
        // Increase ball speed by 1.3x on each paddle hit
        game.ball.dx = -game.ball.dx * 1.1;
        game.ball.dy = game.ball.dy * 1.1;
        game.ball.x = game.player.x + game.player.w + game.ball.r;
      }

      // Computer paddle hit — CPU ALWAYS returns the ball
      if (
        game.ball.x + game.ball.r >= game.computer.x &&
        game.ball.y >= game.computer.y &&
        game.ball.y <= game.computer.y + game.computer.h
      ) {
        // CPU returns: send ball back toward player, increasing speed by 1.3x
        game.ball.dx = -game.ball.dx * 1.1;
        game.ball.dy = game.ball.dy * 1.1;
        game.ball.x = game.computer.x - game.ball.r;
      }

      // Ball passed player (left side) → game over
      if (game.ball.x - game.ball.r < 0) {
        game.active = false;
        const newHigh = Math.max(game.score, highestScore);
        if (newHigh > highestScore) {
          localStorage.setItem('pongHighScore', String(newHigh));
          setHighestScore(newHigh);
        }
        setFinalScore(game.score);
        setGameOver(true);
      }

      // Ball passed CPU (right side) — should not happen since CPU is perfect, but safety reset
      if (game.ball.x + game.ball.r > w) {
        resetBall(true); // send back toward player
      }

      // CPU instantly tracks the ball's Y position — never misses
      game.computer.y = Math.min(h - game.computer.h, Math.max(0, game.ball.y - game.computer.h / 2));
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

      // Score displayed in center
      ctx.font = 'bold 20px "Courier New", monospace';
      ctx.fillStyle = 'rgba(87, 255, 87, 0.9)';
      ctx.textAlign = 'center';
      ctx.fillText(`SCORE: ${game.score}`, w / 2, 24);

      // High score
      ctx.font = '11px "Courier New", monospace';
      ctx.fillStyle = 'rgba(87, 255, 87, 0.4)';
      ctx.fillText(`BEST: ${highestScore}`, w / 2, 42);
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
  }, [highestScore]);

  const handleRestart = () => {
    const { w, h } = dimensionsRef.current;
    const gutter = 0.08;
    const paddleW = 12, paddleH = 90;
    const game = gameStateRef.current;
    game.score = 0;
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
    setFinalScore(0);
  };

  const isNewHighScore = finalScore >= highestScore && finalScore > 0;

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
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>GAME OVER</div>
          <div style={{ fontSize: '20px', marginBottom: isNewHighScore ? '4px' : '16px' }}>
            Score: {finalScore}
          </div>
          {isNewHighScore && (
            <div style={{ fontSize: '16px', marginBottom: '16px', color: '#ffcc00' }}>
              ★ NEW HIGH SCORE! ★
            </div>
          )}
          <div style={{ fontSize: '14px', marginBottom: '16px', opacity: 0.6 }}>
            Highest Score: {highestScore}
          </div>
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