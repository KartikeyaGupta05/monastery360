// src/pages/artisan-connect-marketplace/components/FloatingCartIcon.jsx

import React from 'react';
import Icon from 'components/AppIcon';

// It now takes `cartCount` and `onClick` as props again.
const FloatingCartIcon = ({ cartCount, onClick }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* This is now a button that calls the onClick function from the parent */}
      <button 
        onClick={onClick}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <Icon name="ShoppingCart" size={28} />
        
        {/* The badge still shows the number of items */}
        {cartCount > 0 && (
          <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {cartCount}
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingCartIcon;