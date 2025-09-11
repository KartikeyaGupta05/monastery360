import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TourNavigation from './components/TourNavigation';
import VirtualTourViewer from './components/VirtualTourViewer';
import HotspotModal from './components/HotspotModal';
import TourControls from './components/TourControls';
import HelpOverlay from './components/HelpOverlay';
import ProgressIndicator from './components/ProgressIndicator';

const VirtualTourExperience = () => {
  // Tour locations data
  const [locations] = useState([
    {
      id: 'main-hall',
      name: 'Main Prayer Hall',
      panoramaUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
      visited: false,
      description: 'The heart of monastery life where monks gather for daily prayers and meditation.'
    },
    {
      id: 'meditation-chamber',
      name: 'Meditation Chamber',
      panoramaUrl: 'https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?w=1200&h=600&fit=crop',
      visited: false,
      description: 'A sacred space dedicated to silent contemplation and inner peace.'
    },
    {
      id: 'manuscript-library',
      name: 'Ancient Library',
      panoramaUrl: 'https://images.pixabay.com/photo/2016/11/19/15/32/library-1840438_1280.jpg?w=1200&h=600&fit=crop',
      visited: false,
      description: 'Repository of ancient texts and sacred manuscripts preserved for centuries.'
    },
    {
      id: 'courtyard',
      name: 'Central Courtyard',
      panoramaUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=600&fit=crop',
      visited: false,
      description: 'Open space where monks gather for community activities and ceremonies.'
    },
    {
      id: 'shrine-room',
      name: 'Sacred Shrine',
      panoramaUrl: 'https://images.pexels.com/photos/8978562/pexels-photo-8978562.jpeg?w=1200&h=600&fit=crop',
      visited: false,
      description: 'The most sacred space housing ancient relics and spiritual artifacts.'
    }
  ]);

  // Hotspots data
  const [hotspots] = useState([
    {
      id: 'mural-1',
      locationId: 'main-hall',
      title: 'Wheel of Dharma Mural',
      category: 'Sacred Art',
      position: { x: 25, y: 40 },
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      description: `This magnificent mural depicts the Wheel of Dharma (Dharmachakra), one of Buddhism's most important symbols representing the Noble Eightfold Path.\n\nThe eight spokes represent the eight aspects of the Noble Eightfold Path: right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, and right concentration.\n\nPainted by master artisans in the 15th century, this mural has been carefully preserved and restored multiple times throughout the monastery's history.`,
      scripture: 'Turn the wheel of Dharma for the benefit of all sentient beings, that they may find liberation from suffering.',
      scriptureSource: 'Lotus Sutra',
      historicalContext: 'This mural was commissioned during the monastery\'s golden age when it served as a major center of Buddhist learning, attracting scholars from across the Himalayan region.',
      symbols: [
        { name: 'Eight Spokes', meaning: 'The Noble Eightfold Path to enlightenment' },
        { name: 'Central Hub', meaning: 'Moral discipline and wisdom' },
        { name: 'Outer Rim', meaning: 'Mindfulness that holds everything together' }
      ],
      audioUrl: '/audio/dharma-wheel-narration.mp3',
      readingTime: '4'
    },
    {
      id: 'statue-1',
      locationId: 'main-hall',
      title: 'Buddha Shakyamuni Statue',
      category: 'Sacred Sculpture',
      position: { x: 50, y: 30 },
      image: 'https://images.pexels.com/photos/8978562/pexels-photo-8978562.jpeg?w=800&h=600&fit=crop',
      description: `This golden statue of Buddha Shakyamuni stands as the centerpiece of the main prayer hall, carved from a single piece of sandalwood and gilded with pure gold.\n\nThe Buddha is depicted in the Bhumisparsha Mudra (earth-touching gesture), representing the moment of his enlightenment when he called the earth to witness his awakening.\n\nCrafted by renowned Tibetan artisans in the 16th century, this statue has been the focal point of countless prayers and meditation sessions.`,
      scripture: 'All conditioned things are impermanent. Work out your salvation with diligence.',
      scriptureSource: 'Buddha\'s Final Words',
      historicalContext: 'This statue was consecrated during a grand ceremony attended by high lamas from across Tibet and the Himalayan regions, marking the monastery\'s establishment as a major pilgrimage site.',
      symbols: [
        { name: 'Bhumisparsha Mudra', meaning: 'Calling earth to witness enlightenment' },
        { name: 'Lotus Throne', meaning: 'Purity rising from worldly concerns' },
        { name: 'Ushnisha', meaning: 'Cranial protuberance symbolizing wisdom' }
      ],
      readingTime: '3'
    },
    {
      id: 'mandala-1',
      locationId: 'meditation-chamber',
      title: 'Sand Mandala of Compassion',
      category: 'Sacred Art',
      position: { x: 60, y: 50 },
      image: 'https://images.pixabay.com/photo/2017/08/01/11/48/mandala-2564517_1280.jpg?w=800&h=600&fit=crop',
      description: `This intricate sand mandala represents the palace of Avalokiteshvara, the Buddha of Compassion, created grain by grain using colored sand over several weeks.\n\nThe mandala serves as a meditation tool and represents the impermanence of all phenomena - it will be ceremonially destroyed upon completion to demonstrate non-attachment.\n\nEach color and symbol has deep spiritual significance, creating a three-dimensional sacred space in two dimensions.`,
      scripture: 'May all beings be free from suffering and the causes of suffering. May all beings find happiness and the causes of happiness.',
      scriptureSource: 'Metta Prayer',
      historicalContext: 'Sand mandalas have been created in this chamber for over 400 years, with each generation of monks passing down the precise techniques and symbolic meanings.',
      symbols: [
        { name: 'Central Deity', meaning: 'Avalokiteshvara, embodiment of compassion' },
        { name: 'Four Gates', meaning: 'Four immeasurable qualities: love, compassion, joy, equanimity' },
        { name: 'Protective Circle', meaning: 'Wisdom that protects from ignorance' }
      ],
      readingTime: '5'
    },
    {
      id: 'manuscript-1',
      locationId: 'manuscript-library',
      title: 'Prajnaparamita Manuscript',
      category: 'Sacred Text',
      position: { x: 40, y: 35 },
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      description: `This ancient manuscript contains the Prajnaparamita Sutra, written in gold ink on specially prepared palm leaves, dating back to the 12th century.\n\nThe text explores the concept of emptiness (sunyata) and the perfection of wisdom, considered one of the most profound philosophical works in Buddhist literature.\n\nEach page is illuminated with intricate designs and protected by silk covers, representing centuries of careful preservation by generations of monk-scholars.`,
      scripture: 'Form is emptiness, emptiness is form. Form does not differ from emptiness, emptiness does not differ from form.',
      scriptureSource: 'Heart Sutra (Prajnaparamita)',
      historicalContext: 'This manuscript was hand-copied by master calligraphers and has survived numerous challenges including natural disasters and political upheavals, making it one of the monastery\'s most precious treasures.',
      symbols: [
        { name: 'Gold Ink', meaning: 'Preciousness of wisdom teachings' },
        { name: 'Palm Leaves', meaning: 'Natural impermanence and sustainability' },
        { name: 'Silk Covers', meaning: 'Protection and reverence for sacred knowledge' }
      ],
      readingTime: '6'
    },
    {
      id: 'prayer-wheel-1',
      locationId: 'courtyard',
      title: 'Great Prayer Wheel',
      category: 'Sacred Object',
      position: { x: 70, y: 45 },
      image: 'https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?w=800&h=600&fit=crop',
      description: `This massive prayer wheel contains millions of printed mantras, primarily the Om Mani Padme Hum mantra of compassion.\n\nEach rotation is believed to generate the same merit as reciting all the mantras contained within, making it a powerful tool for accumulating positive karma.\n\nThe wheel has been turned by countless pilgrims and monks over the centuries, creating a continuous stream of prayers for the benefit of all beings.`,
      scripture: 'Om Mani Padme Hum - The jewel in the lotus, hail!',
      scriptureSource: 'Mantra of Avalokiteshvara',
      historicalContext: 'Installed in the 14th century, this prayer wheel has become a central focus of pilgrimage, with devotees traveling from distant lands to turn it and receive its blessings.',
      symbols: [
        { name: 'Copper Construction', meaning: 'Durability and spiritual conductivity' },
        { name: 'Mantras Inside', meaning: 'Concentrated spiritual energy and prayers' },
        { name: 'Spinning Motion', meaning: 'Continuous cycle of compassion and merit' }
      ],
      readingTime: '3'
    },
    {
      id: 'relic-1',
      locationId: 'shrine-room',
      title: 'Sacred Relics Stupa',
      category: 'Sacred Relic',
      position: { x: 45, y: 40 },
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
      description: `This golden stupa houses sacred relics of enlightened masters who once resided in this monastery, including hair, bone fragments, and personal items.\n\nThe stupa's architecture follows traditional Buddhist cosmology, with each level representing different stages of spiritual development and enlightenment.\n\nPilgrims circumambulate this stupa while reciting prayers, believing that proximity to these sacred remains brings blessings and spiritual merit.`,
      scripture: 'Those who see the Dharma see me; those who see me see the Dharma.',
      scriptureSource: 'Buddha\'s Teaching',
      historicalContext: 'Built to house relics of the monastery\'s founding master, this stupa has been a pilgrimage destination for over 500 years, with its golden surface renewed through generous donations from devotees.',
      symbols: [
        { name: 'Square Base', meaning: 'Earth element and stability' },
        { name: 'Circular Dome', meaning: 'Water element and compassion' },
        { name: 'Spire', meaning: 'Fire element and wisdom ascending to enlightenment' }
      ],
      readingTime: '4'
    }
  ]);

  // State management
  const [currentLocation, setCurrentLocation] = useState(locations?.[0]);
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(false);
  const [visitedHotspots, setVisitedHotspots] = useState(new Set());
  const [locationsState, setLocationsState] = useState(locations);

  // Handle location change
  const handleLocationChange = (location) => {
    setCurrentLocation(location);
    markLocationAsVisited(location?.id);
  };

  // Mark location as visited
  const markLocationAsVisited = (locationId) => {
    setLocationsState(prev => 
      prev?.map(loc => 
        loc?.id === locationId ? { ...loc, visited: true } : loc
      )
    );
  };

  // Handle hotspot click
  const handleHotspotClick = (hotspot) => {
    setSelectedHotspot(hotspot);
    setIsModalOpen(true);
    setVisitedHotspots(prev => new Set([...prev, hotspot.id]));
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHotspot(null);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetView = () => {
    setZoomLevel(1);
    setAutoRotateEnabled(false);
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Show help on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('monastery360-tour-visited');
    if (!hasVisited) {
      setShowHelp(true);
      localStorage.setItem('monastery360-tour-visited', 'true');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Virtual Tour Experience - Monastery360</title>
        <meta name="description" content="Explore ancient monasteries through immersive 360° virtual tours with interactive cultural storytelling and sacred art discovery." />
        <meta name="keywords" content="virtual tour, monastery, 360 degree, cultural heritage, Buddhist art, immersive experience" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Main Tour Interface */}
        <div className="fixed inset-0 top-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            {/* Virtual Tour Viewer */}
            <VirtualTourViewer
              currentLocation={currentLocation}
              hotspots={hotspots}
              onHotspotClick={handleHotspotClick}
              zoomLevel={zoomLevel}
              autoRotateEnabled={autoRotateEnabled}
              onLocationVisited={markLocationAsVisited}
            />

            {/* Tour Navigation Panel */}
            <TourNavigation
              currentLocation={currentLocation}
              locations={locationsState}
              onLocationChange={handleLocationChange}
              isFullscreen={isFullscreen}
              onToggleFullscreen={toggleFullscreen}
              audioEnabled={audioEnabled}
              onToggleAudio={() => setAudioEnabled(!audioEnabled)}
              showHelp={showHelp}
              onToggleHelp={() => setShowHelp(!showHelp)}
            />

            {/* Progress Indicator */}
            <ProgressIndicator
              locations={locationsState}
              currentLocationId={currentLocation?.id}
              visitedHotspots={visitedHotspots?.size}
              totalHotspots={hotspots?.length}
            />

            {/* Tour Controls */}
            <TourControls
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onResetView={handleResetView}
              onToggleAutoRotate={() => setAutoRotateEnabled(!autoRotateEnabled)}
              autoRotateEnabled={autoRotateEnabled}
              zoomLevel={zoomLevel}
            />

            {/* Hotspot Modal */}
            <HotspotModal
              hotspot={selectedHotspot}
              isOpen={isModalOpen}
              onClose={closeModal}
            />

            {/* Help Overlay */}
            <HelpOverlay
              isVisible={showHelp}
              onClose={() => setShowHelp(false)}
            />

            {/* Mobile Instructions */}
            <div className="fixed bottom-4 left-4 right-4 md:hidden z-30">
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 spiritual-shadow">
                <p className="font-body text-xs text-center text-muted-foreground">
                  Swipe to look around • Tap glowing markers to explore • Pinch to zoom
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VirtualTourExperience;