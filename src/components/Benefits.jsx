import { motion } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import { FaLeaf, FaShieldAlt, FaBolt } from "react-icons/fa";

const benefitsData = [
  {
    title: "100% Natural Ingredients",
    description: "Sourced from premium farms for maximum purity and taste.",
    icon: <FaLeaf size={32} className="text-jungleGreen" />,
  },
  {
    title: "Boosts Immunity",
    description: "Packed with vitamins, minerals, and antioxidants.",
    icon: <FaShieldAlt size={32} className="text-jungleGreen" />,
  },
  {
    title: "Increases Energy",
    description: "Provides a refreshing energy lift without the crash.",
    icon: <FaBolt size={32} className="text-jungleGreen" />,
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      data-bgcolor="canary"
      className="relative z-30 w-full bg-canary flex flex-col items-center justify-center py-20 overflow-hidden top-96"
      style={{
        marginTop: "-50vh",
        paddingTop: "20vh",
        clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      {/* Animated Gradient Background */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-canary via-white to-canary opacity-30 animate-gradient-x" />

      <motion.h2
        className="relative text-3xl font-bold mb-12 text-jungleGreen"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why Choose AfroHealth?
      </motion.h2>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 z-10">
        {benefitsData.map((benefit, index) => (
          <Atropos activeOffset={40} shadow={false} key={index}>
            <motion.div
              className="relative bg-white rounded-lg p-6 shadow-lg backdrop-blur-md border border-gray-200 overflow-hidden cursor-pointer h-[220px] flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.1)",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                hover: { duration: 0.3 },
              }}
              viewport={{ once: true }}
            >
              {/* Hover overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-jungleGreen/10 to-canary/10"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
              />

              <div className="flex flex-col items-center justify-between h-full">
                <motion.div
                  className="relative flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {benefit.icon}
                </motion.div>

                <div className="flex-1 flex flex-col items-center justify-center">
                  <motion.h3
                    className="relative text-lg font-semibold text-jungleGreen mb-2 text-center"
                    whileHover={{ color: "#2B6B4D" }}
                  >
                    {benefit.title}
                  </motion.h3>

                  <motion.p
                    className="relative text-sm text-gray-700 text-center max-w-[200px]"
                    whileHover={{ color: "#1A4532" }}
                  >
                    {benefit.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </Atropos>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
