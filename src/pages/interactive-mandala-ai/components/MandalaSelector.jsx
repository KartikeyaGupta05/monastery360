import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MandalaSelector = ({ mandalas, selectedMandala, onMandalaSelect, isOpen, onToggle }) => {
  if (!isOpen) {
    return (
      <Button
        variant="secondary"
        onClick={onToggle}
        iconName="Grid3X3"
        iconPosition="left"
        className="spiritual-shadow"
      >
        Browse Mandalas
      </Button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-card rounded-lg spiritual-shadow border border-border p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold text-card-foreground">
          Select Mandala
        </h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-muted-foreground hover:text-card-foreground"
        >
          <Icon name="X" size={18} />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {mandalas?.map((mandala) => (
          <motion.button
            key={mandala?.id}
            onClick={() => {
              onMandalaSelect(mandala);
              onToggle();
            }}
            className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              selectedMandala?.id === mandala?.id
                ? 'border-primary shadow-lg'
                : 'border-border hover:border-primary/50 hover:shadow-md'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={mandala?.thumbnailUrl}
                alt={mandala?.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <h4 className="font-heading text-sm font-semibold mb-1">
                {mandala?.title}
              </h4>
              <p className="font-caption text-xs opacity-90">
                {mandala?.origin} • {mandala?.hotspots?.length} symbols
              </p>
            </div>

            {selectedMandala?.id === mandala?.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Check" size={14} className="text-primary-foreground" />
              </div>
            )}

            {/* Difficulty Indicator */}
            <div className="absolute top-2 left-2">
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                mandala?.difficulty === 'beginner' ?'bg-success text-success-foreground'
                  : mandala?.difficulty === 'intermediate' ?'bg-warning text-warning-foreground' :'bg-error text-error-foreground'
              }`}>
                {mandala?.difficulty}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="font-body text-muted-foreground">
            {mandalas?.length} sacred artworks available
          </span>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="font-caption text-xs">Beginner</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="font-caption text-xs">Intermediate</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-error rounded-full"></div>
              <span className="font-caption text-xs">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MandalaSelector;