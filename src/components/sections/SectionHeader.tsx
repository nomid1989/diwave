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
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-8
        text-2xl md:text-3xl font-semibold  light:text-gray-900 text-center"
      >
        {title}
      </motion.h2>
      {subtitle && <p className="mt-4 text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
