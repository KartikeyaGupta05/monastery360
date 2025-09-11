import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MandalaViewer from './components/MandalaViewer';
import HotspotModal from './components/HotspotModal';
import SymbolLegend from './components/SymbolLegend';
import MandalaSelector from './components/MandalaSelector';
import NavigationControls from './components/NavigationControls';

const InteractiveMandalaAI = () => {
  const [selectedMandala, setSelectedMandala] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exploredSymbols, setExploredSymbols] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [currentMandalaIndex, setCurrentMandalaIndex] = useState(0);

  // Mock mandala data
  const mandalas = [
    {
      id: 'tara-mandala',
      title: 'Green Tara Mandala',
      origin: 'Tibetan Buddhist',
      difficulty: 'beginner',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
      thumbnailUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      description: `The Green Tara Mandala represents compassion and protection in Tibetan Buddhism.\nThis sacred artwork features intricate geometric patterns surrounding the central deity.`,
      hotspots: [
        {
          id: 'tara-center',
          x: 50,
          y: 50,
          icon: 'Crown',
          title: 'Green Tara',
          category: 'deities',
          shortDescription: 'The compassionate mother deity',
          meaning: `Green Tara is revered as the "Mother of Liberation" in Tibetan Buddhism. She represents active compassion and is known for her swift response to the suffering of sentient beings. Her green color symbolizes her connection to enlightened activity and her ability to act quickly to help those in need.`,
          symbolism: 'The green color represents the wind element and active compassion, while her posture indicates readiness to spring into action.',
          scripture: 'Om Tare Tuttare Ture Soha - Swift liberator from all fears and sufferings',
          scriptureSource: 'Tara Tantra',
          translation: 'May the blessed Tara swiftly liberate us from all fears and grant us all accomplishments.',
          history: `The worship of Tara dates back to the 7th century CE when she was introduced to Tibet from India. According to legend, Tara was born from the tears of Avalokiteshvara, the bodhisattva of compassion, as he wept for the suffering of all beings.`,
          period: '7th century CE - Present',
          origin: 'Indian Buddhism, adopted by Tibet',
          pronunciation: 'TAH-rah'
        },
        {
          id: 'lotus-petals',
          x: 30,
          y: 70,
          icon: 'Flower',
          title: 'Lotus Petals',
          category: 'elements',
          shortDescription: 'Symbol of purity and enlightenment',
          meaning: `The lotus petals in the mandala represent the unfolding of spiritual consciousness. Just as the lotus rises from muddy waters to bloom in pristine beauty, the practitioner rises from the mud of ignorance to the light of wisdom.`,
          symbolism: 'Each petal represents a different aspect of the spiritual path, from initial awakening to full enlightenment.',
          scripture: 'Like a lotus flower born in water, we are born in the world but should not be polluted by the world',
          scriptureSource: 'Lotus Sutra',
          translation: 'Remain pure and untainted by worldly concerns while living fully in the world.',
          history: `The lotus has been a sacred symbol in Buddhism since its inception. The Buddha is often depicted seated on a lotus throne, and many Buddhist teachings use the lotus as a metaphor for spiritual development.`,
          period: '6th century BCE - Present',
          origin: 'Ancient Indian spiritual traditions',
          pronunciation: 'LOH-tus'
        },
        {
          id: 'vajra-symbol',
          x: 70,
          y: 30,
          icon: 'Zap',
          title: 'Vajra Symbol',
          category: 'geometry',
          shortDescription: 'Diamond thunderbolt of enlightenment',
          meaning: `The vajra represents the indestructible nature of enlightenment and the power of spiritual transformation. It symbolizes both the diamond-like clarity of wisdom and the thunderbolt force of compassionate action.`,
          symbolism: 'The five-pronged vajra represents the five Buddha families and the transformation of the five poisons into wisdom.',
          scripture: 'Vajra-like samadhi destroys all mental afflictions without remainder',
          scriptureSource: 'Vajracchedika Prajnaparamita Sutra',
          translation: 'Diamond-like concentration cuts through all illusions and mental obstacles.',
          history: `The vajra originated in Vedic traditions as the weapon of Indra, the king of gods. In Buddhism, it was transformed into a symbol of spiritual power and the indestructible nature of enlightenment.`,
          period: '1st century CE - Present',
          origin: 'Vedic tradition, adapted by Buddhism',
          pronunciation: 'VAHJ-rah'
        },
        {
          id: 'mantra-circle',
          x: 50,
          y: 20,
          icon: 'Type',
          title: 'Mantra Circle',
          category: 'mantras',
          shortDescription: 'Sacred sound vibrations',
          meaning: `The circular arrangement of mantras creates a protective barrier and generates spiritual energy. These sacred syllables are believed to carry the essence of enlightened beings and their blessings.`,
          symbolism: 'The circular formation represents the cyclical nature of existence and the continuous flow of compassionate energy.',
          scripture: 'Gate gate pāragate pārasaṃgate bodhi svāhā',
          scriptureSource: 'Heart Sutra',
          translation: 'Gone, gone, gone beyond, gone completely beyond, awakening, so be it!',
          history: `Mantras have been used in spiritual practice for over 3,000 years. In Tibetan Buddhism, they are considered to be the speech aspect of enlightened beings, carrying their blessings and power.`,
          period: '1000 BCE - Present',
          origin: 'Vedic traditions, developed in Buddhism',
          pronunciation: 'MAN-trah'
        },
        {
          id: 'protective-flames',
          x: 80,
          y: 80,
          icon: 'Flame',
          title: 'Protective Flames',
          category: 'elements',
          shortDescription: 'Wisdom fire burning ignorance',
          meaning: `The protective flames surrounding the mandala represent the fire of wisdom that burns away ignorance and negative emotions. They also serve as a protective barrier against harmful influences.`,
          symbolism: 'The flames transform negative energy into wisdom and create a sacred space for spiritual practice.',
          scripture: 'Wisdom is like fire - it illuminates the darkness and transforms everything it touches',
          scriptureSource: 'Abhidhamma Pitaka',
          translation: 'True understanding burns away confusion and lights the path to liberation.',
          history: `Fire has been used as a symbol of purification and transformation in spiritual traditions worldwide. In Buddhism, the fire of wisdom is one of the most important metaphors for enlightenment.`,
          period: '6th century BCE - Present',
          origin: 'Universal spiritual symbolism',
          pronunciation: 'FLAYMS'
        }
      ]
    },
    {
      id: 'medicine-buddha-mandala',
      title: 'Medicine Buddha Mandala',
      origin: 'Tibetan Healing Tradition',
      difficulty: 'intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=800&fit=crop',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
      description: `The Medicine Buddha Mandala focuses on healing and the alleviation of suffering.\nThis mandala contains powerful symbols for physical, mental, and spiritual healing.`,
      hotspots: [
        {
          id: 'medicine-buddha',
          x: 50,
          y: 50,
          icon: 'Heart',
          title: 'Medicine Buddha',
          category: 'deities',
          shortDescription: 'The healing Buddha',
          meaning: `Medicine Buddha, known as Bhaisajyaguru, is the Buddha of healing and medicine. His deep blue color represents the healing power of the lapis lazuli and his ability to cure both physical and spiritual ailments.`,
          symbolism: 'His blue color symbolizes the healing power of the deep blue beryl, and his medicine bowl contains the nectar of immortality.',
          scripture: 'May all beings be free from illness and suffering, may they find perfect health and happiness',
          scriptureSource: 'Medicine Buddha Sutra',
          translation: 'Through the power of Medicine Buddha, may all beings achieve perfect health in body and mind.',
          history: `The Medicine Buddha tradition emerged in Mahayana Buddhism around the 7th century CE. The practice spread throughout Asia as a powerful method for healing and purification.`,
          period: '7th century CE - Present',
          origin: 'Mahayana Buddhist tradition',
          pronunciation: 'BHY-sha-jya-guru'
        },
        {
          id: 'healing-herbs',
          x: 25,
          y: 75,
          icon: 'Leaf',
          title: 'Sacred Healing Herbs',
          category: 'elements',
          shortDescription: 'Medicinal plants of enlightenment',
          meaning: `The sacred herbs represent the natural healing power of plants and the connection between physical and spiritual wellness. Each herb has specific healing properties for different ailments.`,
          symbolism: 'The herbs symbolize the natural harmony between body, mind, and environment in the healing process.',
          scripture: 'Nature provides all the medicine needed for healing when approached with wisdom and compassion',
          scriptureSource: 'Traditional Tibetan Medicine Texts',
          translation: 'The earth offers healing to those who understand the interconnectedness of all life.',
          history: `Tibetan medicine has used sacred herbs for over 1,000 years, combining Buddhist philosophy with traditional healing practices from India, China, and Bon traditions.`,
          period: '8th century CE - Present',
          origin: 'Tibetan medical tradition',
          pronunciation: 'HERBS'
        },
        {
          id: 'healing-mantras',
          x: 75,
          y: 25,
          icon: 'Volume2',
          title: 'Healing Mantras',
          category: 'mantras',
          shortDescription: 'Sound vibrations for healing',
          meaning: `The healing mantras create therapeutic sound vibrations that promote physical, emotional, and spiritual healing. These sacred sounds are believed to restore harmony and balance to the body's energy systems.`,symbolism: 'The sound waves represent the vibrational nature of reality and the power of sound to heal and transform.',scripture: 'Tayata Om Bekandze Bekandze Maha Bekandze Radza Samudgate Soha',scriptureSource: 'Medicine Buddha Mantra',translation: 'May the Medicine Buddha eliminate the pain of illness and grant perfect health and happiness.',
          history: `Healing mantras have been used in Tibetan medicine for centuries, combining the power of sound with visualization and meditation for therapeutic purposes.`,
          period: '8th century CE - Present',origin: 'Tibetan Buddhist healing tradition',pronunciation: 'ta-YA-ta om be-KAN-dze'
        }
      ]
    },
    {
      id: 'kalachakra-mandala',title: 'Kalachakra Mandala',origin: 'Advanced Tantric Practice',
      difficulty: 'advanced',imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop',thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      description: `The Kalachakra Mandala represents the wheel of time and the cosmic cycles.\nThis is one of the most complex mandalas in Tibetan Buddhism, containing over 700 deities.`,
      hotspots: [
        {
          id: 'time-wheel',x: 50,y: 50,icon: 'Clock',title: 'Wheel of Time',category: 'geometry',shortDescription: 'The cosmic cycles of existence',
          meaning: `The Wheel of Time represents the cyclical nature of existence, from the cosmic level down to the individual. It shows how time, space, and consciousness are interconnected in the fabric of reality.`,
          symbolism: 'The wheel symbolizes the endless cycles of time and the possibility of transcending temporal limitations through spiritual practice.',scripture: 'Time is the creator and destroyer of all phenomena, yet the enlightened mind transcends time itself',scriptureSource: 'Kalachakra Tantra',translation: 'Understanding the nature of time leads to liberation from its constraints and the achievement of timeless awareness.',history: `The Kalachakra system was introduced to Tibet in the 11th century and represents one of the most sophisticated philosophical and practical systems in Tibetan Buddhism.`,period: '10th century CE - Present',origin: 'Indian Tantric Buddhism',pronunciation: 'ka-la-CHA-kra'
        }
      ]
    }
  ];

  useEffect(() => {
    if (mandalas?.length > 0) {
      setSelectedMandala(mandalas?.[0]);
    }
  }, []);

  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot);
    setIsModalOpen(true);
    
    // Add to explored symbols if not already explored
    if (!exploredSymbols?.includes(hotspot?.id)) {
      setExploredSymbols(prev => [...prev, hotspot?.id]);
    }
  };

  const handleMandalaSelect = (mandala) => {
    setSelectedMandala(mandala);
    setCurrentMandalaIndex(mandalas?.findIndex(m => m?.id === mandala?.id));
    setExploredSymbols([]);
    setZoomLevel(1);
  };

  const handlePreviousMandala = () => {
    if (currentMandalaIndex > 0) {
      const newIndex = currentMandalaIndex - 1;
      setCurrentMandalaIndex(newIndex);
      setSelectedMandala(mandalas?.[newIndex]);
      setExploredSymbols([]);
      setZoomLevel(1);
    }
  };

  const handleNextMandala = () => {
    if (currentMandalaIndex < mandalas?.length - 1) {
      const newIndex = currentMandalaIndex + 1;
      setCurrentMandalaIndex(newIndex);
      setSelectedMandala(mandalas?.[newIndex]);
      setExploredSymbols([]);
      setZoomLevel(1);
    }
  };

  const handleReset = () => {
    setExploredSymbols([]);
    setZoomLevel(1);
    setSelectedCategory('all');
  };

  const handleSymbolSelect = (symbol) => {
    const hotspot = selectedMandala?.hotspots?.find(h => h?.id === symbol?.id);
    if (hotspot) {
      handleHotspotClick(hotspot);
    }
  };

  if (!selectedMandala) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-body text-muted-foreground">Loading sacred mandalas...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Interactive Mandala AI
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                Discover the profound meanings behind sacred symbols through AI-powered cultural storytelling. 
                Click on the glowing hotspots to unlock ancient wisdom and spiritual insights.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Sparkles" size={16} />
                  <span className="font-caption text-sm">AI-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="MousePointer" size={16} />
                  <span className="font-caption text-sm">Interactive Exploration</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="BookOpen" size={16} />
                  <span className="font-caption text-sm">Cultural Education</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <MandalaSelector
                mandalas={mandalas}
                selectedMandala={selectedMandala}
                onMandalaSelect={handleMandalaSelect}
                isOpen={isSelectorOpen}
                onToggle={() => setIsSelectorOpen(!isSelectorOpen)}
              />
              <div className="hidden lg:block">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  {selectedMandala?.title}
                </h2>
                <p className="font-body text-muted-foreground">
                  {selectedMandala?.origin} • {selectedMandala?.hotspots?.length} interactive symbols
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                iconName="HelpCircle"
                iconPosition="left"
              >
                Guide
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Share2"
                iconPosition="left"
              >
                Share
              </Button>
            </div>
          </div>

          {/* Mandala Selector Overlay */}
          <AnimatePresence>
            {isSelectorOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-8"
              >
                <MandalaSelector
                  mandalas={mandalas}
                  selectedMandala={selectedMandala}
                  onMandalaSelect={handleMandalaSelect}
                  isOpen={isSelectorOpen}
                  onToggle={() => setIsSelectorOpen(!isSelectorOpen)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Mandala Viewer */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg spiritual-shadow border border-border overflow-hidden">
                <div className="aspect-square">
                  <MandalaViewer
                    selectedMandala={selectedMandala}
                    onHotspotClick={handleHotspotClick}
                    activeHotspot={activeHotspot?.id}
                    zoomLevel={zoomLevel}
                    onZoomChange={setZoomLevel}
                  />
                </div>
                
                {/* Mandala Info */}
                <div className="p-6 border-t border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                        {selectedMandala?.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {selectedMandala?.description}
                      </p>
                    </div>
                    <div className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${
                      selectedMandala?.difficulty === 'beginner' ?'bg-success/10 text-success'
                        : selectedMandala?.difficulty === 'intermediate' ?'bg-warning/10 text-warning' :'bg-error/10 text-error'
                    }`}>
                      {selectedMandala?.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Navigation Controls */}
              <NavigationControls
                currentMandalaIndex={currentMandalaIndex}
                totalMandalas={mandalas?.length}
                onPrevious={handlePreviousMandala}
                onNext={handleNextMandala}
                onReset={handleReset}
                exploredCount={exploredSymbols?.length}
                totalSymbols={selectedMandala?.hotspots?.length}
              />

              {/* Symbol Legend */}
              <SymbolLegend
                symbols={selectedMandala?.hotspots}
                exploredSymbols={exploredSymbols}
                onSymbolSelect={handleSymbolSelect}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Continue Your Spiritual Journey
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Explore more of our digital heritage platform and discover the rich cultural traditions of monasteries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Camera"
                iconPosition="left"
                asChild
              >
                <Link to="/virtual-tour-experience">
                  Take Virtual Tour
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ShoppingBag"
                iconPosition="left"
                asChild
              >
                <Link to="/artisan-connect-marketplace">
                  Browse Artisan Crafts
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Hotspot Modal */}
      <HotspotModal
        hotspot={activeHotspot}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setActiveHotspot(null);
        }}
      />
    </div>
  );
};

export default InteractiveMandalaAI;