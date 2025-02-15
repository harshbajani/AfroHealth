import React from "react";
import { motion } from "framer-motion";
import Atropos from "atropos/react";

const AboutProd = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="bg-[#f6f5f1] py-16 px-6 w-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      data-bgcolor="white"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          <FeatureItem
            icon="/gluten-free.png"
            alt="Gluten Free"
            title="Gluten Free"
          />
          <FeatureItem
            icon="/digestion.png"
            alt="Easy Digestion"
            title="Easy Digestion"
          />
          <FeatureItem
            icon="/immune.png"
            alt="Immune Support"
            title="Immune Support"
          />
          <FeatureItem
            icon="/tested.png"
            alt="Third-Party Tested"
            title="Third-Party Tested"
          />
          <FeatureItem
            icon="/pineapple.png"
            alt="Pineapple & Vanilla Taste"
            title="Pineapple & Vanilla Taste"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeatureItem = ({ icon, alt, title }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={itemVariants}
    >
      <Atropos
        className="aspect-square w-24" // Fixed aspect ratio
        rotateXMax={20}
        rotateYMax={20}
        shadow={false}
        shadowScale={0.8}
        highlight={true}
      >
        <div className="relative w-full pt-[100%]">
          {" "}
          {/* Create square container */}
          <div className="absolute inset-0 bg-white rounded-full shadow-md flex items-center justify-center">
            <motion.img
              src={icon}
              alt={alt}
              className="w-1/2 h-1/2 object-contain" // Maintain icon aspect ratio
              data-atropos-offset="5"
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </div>
      </Atropos>
      <motion.span
        className="font-semibold text-gray-800 text-base mt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.span>
    </motion.div>
  );
};

export default AboutProd;
