import React from 'react';
import { motion } from 'framer-motion';

const Avatar = ({ src, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      <img
        src={src}
        alt="User avatar"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Avatar;
