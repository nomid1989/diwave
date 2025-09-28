import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  overline?: string; // small uppercase line
  title: string;
  subtitle?: string;
  center?: boolean;
};

const SectionHeader: React.FC<Props> = ({ overline, title, subtitle, center = true }) => {
  return (
    <div className={center ? 'text-center' : ''}>
      {overline && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-widest text-gray-400"
        >
          {overline.toUpperCase()}
      </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-white mt-2"
      >
        {title}
      </motion.h2>
      {subtitle && <p className="mt-4 text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
