import { useEffect, useState } from "react";

const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setConfetti((prev) => [
        ...prev,
        { 
          id: Math.random(), 
          left: Math.random() * 100, 
          size: Math.random() * 10 + 5, 
          color: getRandomColor(), 
          rotate: Math.random() * 360
        }
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const getRandomColor = () => {
    const colors = ["#ff0000", "#ff9900", "#ffff00", "#33cc33", "#3399ff", "#cc33ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {confetti.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: "absolute",
            top: "-10px",
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotate}deg)`,
            animation: "fall 4s linear infinite"
          }}
        />
      ))}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default ConfettiEffect;
