import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setShowLoader(false), 500);
    }
  }, [progress]);

  if (!showLoader) return null;

  return (
    <Html center>
      <div style={{ textAlign: "center", color: "#57ff57", fontFamily: "monospace" }}>
        <div className="loader" />
        <p style={{ marginTop: "1rem" }}>Loading...</p>
        <p>{progress.toFixed(0)}%</p>
      </div>
      <style>{`
        .loader {
          width: 50px;
          aspect-ratio: 1;
          display: grid;
          border: 4px solid #0000;
          border-radius: 50%;
          border-right-color: #57ff57;
          animation: l15 1s infinite linear;
          margin: 0 auto;
        }
        .loader::before,
        .loader::after {
          content: "";
          grid-area: 1/1;
          margin: 2px;
          border: inherit;
          border-radius: 50%;
          animation: l15 2s infinite;
        }
        .loader::after {
          margin: 8px;
          animation-duration: 3s;
        }
        @keyframes l15 {
          100% { transform: rotate(1turn); }
        }
      `}</style>
    </Html>
  );
};

export default CanvasLoader;
