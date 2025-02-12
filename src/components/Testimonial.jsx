import React, { useState } from "react";
import { motion } from "framer-motion";
import hubermanImg from "/huberman.webp";
import allysonImg from "/allyson.webp";
import lewisImg from "/lewis.webp";
import jeremyImg from "/jeremy.webp";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsData = [
    {
      name: "Dr. Andrew Huberman",
      role: "Neuroscientist, Host of the Huberman Lab Podcast, and Partner",
      quote:
        "I've been using AfroHealth since 2012 because it's the simplest, most straightforward way for me to get my bases of important vitamins, minerals, and probiotics.",
      image: hubermanImg,
    },
    {
      name: "Allyson Felix",
      role: "Olympic Champion Sprinter",
      quote:
        "AfroHealth has been a game-changer for my recovery and performance. It's my go-to for daily essential nutrients.",
      image: allysonImg,
    },
    {
      name: "Sir Lewis Hamilton",
      role: "Seven-time Formula 1 World Champion",
      quote:
        "Consistency is everything in my sport. AfroHealth helps me stay on top of my nutrition, even when I'm constantly on the move.",
      image: lewisImg,
    },
    {
      name: "Jeremy Jauncey",
      role: "Entrepreneur & Travel Photographer",
      quote:
        "Traveling the world and staying healthy can be challenging, but AfroHealth ensures I never compromise on essential vitamins and minerals.",
      image: jeremyImg,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 mt-96">
      {/* Main Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-normal mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The world's top
        <br />
        performers drink{" "}
        <span className="font-medium text-jungleGreen">Afro</span>
        <span className="font-medium text-canary">Health</span>
      </motion.h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-8 mb-16">
        {testimonialsData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-lg transition-all bg-transparent ${
              activeIndex === index
                ? "text-black underline border-ring-none"
                : "text-gray-400 hover:text-gray-600 border-none"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Quote */}
        <motion.div
          key={`quote-${activeIndex}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <blockquote className="text-3xl md:text-4xl leading-relaxed mb-8">
            "{testimonialsData[activeIndex].quote}"
          </blockquote>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            {testimonialsData[activeIndex].subtitle}
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          key={`image-${activeIndex}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-w-4 aspect-h-3"
        >
          <div className=" rounded-lg w-full h-full">
            <img
              src={testimonialsData[activeIndex].image}
              alt={testimonialsData[activeIndex].name}
              className="w-full max-w-xl rounded-lg "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
