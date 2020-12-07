import React from 'react';
import useGoogleAnalytics from '../utils/useGoogleAnalytics';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.7,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, scale: 0, y: 200, x: 200 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', bounce: 0.25 },
    y: 0,
    x: 0,
  },
};

function Header() {
  useGoogleAnalytics();

  return (
    <div className="Header-wrapper">
      <motion.div
        className="header-box"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 id="name" variants={listItem}>
          Alex <br /> Kemper
        </motion.h1>

        <motion.h1 variants={listItem}>Software Developer</motion.h1>
        <motion.p variants={listItem}>Full Stack Web Apps</motion.p>
      </motion.div>
    </div>
  );
}

export default Header;
