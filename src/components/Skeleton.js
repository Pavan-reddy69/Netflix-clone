import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-overlay">
        <div className="skeleton-title"></div>
       
      </div>
    </div>
  );
};

export default SkeletonCard;
