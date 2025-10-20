import React from 'react';

type Props = {
  overline?: string; // small uppercase line
  title: string;
  subtitle?: string;
  center?: boolean;
};

const SectionHeader: React.FC<Props> = ({ overline, title, subtitle, center = true }) => {
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 className="my-8 text-2xl md:text-3xl font-semibold light:text-gray-900 text-center">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
