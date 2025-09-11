import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SymbolLegend = ({ symbols, exploredSymbols, onSymbolSelect, selectedCategory, onCategoryChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const categories = [
    { id: 'all', label: 'All Symbols', icon: 'Grid3X3', count: symbols?.length },
    { id: 'deities', label: 'Deities', icon: 'Crown', count: symbols?.filter(s => s?.category === 'deities')?.length },
    { id: 'elements', label: 'Elements', icon: 'Flame', count: symbols?.filter(s => s?.category === 'elements')?.length },
    { id: 'mantras', label: 'Mantras', icon: 'Type', count: symbols?.filter(s => s?.category === 'mantras')?.length },
    { id: 'geometry', label: 'Sacred Geometry', icon: 'Triangle', count: symbols?.filter(s => s?.category === 'geometry')?.length }
  ];

  const filteredSymbols = selectedCategory === 'all' 
    ? symbols 
    : symbols?.filter(symbol => symbol?.category === selectedCategory);

  const completionPercentage = Math.round((exploredSymbols?.length / symbols?.length) * 100);

  return (
    <div className="bg-card rounded-lg spiritual-shadow border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading text-lg font-semibold text-card-foreground">
              Symbol Legend
            </h3>
            <p className="font-caption text-sm text-muted-foreground">
              {exploredSymbols?.length} of {symbols?.length} explored
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-muted-foreground hover:text-card-foreground"
          >
            <Icon name={isCollapsed ? "ChevronDown" : "ChevronUp"} size={18} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="font-caption text-xs text-muted-foreground">
              Exploration Progress
            </span>
            <span className="font-caption text-xs font-medium text-card-foreground">
              {completionPercentage}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-primary rounded-full h-2"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Category Filters */}
            <div className="p-4 border-b border-border">
              <h4 className="font-heading text-sm font-semibold text-card-foreground mb-3">
                Categories
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {categories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => onCategoryChange(category?.id)}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category?.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80 text-card-foreground'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name={category?.icon} size={16} />
                      <span className="font-body text-sm font-medium">
                        {category?.label}
                      </span>
                    </div>
                    <span className={`font-caption text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category?.id
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-card text-muted-foreground'
                    }`}>
                      {category?.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Symbol List */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <h4 className="font-heading text-sm font-semibold text-card-foreground mb-3">
                Symbols ({filteredSymbols?.length})
              </h4>
              <div className="space-y-2">
                {filteredSymbols?.map((symbol) => {
                  const isExplored = exploredSymbols?.includes(symbol?.id);
                  return (
                    <motion.button
                      key={symbol?.id}
                      onClick={() => onSymbolSelect(symbol)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                        isExplored
                          ? 'bg-success/10 border border-success/20 hover:bg-success/20' :'bg-muted hover:bg-muted/80 border border-transparent'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isExplored ? 'bg-success text-success-foreground' : 'bg-card text-muted-foreground'
                      }`}>
                        <Icon name={symbol?.icon} size={16} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-body text-sm font-medium text-card-foreground">
                          {symbol?.title}
                        </p>
                        <p className="font-caption text-xs text-muted-foreground">
                          {symbol?.shortDescription}
                        </p>
                      </div>
                      {isExplored && (
                        <Icon name="CheckCircle" size={16} className="text-success" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Achievement Section */}
            {completionPercentage >= 100 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border-t border-border bg-success/5"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Trophy" size={20} className="text-success-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-card-foreground">
                      Mandala Master!
                    </p>
                    <p className="font-caption text-xs text-muted-foreground">
                      You've explored all symbols in this mandala
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SymbolLegend;