// Hero.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import Atropos from "atropos/react";
import "atropos/css";
import AfroHealthPouch from "../../public/ProductImages/Afro-Health-Pouch.png";

const Hero = () => {
  const textParallax = useParallax({ speed: 10 });
  const buttonParallax = useParallax({ speed: 5 });

  return (
    <section
      data-bgcolor="jungleGreen"
      className="
        relative 
        w-screen 
        h-screen 
        flex 
        items-center 
        justify-center 
        overflow-hidden 
        bg-jungleGreen 
        text-white
      "
      style={{ position: "sticky", top: 0 }}
    >
      {/* Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-10"
      >
        {/* Left: Heading + CTA */}
        <div
          className="flex flex-col items-start justify-center gap-5 py-10"
          ref={textParallax.ref}
        >
          <div className="flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl md:text-8xl font-bold text-canary drop-shadow-lg"
            >
              Afro
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl md:text-8xl font-bold text-white drop-shadow-lg ml-2"
            >
              Health
            </motion.h1>
          </div>

          <p className="max-w-md text-lg md:text-xl">
            Boost your daily nutrition with our delicious and refreshing green
            supplement. Experience natural energy and wellness in every sip!
          </p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            ref={buttonParallax.ref}
          >
            <motion.button
              className="bg-canary text-jungleGreen hover:bg-canary/90 text-xl px-8 py-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Wellness →
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <Atropos
            activeOffset={40}
            shadow={false}
            className="relative h-auto p-10 overflow-hidden lg:-mr-20"
          >
            <img
              data-atropos-offset="5"
              src={AfroHealthPouch}
              alt="Afro Health Pouch"
              className="max-h-full object-contain hover:cursor-grab active:cursor-grabbing"
            />
          </Atropos>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
