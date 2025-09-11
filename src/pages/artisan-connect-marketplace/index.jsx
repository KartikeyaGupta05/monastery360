import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterPanel from './components/FilterPanel';
import SortControls from './components/SortControls';
import ArtisanCard from './components/ArtisanCard';
import QuickViewModal from './components/QuickViewModal';
import ArtisanProfileModal from './components/ArtisanProfileModal';

const ArtisanConnectMarketplace = () => {
  const [filters, setFilters] = useState({
    craftType: 'all',
    location: 'all',
    priceRange: 'all',
    verified: false,
    monasteryEndorsed: false,
    inStock: false
  });
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Mock artisan data
  const mockArtisans = [
    {
      id: 1,
      name: "Sacred Thangka - Medicine Buddha",
      artisanName: "Tenzin Norbu",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      location: "Ladakh, India",
      price: 2500,
      rating: 4.9,
      reviews: 47,
      totalProducts: 18,
      description: "Hand-painted traditional Thangka depicting Medicine Buddha, created using ancient techniques passed down through generations. Made with natural pigments and gold leaf on cotton canvas.",
      story: "Crafted by master artist Tenzin Norbu, who learned this sacred art from his grandfather at Hemis Monastery.",
      fullStory: `Tenzin Norbu was born in the ancient village of Hemis, where the sound of prayer wheels and chanting monks formed the soundtrack of his childhood. At the age of seven, he began learning the sacred art of Thangka painting from his grandfather, Lama Sonam, a renowned master who had spent decades perfecting this divine craft.\n\nEach brushstroke in Tenzin's work carries the weight of centuries-old tradition. He spends months on a single piece, beginning each day with meditation and prayers, ensuring that every detail reflects the spiritual essence of the subject. His Medicine Buddha Thangkas are particularly revered for their healing energy and precise iconographic details.\n\nThrough his art, Tenzin supports the Hemis Monastery's restoration projects and provides for his family while keeping this precious tradition alive for future generations.`,
      specialty: "Thangka Painting",
      experience: 25,
      monastery: "Hemis Monastery",
      orders: 234,
      verified: true,
      monasteryEndorsed: true,
      inStock: true,
      craftType: 'thangka',
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
      ]
    },
    {
      id: 2,
      name: "Himalayan Singing Bowl Set",
      artisanName: "Karma Dolma",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      location: "Sikkim, India",
      price: 1200,
      rating: 4.8,
      reviews: 89,
      totalProducts: 32,
      description: "Handcrafted singing bowls made from seven sacred metals, producing pure healing tones for meditation and sound therapy. Each bowl is individually tuned and blessed.",
      story: "Created by Karma Dolma, a third-generation metalworker who specializes in traditional Tibetan instruments.",
      specialty: "Metal Crafts & Instruments",
      experience: 18,
      verified: true,
      monasteryEndorsed: false,
      inStock: true,
      craftType: 'singing-bowls'
    },
    {
      id: 3,
      name: "Prayer Flags - Wind Horse Collection",
      artisanName: "Lobsang Tashi",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      location: "Himachal Pradesh, India",
      price: 450,
      rating: 4.7,
      reviews: 156,
      totalProducts: 45,
      description: "Traditional cotton prayer flags printed with sacred mantras and symbols. Each set includes 25 flags in the five traditional colors representing the elements.",
      story: "Hand-printed by Lobsang Tashi using traditional woodblock techniques in the foothills of the Himalayas.",
      specialty: "Textile Arts & Printing",
      experience: 12,
      verified: true,
      monasteryEndorsed: true,
      inStock: true,
      craftType: 'prayer-flags'
    },
    {
      id: 4,
      name: "Sacred Incense - Monastery Blend",
      artisanName: "Pema Chodon",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      location: "Nepal",
      price: 180,
      rating: 4.9,
      reviews: 203,
      totalProducts: 28,
      description: "Premium incense sticks made from pure Himalayan herbs and resins. This monastery blend includes juniper, sandalwood, and rare medicinal plants for purification and meditation.",
      story: "Crafted by Pema Chodon using recipes passed down from Tibetan monasteries, each batch is blessed before packaging.",
      specialty: "Herbal Incense & Aromatics",
      experience: 15,
      verified: true,
      monasteryEndorsed: true,
      inStock: true,
      craftType: 'incense'
    },
    {
      id: 5,
      name: "Turquoise Mala Beads - 108 Count",
      artisanName: "Thukten Rinchen",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      location: "Tibet Region",
      price: 890,
      rating: 4.8,
      reviews: 67,
      totalProducts: 22,
      description: "Authentic Tibetan turquoise mala with 108 beads for meditation and prayer. Each bead is carefully selected and blessed, featuring traditional spacer beads and guru bead.",
      story: "Handcrafted by Thukten Rinchen, who sources authentic turquoise from traditional Tibetan mines.",
      specialty: "Spiritual Jewelry",
      experience: 20,
      verified: true,
      monasteryEndorsed: false,
      inStock: false,
      craftType: 'jewelry'
    },
    {
      id: 6,
      name: "Buddhist Manuscript - Heart Sutra",
      artisanName: "Geshe Tenzin",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      location: "Bhutan",
      price: 3200,
      rating: 5.0,
      reviews: 12,
      totalProducts: 8,
      description: "Hand-written Heart Sutra in traditional Tibetan script on handmade paper. Illuminated with gold ink and traditional decorative borders, perfect for study and meditation.",
      story: "Calligraphed by Geshe Tenzin, a scholar monk with 30 years of experience in traditional Tibetan writing.",
      specialty: "Sacred Calligraphy",
      experience: 30,
      verified: true,
      monasteryEndorsed: true,
      inStock: true,
      craftType: 'manuscripts'
    },
    {
      id: 7,
      name: "Copper Buddha Statue - Meditation Pose",
      artisanName: "Jamyang Norbu",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      location: "Ladakh, India",
      price: 4500,
      rating: 4.9,
      reviews: 34,
      totalProducts: 15,
      description: "Handcrafted copper Buddha statue in meditation pose, featuring intricate details and traditional proportions. Finished with protective coating and blessed by monastery lamas.",
      story: "Sculpted by master craftsman Jamyang Norbu, whose family has been creating sacred statues for five generations.",
      specialty: "Metal Sculpture",
      experience: 22,
      verified: true,
      monasteryEndorsed: true,
      inStock: true,
      craftType: 'sculptures'
    },
    {
      id: 8,
      name: "Yak Wool Meditation Shawl",
      artisanName: "Dolkar Lhamo",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      location: "Sikkim, India",
      price: 1800,
      rating: 4.7,
      reviews: 78,
      totalProducts: 26,
      description: "Luxurious meditation shawl woven from pure yak wool, naturally dyed with traditional colors. Soft, warm, and perfect for meditation practice in any climate.",
      story: "Woven by Dolkar Lhamo using traditional backstrap looms, each shawl takes weeks to complete.",
      specialty: "Traditional Weaving",
      experience: 16,
      verified: false,
      monasteryEndorsed: false,
      inStock: true,
      craftType: 'textiles'
    }
  ];

  // Filter and sort artisans
  const filteredArtisans = mockArtisans?.filter(artisan => {
    if (filters?.craftType !== 'all' && artisan?.craftType !== filters?.craftType) return false;
    if (filters?.location !== 'all' && !artisan?.location?.toLowerCase()?.includes(filters?.location)) return false;
    if (filters?.verified && !artisan?.verified) return false;
    if (filters?.monasteryEndorsed && !artisan?.monasteryEndorsed) return false;
    if (filters?.inStock && !artisan?.inStock) return false;
    
    if (filters?.priceRange !== 'all') {
      const [min, max] = filters?.priceRange?.split('-')?.map(p => p?.replace('+', ''));
      if (max) {
        if (artisan?.price < parseInt(min) || artisan?.price > parseInt(max)) return false;
      } else {
        if (artisan?.price < parseInt(min)) return false;
      }
    }
    
    return true;
  });

  const sortedArtisans = [...filteredArtisans]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'artisan-rating':
        return b?.rating - a?.rating;
      case 'cultural-significance':
        return (b?.monasteryEndorsed ? 1 : 0) - (a?.monasteryEndorsed ? 1 : 0);
      case 'verified':
        return (b?.verified ? 1 : 0) - (a?.verified ? 1 : 0);
      case 'newest':
        return b?.id - a?.id;
      default: // popularity
        return b?.reviews - a?.reviews;
    }
  });

  const handleQuickView = (artisan) => {
    setSelectedArtisan(artisan);
    setIsQuickViewOpen(true);
  };

  const handleArtisanProfile = (artisan) => {
    setSelectedArtisan(artisan);
    setIsProfileModalOpen(true);
  };

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, { ...item, addedAt: new Date() }]);
    // Show success message or notification here
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Artisan Connect Marketplace
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Discover authentic monastery-linked artisan products while supporting local craftspeople 
              and cultural preservation. Each purchase helps preserve ancient traditions and supports 
              artisan communities across the Himalayas.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheck" size={16} className="text-success" />
                <span className="text-muted-foreground">Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-secondary" />
                <span className="text-muted-foreground">Monastery Endorsed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={16} className="text-primary" />
                <span className="text-muted-foreground">Supporting Artisans</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={16} className="text-accent" />
                <span className="text-muted-foreground">Worldwide Shipping</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <FilterPanel
                filters={filters}
                onFiltersChange={setFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
                resultCount={sortedArtisans?.length}
              />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <SortControls
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                resultCount={sortedArtisans?.length}
              />

              {/* Products Grid/List */}
              {sortedArtisans?.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={
                    viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-6'
                  }
                >
                  {sortedArtisans?.map((artisan, index) => (
                    <motion.div
                      key={artisan?.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <ArtisanCard
                        artisan={artisan}
                        onQuickView={handleQuickView}
                        onAddToCart={handleAddToCart}
                        viewMode={viewMode}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-16">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    No products found
                  </h3>
                  <p className="font-body text-muted-foreground mb-6">
                    Try adjusting your filters to see more results
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFilters({
                      craftType: 'all',
                      location: 'all',
                      priceRange: 'all',
                      verified: false,
                      monasteryEndorsed: false,
                      inStock: false
                    })}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Heritage Preservation CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Every Purchase Preserves Heritage
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              When you buy from our artisan marketplace, you're not just acquiring beautiful crafts – 
              you're supporting families, preserving ancient techniques, and helping monasteries 
              continue their cultural preservation work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Users"
                iconPosition="left"
              >
                Meet Our Artisans
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Building"
                iconPosition="left"
              >
                Monastery Partnerships
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Modals */}
      <QuickViewModal
        artisan={selectedArtisan}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />
      <ArtisanProfileModal
        artisan={selectedArtisan}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Monastery360</h3>
              <p className="font-body text-sm opacity-80 mb-4">
                Preserving heritage through digital innovation and artisan support.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
                <Icon name="Twitter" size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
                <Icon name="Instagram" size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-body font-medium mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Thangka Paintings</li>
                <li>Singing Bowls</li>
                <li>Prayer Flags</li>
                <li>Sacred Incense</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-body font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Authenticity Guarantee</li>
                <li>Shipping Info</li>
                <li>Returns & Exchanges</li>
                <li>Customer Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-body font-medium mb-4">Heritage</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Artisan Stories</li>
                <li>Monastery Partners</li>
                <li>Cultural Preservation</li>
                <li>Traditional Techniques</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="font-body text-sm opacity-60">
              © {new Date()?.getFullYear()} Monastery360. Built for Smart India Hackathon 2024. 
              Preserving heritage, supporting artisans.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtisanConnectMarketplace;