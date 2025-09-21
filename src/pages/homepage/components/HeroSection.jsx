import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Make sure you've run: npm install framer-motion
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon"; // Assuming you have an Icon component

const HeroSection = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make children animate one after the other
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/videos/monastery.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* ENHANCEMENT: Refined gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8">
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }} // Added text-shadow for readability
          >
            Step Into Timeless
            <span className="block text-secondary">Monastic Heritage</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }} // Added text-shadow for readability
          >
            Journey through immersive 360° tours, uncover hidden wisdom with our
            AI guide, and support the artisans who keep these ancient traditions
            alive.
          </motion.p>
        </div>

        {/* CTA Buttons with animation */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/virtual-tour-experience">
            <Button
              variant="default"
              size="lg"
              iconName="Camera"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold transition-transform duration-200 hover:-translate-y-1" // ENHANCEMENT: Hover effect
            >
              Explore Virtual Tours
            </Button>
          </Link>
          <Link to="/artisan-connect-marketplace">
            <Button
              variant="outline"
              size="lg"
              iconName="ShoppingBag"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-all duration-200 hover:-translate-y-1" // ENHANCEMENT: Hover effect
            >
              Support Artisans
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;