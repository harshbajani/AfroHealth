import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonialsData = [
    {
      name: "Dr. Andrew Huberman",
      role: "NEUROSCIENTIST, HOST OF THE HUBERMAN LAB PODCAST, AG1 PARTNER",
      quote:
        "I've been using AG1 since 2012 because it's the simplest, most straightforward way for me to get my bases of important vitamins, minerals, and probiotics.",
      image: "/huberman.webp",
    },
    {
      name: "Allyson Felix",
      role: "OLYMPIC ATHLETE",
      quote:
        "AG1 has been instrumental in maintaining my peak performance levels throughout training and competition.",
      image: "/allyson.webp",
    },
    {
      name: "Sir Lewis Hamilton",
      role: "FORMULA 1 CHAMPION",
      quote:
        "AG1 helps me maintain optimal nutrition even with my demanding racing schedule.",
      image: "/lewis.webp",
    },
    {
      name: "Jeremy Jauncey",
      role: "ENTREPRENEUR",
      quote:
        "AG1 ensures I get all my essential nutrients while traveling the world.",
      image: "/jeremy.webp",
    },
  ];

  const handleNameClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-96" data-bgcolor="white">
      <h1 className="text-5xl font-normal mb-16">
        The world's top
        <br />
        performers drink AG1
      </h1>

      {/* Names with sliding underline */}
      <div className="relative mb-16">
        <div className="flex gap-8">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNameClick(index)}
              className={`relative py-2 text-lg font-normal transition-colors cursor-pointer ${
                activeIndex === index ? "text-black" : "text-gray-400"
              }`}
            >
              {item.name}
              {activeIndex === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                  layoutId="underline"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-hidden">
        {/* Quote section */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <blockquote className="text-3xl leading-relaxed mb-8">
                "{testimonialsData[activeIndex].quote}"
              </blockquote>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                {testimonialsData[activeIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image section */}
        <div className="relative h-[600px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <img
                src={testimonialsData[activeIndex].image}
                alt={testimonialsData[activeIndex].name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
