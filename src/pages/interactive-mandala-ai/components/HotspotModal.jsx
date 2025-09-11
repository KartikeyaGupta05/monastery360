import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HotspotModal = ({ hotspot, isOpen, onClose }) => {
  const [currentTab, setCurrentTab] = useState('meaning');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentTab('meaning');
      setIsPlaying(false);
    }
  }, [isOpen, hotspot]);

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
    // Simulate audio playback
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  const tabs = [
    { id: 'meaning', label: 'Cultural Meaning', icon: 'BookOpen' },
    { id: 'scripture', label: 'Scripture', icon: 'Scroll' },
    { id: 'history', label: 'Historical Context', icon: 'Clock' }
  ];

  if (!hotspot) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-card rounded-xl spiritual-shadow-lg z-50 overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name={hotspot?.icon} size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-card-foreground">
                      {hotspot?.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground">
                      {hotspot?.category}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-muted-foreground hover:text-card-foreground"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setCurrentTab(tab?.id)}
                    className={`flex items-center space-x-2 px-6 py-3 font-body font-medium text-sm transition-colors duration-200 ${
                      currentTab === tab?.id
                        ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-card-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span className="hidden sm:inline">{tab?.label}</span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {currentTab === 'meaning' && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-card-foreground mb-3">
                            Spiritual Significance
                          </h3>
                          <p className="font-body text-card-foreground leading-relaxed">
                            {hotspot?.meaning}
                          </p>
                        </div>
                        
                        {hotspot?.symbolism && (
                          <div>
                            <h4 className="font-heading text-base font-semibold text-card-foreground mb-2">
                              Symbolic Representation
                            </h4>
                            <p className="font-body text-muted-foreground">
                              {hotspot?.symbolism}
                            </p>
                          </div>
                        )}

                        {hotspot?.pronunciation && (
                          <div className="bg-muted rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-heading text-base font-semibold text-card-foreground">
                                Pronunciation Guide
                              </h4>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={handlePlayAudio}
                                iconName={isPlaying ? "Pause" : "Play"}
                                iconPosition="left"
                                disabled={isPlaying}
                              >
                                {isPlaying ? 'Playing...' : 'Listen'}
                              </Button>
                            </div>
                            <p className="font-mono text-sm text-muted-foreground">
                              {hotspot?.pronunciation}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {currentTab === 'scripture' && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-card-foreground mb-3">
                            Sacred Text Reference
                          </h3>
                          <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-lg p-4">
                            <p className="font-body text-card-foreground italic leading-relaxed mb-3">
                              "{hotspot?.scripture}"
                            </p>
                            <p className="font-caption text-sm text-muted-foreground">
                              — {hotspot?.scriptureSource}
                            </p>
                          </div>
                        </div>
                        
                        {hotspot?.translation && (
                          <div>
                            <h4 className="font-heading text-base font-semibold text-card-foreground mb-2">
                              Modern Translation
                            </h4>
                            <p className="font-body text-muted-foreground">
                              {hotspot?.translation}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {currentTab === 'history' && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-card-foreground mb-3">
                            Historical Background
                          </h3>
                          <p className="font-body text-card-foreground leading-relaxed">
                            {hotspot?.history}
                          </p>
                        </div>
                        
                        {hotspot?.period && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-muted rounded-lg p-4">
                              <h4 className="font-heading text-sm font-semibold text-card-foreground mb-1">
                                Time Period
                              </h4>
                              <p className="font-body text-muted-foreground">
                                {hotspot?.period}
                              </p>
                            </div>
                            <div className="bg-muted rounded-lg p-4">
                              <h4 className="font-heading text-sm font-semibold text-card-foreground mb-1">
                                Cultural Origin
                              </h4>
                              <p className="font-body text-muted-foreground">
                                {hotspot?.origin}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="border-t border-border p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="Sparkles" size={16} />
                    <span className="font-caption text-sm">
                      AI-powered cultural insights
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="default">
                      Explore Related
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HotspotModal;