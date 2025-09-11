import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NavigationControls = ({ 
  currentMandalaIndex, 
  totalMandalas, 
  onPrevious, 
  onNext, 
  onReset,
  exploredCount,
  totalSymbols 
}) => {
  const progressPercentage = Math.round((exploredCount / totalSymbols) * 100);

  return (
    <div className="bg-card rounded-lg spiritual-shadow border border-border p-4">
      {/* Progress Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-heading text-sm font-semibold text-card-foreground">
            Exploration Progress
          </h4>
          <span className="font-caption text-xs text-muted-foreground">
            {exploredCount}/{totalSymbols} symbols
          </span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <motion.div
            className="bg-primary rounded-full h-2"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        <p className="font-caption text-xs text-muted-foreground">
          {progressPercentage}% complete
        </p>
      </div>
      {/* Navigation Controls */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-body text-sm text-card-foreground">
            Mandala {currentMandalaIndex + 1} of {totalMandalas}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Reset
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="secondary"
            onClick={onPrevious}
            disabled={currentMandalaIndex === 0}
            iconName="ChevronLeft"
            iconPosition="left"
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            variant="secondary"
            onClick={onNext}
            disabled={currentMandalaIndex === totalMandalas - 1}
            iconName="ChevronRight"
            iconPosition="right"
            className="flex-1"
          >
            Next
          </Button>
        </div>
      </div>
      {/* Achievement Badges */}
      {progressPercentage >= 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 pt-4 border-t border-border"
        >
          <div className="flex items-center space-x-2 text-success">
            <Icon name="Award" size={16} />
            <span className="font-body text-sm font-medium">
              Mandala Completed!
            </span>
          </div>
        </motion.div>
      )}
      {progressPercentage >= 50 && progressPercentage < 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 pt-4 border-t border-border"
        >
          <div className="flex items-center space-x-2 text-warning">
            <Icon name="Star" size={16} />
            <span className="font-body text-sm font-medium">
              Halfway There!
            </span>
          </div>
        </motion.div>
      )}
      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-border">
        <h5 className="font-heading text-xs font-semibold text-card-foreground mb-2 uppercase tracking-wide">
          Quick Actions
        </h5>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="BookOpen"
            iconPosition="left"
            className="justify-start text-xs"
          >
            Guide
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Share2"
            iconPosition="left"
            className="justify-start text-xs"
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationControls;