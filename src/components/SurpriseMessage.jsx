import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SurpriseMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      {/* 🎁 Toggle Button - Centered at the Bottom */}
      <button 
        onClick={() => setShowMessage(!showMessage)}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "18px",
          background: "gold",
          color: "black",
          border: "2px solid black",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
          boxShadow: "2px 2px 10px rgba(255, 215, 0, 0.5)"
        }}
      >
        {showMessage ? "❌ Close" : "🎁 Click for Surprise"}
      </button>

      {/* 🎀 Fully Centered Surprise Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed", // Fixed to the viewport to stay centered
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "50%", // Adjusted width to fit nicely
              maxWidth: "500px",
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              fontSize: "18px",
              color: "black",
              fontWeight: "500",
              lineHeight: "1.5",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)"
            }}
          >
            🥰 You mean the world to me. Happy Birthday, my sweetheart! ❤️  
            Thank you for being the way you are and for coming into my life!  
            You make the bad days good and the good days even better.  
            Idk how you make me feel this special, but I treasure it immensely.  
            Can't believe this girl took a trip to Vellore just to see me 😱  
            Happy 22nd to the smartest, cutest, and hottest woman to touch this Earth 😉
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SurpriseMessage;
