import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import AfroHealthPouch from "../../public/ProductImages/Afro-Health-Pouch.png"; // Adjust the path as necessary

const Hero = () => {
  const textParallax = useParallax({ speed: 10 });
  const buttonParallax = useParallax({ speed: 5 });

  useEffect(() => {
    // Remove mouse effect on particles
  }, []);

  return (
    <div className="min-h-screen bg-jungleGreen w-screen flex items-center justify-center relative remove-scrollbar">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full h-full flex items-center justify-between px-10"
      >
        <div
          className="flex flex-col items-start justify-center gap-5"
          ref={textParallax.ref}
        >
          <div className="flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-bold text-canary drop-shadow-lg"
            >
              Afro
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-bold text-white drop-shadow-lg"
            >
              Health
            </motion.h1>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            ref={buttonParallax.ref}
          >
            <motion.button
              className="bg-canary text-jungleGreen hover:bg-canary/90 text-xl px-8 py-6 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Wellness →
            </motion.button>
          </motion.div>
        </div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative h-auto p-16 overflow-hidden -mr-56"
        >
          <img src={AfroHealthPouch} alt="Afro Health Pouch" />
          {/* Pile of Green Powder */}
        </motion.div>
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-canary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
