import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterPanel = ({ filters, onFiltersChange, isOpen, onToggle, resultCount = 0 }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [expandedSections, setExpandedSections] = useState({
    craftType: true,
    location: true,
    price: true,
    verification: true,
    features: false
  });
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [searchTerm, setSearchTerm] = useState('');

  const craftTypeOptions = [
    { value: 'all', label: 'All Crafts', count: 156, icon: '🎨' },
    { value: 'thangka', label: 'Thangka Paintings', count: 23, icon: '🖼️' },
    { value: 'incense', label: 'Incense & Aromatics', count: 34, icon: '🕯️' },
    { value: 'prayer-flags', label: 'Prayer Flags', count: 18, icon: '🏳️' },
    { value: 'singing-bowls', label: 'Singing Bowls', count: 12, icon: '🎵' },
    { value: 'jewelry', label: 'Spiritual Jewelry', count: 28, icon: '💍' },
    { value: 'manuscripts', label: 'Manuscripts & Books', count: 15, icon: '📜' },
    { value: 'sculptures', label: 'Buddhist Sculptures', count: 26, icon: '🗿' }
  ];

  const locationOptions = [
    { value: 'sikkim', label: 'Sikkim, India', count: 38, flag: '🇮🇳' },
  ];

  const verificationOptions = [
    { 
      key: 'verified', 
      label: 'Authenticity Verified', 
      description: 'Heritage certificates & quality assured',
      icon: '✓',
      color: 'text-emerald-600'
    },
    { 
      key: 'monasteryEndorsed', 
      label: 'Monastery Endorsed', 
      description: 'Directly supported by monasteries',
      icon: '🏯',
      color: 'text-orange-600'
    },
    { 
      key: 'inStock', 
      label: 'In Stock Only', 
      description: 'Available for immediate shipping',
      icon: '📦',
      color: 'text-blue-600'
    },
    { 
      key: 'fastShipping', 
      label: 'Fast Shipping', 
      description: 'Ships within 2-3 days',
      icon: '⚡',
      color: 'text-purple-600'
    },
    { 
      key: 'handmade', 
      label: '100% Handmade', 
      description: 'Crafted by traditional artisans',
      icon: '👐',
      color: 'text-amber-600'
    }
  ];

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...localFilters, [key]: value };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    handleFilterChange('priceRange', `${newRange[0]}-${newRange[1]}`);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      craftType: 'all',
      location: 'all',
      priceRange: 'all',
      verified: false,
      monasteryEndorsed: false,
      inStock: false,
      fastShipping: false,
      handmade: false
    };
    setLocalFilters(clearedFilters);
    setPriceRange([0, 2000]);
    setSearchTerm('');
    onFiltersChange(clearedFilters);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const activeFiltersCount = Object.values(localFilters).filter(value => 
    value !== 'all' && value !== false && value !== ''
  ).length;

  // Filter craft options based on search
  const filteredCraftOptions = craftTypeOptions.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLocationOptions = locationOptions.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onToggle}
          className="w-full bg-white border-2 border-gray-200 hover:border-indigo-300 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">🔍</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Filters</div>
              <div className="text-sm text-gray-600">
                {resultCount} items • {activeFiltersCount} active
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <div className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </div>
            )}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-gray-400">▼</span>
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className={`
            lg:block lg:static lg:w-80 lg:bg-transparent lg:shadow-none
            ${isOpen ? 'block' : 'hidden'}
            fixed inset-0 z-50 bg-white lg:z-auto
            lg:transform-none transition-transform duration-300
          `}
        >
          <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible">
            {/* Mobile Header */}
            <div className="lg:hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Filter Products</h3>
                  <p className="text-indigo-100 text-sm">{resultCount} items available</p>
                </div>
                <button
                  onClick={onToggle}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-white">×</span>
                </button>
              </div>
            </div>

            <div className="p-6 lg:p-0 space-y-6">
              {/* Desktop Header */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                  {activeFiltersCount > 0 && (
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {activeFiltersCount}
                      </div>
                      <span className="text-sm text-gray-600">active</span>
                    </div>
                  )}
                </div>
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${(resultCount / 200) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{resultCount} products found</p>
              </div>

              {/* Search Filter */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search filters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute left-3 top-3.5">
                    <span className="text-gray-400">🔍</span>
                  </div>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Craft Type Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection('craftType')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🎨</span>
                    <span className="font-semibold text-gray-900">Craft Type</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSections.craftType ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-400">▼</span>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedSections.craftType && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
                        {filteredCraftOptions.map((option) => (
                          <motion.button
                            key={option.value}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleFilterChange('craftType', option.value)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                              localFilters.craftType === option.value
                                ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-300'
                                : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{option.icon}</span>
                              <span className="font-medium text-gray-900">{option.label}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                                {option.count}
                              </span>
                              {localFilters.craftType === option.value && (
                                <span className="text-indigo-600">✓</span>
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Location Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection('location')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🌍</span>
                    <span className="font-semibold text-gray-900">Artisan Location</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSections.location ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-400">▼</span>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedSections.location && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
                        {filteredLocationOptions.map((option) => (
                          <motion.button
                            key={option.value}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleFilterChange('location', option.value)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                              localFilters.location === option.value
                                ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-300'
                                : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{option.flag}</span>
                              <span className="font-medium text-gray-900">{option.label}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                                {option.count}
                              </span>
                              {localFilters.location === option.value && (
                                <span className="text-indigo-600">✓</span>
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Price Range Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection('price')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">💰</span>
                    <span className="font-semibold text-gray-900">Price Range</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSections.price ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-400">▼</span>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedSections.price && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">₹{priceRange[0]}</span>
                          <span className="text-sm font-medium text-gray-700">₹{priceRange[1]}+</span>
                        </div>
                        
                        <div className="relative">
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            value={priceRange[0]}
                            onChange={(e) => handlePriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            value={priceRange[1]}
                            onChange={(e) => handlePriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider absolute top-0"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-center p-2 bg-indigo-50 rounded-lg">
                            <div className="text-lg font-bold text-indigo-600">₹{priceRange[0]}</div>
                            <div className="text-xs text-indigo-500">Min Price</div>
                          </div>
                          <div className="text-center p-2 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">₹{priceRange[1]}+</div>
                            <div className="text-xs text-purple-500">Max Price</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Verification & Features */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection('verification')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🛡️</span>
                    <span className="font-semibold text-gray-900">Trust & Features</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSections.verification ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-400">▼</span>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedSections.verification && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 space-y-3">
                        {verificationOptions.map((option) => (
                          <motion.label
                            key={option.key}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-start space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-all"
                          >
                            <div className="relative flex items-center">
                              <input
                                type="checkbox"
                                checked={localFilters[option.key] || false}
                                onChange={(e) => handleFilterChange(option.key, e.target.checked)}
                                className="w-5 h-5 rounded border-2 border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-all"
                              />
                              {localFilters[option.key] && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute inset-0 flex items-center justify-center"
                                >
                                  <span className="text-white text-xs">✓</span>
                                </motion.div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className={`text-lg ${option.color}`}>{option.icon}</span>
                                <span className="font-medium text-gray-900">{option.label}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Clear Filters */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClearFilters}
                  disabled={activeFiltersCount === 0}
                  className={`w-full py-3 px-4 rounded-xl font-medium transition-all ${
                    activeFiltersCount > 0
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>🔄</span>
                    <span>Clear All Filters</span>
                    {activeFiltersCount > 0 && (
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">
                        {activeFiltersCount}
                      </div>
                    )}
                  </div>
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-indigo-600">{resultCount}</div>
                    <div className="text-xs text-indigo-500">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">{activeFiltersCount}</div>
                    <div className="text-xs text-purple-500">Filters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onToggle}
        />
      )}

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
};

export default FilterPanel;