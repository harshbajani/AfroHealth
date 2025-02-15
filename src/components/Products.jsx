import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      data-bgcolor="white"
      className="w-full mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-stone-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Product Images */}
        <div className="flex justify-center items-center">
          <img
            src="/ProductImages/products.png"
            alt="AfroHealth Product Collection"
            className="w-full h-full"
          />
        </div>
        {/* Right Column - Product Details */}
        <div className="space-y-6">
          <div className="flex flex-col max-w-2xl">
            <div>
              <h1 className="text-4xl font-semi mb-2">
                Get started with your AfroHealth Welcome Kit**
              </h1>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* AfroHealth Pouch */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">AfroHealth Pouch</h3>
                  <p className="text-gray-600 text-sm">
                    30 day supply per pouch, ships every 30 days
                  </p>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-400">$99</span>
                  <span className="ml-2 font-medium">$79/mo USD</span>
                </div>
              </div>

              {/* First Time Purchase Section */}
              <div className="space-y-4 border-t pt-4">
                <p className="text-sm text-gray-500">
                  FIRST TIME PURCHASE INCLUDES:
                </p>

                {/* Welcome Kit */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Welcome Kit</h3>
                    <p className="text-gray-600 text-sm">
                      AfroHealth Shaker, Scoop, and Canister
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="line-through text-gray-400">$28</span>
                    <span className="ml-2 font-medium">Free</span>
                  </div>
                </div>

                {/* Travel Packs */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">
                      AfroHealth Travel Packs (5 count)
                    </h3>
                    <p className="text-gray-600 text-sm">
                      5 individual servings
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="line-through text-gray-400">$19</span>
                    <span className="ml-2 font-medium">Free</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-4 border-t">
                <h3 className="font-medium">Total</h3>
                <div className="text-right">
                  <span className="line-through text-gray-400">$146</span>
                  <span className="ml-2 font-medium">$79/mo USD</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-jungleGreen text-canary py-4 rounded-full hover:bg-canary hover:text-jungleGreen duration-300 border-none transition-colors">
                Buy AfroHealth Now
              </button>

              {/* Guarantees */}
              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-teal-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>90-day money back guarantee</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-teal-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Update or cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
