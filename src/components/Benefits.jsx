import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description: "Made from 100% natural ingredients.",
  },
  {
    icon: "💪",
    title: "Boosts Immunity",
    description: "Helps strengthen your immune system.",
  },
  {
    icon: "⚡",
    title: "Increases Energy",
    description: "Provides a natural energy boost.",
  },
];

const Benefits = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Benefits</h2>
        <div className="flex justify-around">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="w-1/3 p-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
