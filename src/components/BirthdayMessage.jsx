import { motion } from "framer-motion";

const BirthdayMessage = ({ name }) => {
  return (
    <motion.h1 
      style={{
        color: "white",
        fontSize: "32px",
        fontFamily: "'Playfair Display', serif",
        position: "absolute",
        top: "5%",
        textAlign: "center"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      🎉 Happy Birthday, {name}! 🎂❤️
    </motion.h1>
  );
};

export default BirthdayMessage;
