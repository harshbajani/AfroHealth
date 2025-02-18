import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ParticleEffect = () => {
  const particles = Array.from({ length: 90 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Hidden image preloader component
const ImagePreloader = ({ images }) => {
  return (
    <div className="hidden">
      {images.map((src, index) => (
        <img key={index} src={src} alt="preload" />
      ))}
    </div>
  );
};

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const testimonialsData = [
    {
      name: "Dr. Kizzmekia Corbett",
      role: "VIRAL IMMUNOLOGIST, SCIENTIST, AfroHealth ADVOCATE",
      quote:
        "Since discovering AfroHealth, I've been able to effortlessly support my immune system with the essential vitamins and minerals I need.",
      image: "/Kizzmekia.jpg",
    },
    {
      name: "Gabrielle Union",
      role: "ACTRESS & ACTIVIST",
      quote:
        "AfroHealth has been a game-changer for my wellness routine, helping me stay energized and focused in my busy life.",
      image: "/gabrielle.webp",
    },
    {
      name: "Usain Bolt",
      role: "OLYMPIC SPRINTER",
      quote:
        "With AfroHealth, I can ensure my body gets the right nutrients to keep me at the top of my game, no matter the challenge.",
      image: "/usain.jpg",
    },
    {
      name: "Will Smith",
      role: "ACTOR & PHILANTHROPIST",
      quote:
        "AfroHealth provides me with the nutritional support I need to fuel my passion and creativity every day.",
      image: "/will.webp",
    },
  ];

  // Preload images on component mount
  useEffect(() => {
    const imagePromises = testimonialsData.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Error preloading images:", err));
  }, []);

  const navigate = (dir) => {
    if (!imagesLoaded) return; // Prevent navigation until images are loaded
    setDirection(dir);
    const newIndex =
      (activeIndex + dir + testimonialsData.length) % testimonialsData.length;
    setActiveIndex(newIndex);
  };

  // Show loading state until images are ready
  if (!imagesLoaded) {
    return (
      <div className="relative w-full bg-jungleGreen overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="h-[600px] flex items-center justify-center">
            <div className="text-white text-2xl">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full bg-jungleGreen overflow-hidden"
      data-bgColor="jungleGreen"
    >
      <ParticleEffect />
      <ImagePreloader images={testimonialsData.map((item) => item.image)} />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-6xl font-bold mb-16 text-center text-white">
          The world's top performers drink{" "}
          <span className="text-canary">Afro</span>
          <span className="text-canary">Health</span>
        </h1>

        <div className="relative h-[600px]">
          <AnimatePresence mode="wait" custom={direction}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
              {/* Text Card */}
              <motion.div
                key={`text-${activeIndex}`}
                custom={direction}
                initial={{
                  rotateY: direction * 90,
                  opacity: 0,
                  x: direction * 50,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                exit={{
                  rotateY: direction * -90,
                  opacity: 0,
                  x: direction * -50,
                  transition: { duration: 0.4 },
                }}
                className="bg-white rounded-3xl p-12 shadow-lg border border-[#285236]/5 relative"
                style={{ perspective: "1000px" }}
              >
                <div className="h-full flex flex-col justify-between">
                  <blockquote className="text-4xl font-light leading-relaxed mb-8 text-[#285236]">
                    "{testimonialsData[activeIndex].quote}"
                  </blockquote>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[#285236]">
                      {testimonialsData[activeIndex].name}
                    </h3>
                    <p className="text-lg text-[#285236]/70">
                      {testimonialsData[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image Card */}
              <motion.div
                key={`image-${activeIndex}`}
                custom={direction}
                initial={{
                  rotateY: direction * -90,
                  opacity: 0,
                  x: direction * -50,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.1,
                  },
                }}
                exit={{
                  rotateY: direction * 90,
                  opacity: 0,
                  x: direction * 50,
                  transition: { duration: 0.4 },
                }}
                className="relative h-full rounded-3xl overflow-hidden shadow-lg"
                style={{ perspective: "1000px" }}
              >
                <img
                  src={testimonialsData[activeIndex].image}
                  alt={testimonialsData[activeIndex].name}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#285236]/20 to-transparent" />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="p-4 rounded-full bg-canary text-jungleGreen"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(1)}
            className="p-4 rounded-full bg-canary text-jungleGreen"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-canary" : "bg-canary/30"
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
