import React, { useState } from "react";
import BirthdayMessage from "./components/BirthdayMessage";
import ConfettiEffect from "./components/ConfettiEffect";
import HeartAnimation from "./components/HeartAnimation";
import SurpriseMessage from "./components/SurpriseMessage";

const App = () => {
  const [speed, setSpeed] = useState(5);

  return (
    <div style={{ 
      background: "#000", 
      height: "100vh", 
      width: "100vw", 
      overflow: "hidden", 
      fontFamily: "'Playfair Display', serif" // Elegant font applied
    }}>
      {/* 🎉 Birthday Message */}
      <BirthdayMessage name="Aru" />

      {/* 🎊 Falling Confetti Effect */}
      <ConfettiEffect />

      {/* ❤️ Beating Heart Animation */}
      <HeartAnimation speed={speed} />

      {/* 🎁 Hidden Surprise Button */}
      <SurpriseMessage />
      
      {/* 🔥 Speed Slider */}
      <div style={{ 
        position: "absolute", 
        bottom: "20px", 
        textAlign: "center", 
        width: "100%" 
      }}>
        <label style={{ 
          fontSize: "22px", 
          color: "white", 
          fontFamily: "'Playfair Display', serif" 
        }}>
          Speed: {speed}
        </label>

        <input 
          type="range" 
          min="1" 
          max="20" 
          value={speed} 
          onChange={(e) => setSpeed(e.target.value)} 
          style={{
            width: "250px",
            marginTop: "5px",
            appearance: "none",
            background: "transparent",
            cursor: "pointer",
            outline: "none",
          }}
        />

        {/* Custom Styles for the Red Slider */}
        <style>
          {`
            input[type="range"]::-webkit-slider-runnable-track {
              width: 100%;
              height: 8px;
              background: red;
              border-radius: 4px;
            }

            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              width: 18px;
              height: 18px;
              background: red;
              border-radius: 50%;
              margin-top: -5px;
            }

            input[type="range"]::-moz-range-track {
              width: 100%;
              height: 8px;
              background: red;
              border-radius: 4px;
            }

            input[type="range"]::-moz-range-thumb {
              width: 18px;
              height: 18px;
              background: red;
              border-radius: 50%;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default App;
