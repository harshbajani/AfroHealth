import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const ResearchStudies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stats = [
    {
      percentage: "72%",
      description:
        "of African Americans are more likely to develop type 2 diabetes*",
    },
    {
      percentage: "65%",
      description:
        "face higher rates of cardiovascular disease than other populations*",
    },
    {
      percentage: "54%",
      description: "experience vitamin D deficiency due to melanin levels*",
    },
    {
      percentage: "40%",
      description: "have higher blood pressure than the general population*",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      data-bgcolor="white"
      className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-5xl font-normal leading-tight">
            Researched.
            <br />
            Studied.
            <br />
            Continuously
            <br />
            Improved.
          </h2>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Green Banner */}
          <div className="bg-green-400 text-black text-sm py-2 px-4 w-full">
            IN A COMPREHENSIVE HEALTH STUDY+
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-6xl font-normal">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={parseInt(stat.percentage)}
                      duration={2}
                    />
                  ) : (
                    "0"
                  )}
                  %
                </div>
                <p className="text-gray-700 text-base">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="text-xs text-gray-500 italic mt-4">
            *Based on research data from multiple studies conducted on African
            American health disparities over the past decade.
          </p>

          {/* CTA Button */}
          <button className="mt-6 border border-black rounded-full px-8 py-3 text-sm hover:bg-jungleGreen hover:text-canary transition-colors bg-transparent">
            See Our Research Studies
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchStudies;
