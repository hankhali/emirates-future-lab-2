/**
 * OnboardingScreen Component
 * 
 * Design Philosophy: Futuristic UAE Sustainability Innovation
 * - Dark premium background with glowing accents
 * - Green glow for Ayla (Sustainability), Cyan glow for Zayd (Innovation)
 * - Floating avatars with pulsing rings
 * - Smooth micro-animations on all interactions
 * - Responsive design: desktop (side-by-side) to mobile (stacked)
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, Beaker, Award, MapPin } from 'lucide-react';

export default function OnboardingScreen() {
  const [selectedGuide, setSelectedGuide] = useState<'ayla' | 'zayd' | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  const glowRingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const particleVariants = {
    animate: (i: number) => ({
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
      },
    }),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a1428] via-[#0f1a35] to-[#0a1428] overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            custom={i}
            animate="animate"
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-sm md:text-base text-gray-400 mb-2 tracking-widest uppercase">
            Welcome to
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-6xl font-black text-white">
              EMIRATES
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              FUTURE LAB
            </h1>
            <Leaf className="w-8 h-8 md:w-12 md:h-12 text-emerald-400" />
          </div>
          <p className="text-base md:text-lg text-gray-300">
            Together, we build a sustainable future.
          </p>
        </motion.div>

        {/* Guide Selection Section */}
        <motion.div className="w-full max-w-6xl" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center mb-12">
            {/* Ayla Guide */}
            <motion.div
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => setSelectedGuide('ayla')}
            >
              <motion.div
                className="relative mb-6"
                animate="animate"
                variants={floatVariants}
              >
                {/* Glow Ring - Green */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-30 blur-2xl"
                  style={{
                    width: '200px',
                    height: '200px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  variants={glowRingVariants}
                  animate="animate"
                />

                {/* Avatar */}
                <div
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                    selectedGuide === 'ayla'
                      ? 'border-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.75)]'
                      : 'border-emerald-400'
                  }`}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663602508230/LKMVMGnoWF9gkc4U4pNwZq/ayla-avatar-7qKzNZ8MuDms3XukoSyrS4.webp"
                    alt="Ayla - AI Sustainability Guide"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Guide Info */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
                  Ayla
                </h2>
                <p className="text-sm text-gray-400 mb-2">AI Sustainability Guide</p>
                <p className="text-xs text-gray-500">
                  Curious • Smart • Compassionate
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedGuide('ayla')}
                  className="mt-4 px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full border border-emerald-400/70 text-emerald-300 hover:bg-emerald-500/15 transition-colors"
                >
                  {selectedGuide === 'ayla' ? 'Ayla Selected' : 'Choose Ayla'}
                </button>
              </div>
            </motion.div>

            {/* Center Message */}
            <motion.div
              className="flex flex-col items-center justify-center md:col-span-1 order-3 md:order-2 text-center"
              variants={itemVariants}
            >
              <p className="max-w-md text-base md:text-lg text-gray-200 leading-relaxed">
                Hi there! We're your AI guides on this mission.
                <br />
                <span className="text-gray-300 font-semibold">
                  Ayla focuses on sustainability and Zayd focuses on innovation.
                </span>
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-400 uppercase tracking-[0.35em]">
                <span className="h-px w-10 bg-emerald-400/40" />
                <span>AI Guides</span>
                <span className="h-px w-10 bg-cyan-400/40" />
              </div>
              {selectedGuide && (
                <p className="mt-6 text-sm text-gray-200 font-medium">
                  {selectedGuide === 'ayla'
                    ? 'Ayla selected. Your sustainability mission begins now.'
                    : 'Zayd selected. Your innovation mission begins now.'}
                </p>
              )}
            </motion.div>

            {/* Zayd Guide */}
            <motion.div
              className="flex flex-col items-center text-center md:col-span-1 order-2 md:order-3 cursor-pointer"
              onClick={() => setSelectedGuide('zayd')}
            >
              <motion.div
                className="relative mb-6"
                animate="animate"
                variants={floatVariants}
              >
                {/* Glow Ring - Cyan */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-30 blur-2xl"
                  style={{
                    width: '200px',
                    height: '200px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  variants={glowRingVariants}
                  animate="animate"
                />

                {/* Avatar */}
                <div
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                    selectedGuide === 'zayd'
                      ? 'border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.75)]'
                      : 'border-cyan-400'
                  }`}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663602508230/LKMVMGnoWF9gkc4U4pNwZq/zayd-avatar-JiXf2oQSZWxGQhAQCEhPmj.webp"
                    alt="Zayd - AI Innovation Guide"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Guide Info */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  Zayd
                </h2>
                <p className="text-sm text-gray-400 mb-2">AI Innovation Guide</p>
                <p className="text-xs text-gray-500">
                  Brave • Creative • Driven
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedGuide('zayd')}
                  className="mt-4 px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full border border-cyan-400/70 text-cyan-300 hover:bg-cyan-500/15 transition-colors"
                >
                  {selectedGuide === 'zayd' ? 'Zayd Selected' : 'Choose Zayd'}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Strip */}
        <motion.div
          className="w-full max-w-6xl mt-16 md:mt-20"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Explore */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
              <Globe className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="font-semibold text-white mb-1 text-sm">Explore</h3>
              <p className="text-xs text-gray-400">
                Real-world sustainability challenges
              </p>
            </div>

            {/* Experiment */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
              <Beaker className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="font-semibold text-white mb-1 text-sm">Experiment</h3>
              <p className="text-xs text-gray-400">
                Solve interactive missions & earn XP
              </p>
            </div>

            {/* Earn & Grow */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
              <Award className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="font-semibold text-white mb-1 text-sm">Earn & Grow</h3>
              <p className="text-xs text-gray-400">
                Collect badges, unlock rewards & level up
              </p>
            </div>

            {/* Impact UAE */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
              <MapPin className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="font-semibold text-white mb-1 text-sm">Impact UAE</h3>
              <p className="text-xs text-gray-400">
                Help achieve the UAE Net Zero 2050 goal
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p
          className="mt-16 md:mt-20 text-center text-gray-500 text-sm md:text-base"
          variants={itemVariants}
        >
          The future is not tomorrow. The future is you.
        </motion.p>
      </motion.div>
    </div>
  );
}
