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
import FloatingCartIcon from './components/FloatingCartIcon';
import CartPanel from './components/CartPanel';
import { image } from 'd3';


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

  // --- CART STATE AND LOGIC UPDATES ---
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // NEW: State for cart panel visibility

  // Mock artisan data
  const mockArtisans = [
    {
      id: 1,
      name: "Sacred Thangka - Chenrezig (Avalokiteshvara)",
      artisanName: "Pema Dorjee",
      image: "/assets/images/Aimg3.jpg",
      profileImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Gangtok, Sikkim",
      price: 3200,
      rating: 4.8,
      reviews: 39,
      totalProducts: 22,
      description: "Hand-painted Thangka of Chenrezig (Avalokiteshvara), the Bodhisattva of Compassion. Created using mineral pigments and 24k gold on cotton canvas, representing the deep spiritual traditions of Sikkim.",
      story: "Crafted by artisan Pema Dorjee, who learned the sacred art of Thangka from monks at Enchey Monastery in Sikkim.",
      fullStory: `Born in the hills of Gangtok, Pema Dorjee grew up surrounded by the chants and rituals of nearby monasteries. At fifteen, he began training under a Thangka master at Enchey Monastery, where he studied iconography, sacred geometry, and the spiritual symbolism embedded in each painting.\n\nEach of Pema’s Thangkas is a meditative journey—he begins his day with prayers, then carefully grinds natural stones and herbs to create pigments. The use of 24k gold leaf highlights the divine presence in his work. His Chenrezig paintings are especially revered, symbolizing infinite compassion and blessings.\n\nThrough his craft, Pema supports young apprentices in Sikkim and donates a portion of his earnings to local monastery schools, ensuring the tradition continues to flourish in the Himalayas.`,
      specialty: "Thangka Painting",
      experience: 18,
      monastery: "Enchey Monastery",
      orders: 187,
      verified: true,
      monasteryEndorsed: true,
      inStock: true,
      craftType: 'thangka',
      gallery: [
        "/assets/images/Aimg3.jpg",
        "https://images.unsplash.com/photo-1584277260435-9a3e0b7f5e2a?w=400",
        "https://images.unsplash.com/photo-1602143470302-7d64d8a0e7b4?w=400"
      ]
    },
    {
      id: 2,
      name: "Handwoven Tibetan Carpet - Dragon Motif",
      artisanName: "Sonam Choden",
      image: "/assets/images/A img1.jpg",
      profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Gangtok, Sikkim",
      price: 4800,
      rating: 4.9,
      reviews: 52,
      totalProducts: 27,
      description: "Traditional Tibetan-style carpet handwoven with pure wool, featuring a vibrant dragon motif symbolizing strength and protection. Dyed with natural colors and crafted on traditional looms.",
      story: "Woven by Sonam Choden, a master weaver from Gangtok, who has been preserving the age-old Tibetan carpet weaving tradition for over two decades.",
      specialty: "Handwoven Carpets",
      experience: 22,
      verified: true,
      monasteryEndorsed: true,
      inStock: true,
      craftType: 'handwoven-carpets',
      gallery: [
        "/assets/images/A img1.jpg",
        "https://images.unsplash.com/photo-1602526216513-b2f8c9a3e6a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1602144094701-4b0c55c37a93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 3,
      name: "Lepcha Handwoven Shawl - Traditional Pattern",
      artisanName: "Meyden Lepcha",
      image: "/assets/images/Aimg5.jpg",
      profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Dzongu, Sikkim",
      price: 2200,
      rating: 4.8,
      reviews: 64,
      totalProducts: 19,
      description: "Handwoven Lepcha shawl made with organic cotton and dyed with natural plant-based colors. Features traditional geometric patterns unique to the Lepcha tribe.",
      story: "Woven by Meyden Lepcha from Dzongu, a region considered the holy land of the Lepcha community. She learned weaving from her mother and now trains young women to preserve this cultural craft.",
      specialty: "Lepcha Weaving",
      experience: 15,
      verified: true,
      monasteryEndorsed: false,
      inStock: true,
      craftType: 'lepcha-weaves',
      gallery: [
        "/assets/images/Aimg5.jpg",
        "https://images.unsplash.com/photo-1582582628533-2e36fcff7bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1602143925094-20f6d9d8d8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 4,
      name: "Temi Organic Tea - First Flush",
      artisanName: "Temi Tea Estate Cooperative",
      image: "/assets/images/Aimg6.jpg",
      profileImage: "https://images.unsplash.com/photo-1590080875832-13a3d95cdb3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Temi, South Sikkim",
      price: 650,
      rating: 4.9,
      reviews: 317,
      totalProducts: 54,
      description: "Finest first flush organic black tea from the iconic Temi Tea Estate in South Sikkim. Known for its delicate aroma, golden liquor, and smooth floral taste.",
      story: "Produced by the Temi Tea Estate, established in 1969, which continues to employ traditional organic farming methods in the pristine Himalayan slopes of Sikkim.",
      specialty: "Organic Tea",
      experience: 55,
      verified: true,
      monasteryEndorsed: false,
      inStock: true,
      craftType: 'temi-tea',
      gallery: [
        "/assets/images/Aimg6.jpg",
        "https://images.unsplash.com/photo-1600508774502-0e1bb529d590?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1576169219533-bd9bcb0f0c7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
   {
  id: 5,
  name: "Choktse Folding Table - Handcrafted Design",
  artisanName: "Tashi Bhutia",
  image: "/assets/images/Aimg8.jpg",
  profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  location: "Gangtok, Sikkim",
  price: 5200,
  rating: 4.9,
  reviews: 38,
  totalProducts: 12,
  description: "Traditional Choktse folding table, hand-carved from solid Himalayan wood. Features intricate designs and vibrant motifs, perfect for ceremonial or decorative use.",
  story: "Crafted by Tashi Bhutia, a master woodworker from Gangtok, preserving the centuries-old Sikkimese tradition of Choktse furniture making.",
  specialty: "Wood Carving & Furniture",
  experience: 25,
  verified: true,
  monasteryEndorsed: true,
  inStock: true,
  craftType: 'choktse-tables',
  gallery: [
    "/assets/images/Aimg8.jpg",
    "https://images.unsplash.com/photo-1602524918303-5d28e5d9c2c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1602524956102-3f8b9a9f22e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ]
}
,
    {
      id: 6,
      name: "Traditional Sikkimese Jewellery - Coral & Turquoise Necklace",
      artisanName: "Namgyal Bhutia",
      image:"/assets/images/Aimg4.jpg",
      profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Gangtok, Sikkim",
      price: 2800,
      rating: 4.9,
      reviews: 41,
      totalProducts: 14,
      description: "Handcrafted traditional Sikkimese necklace made with coral, turquoise, silver, and amber beads. Worn during festivals and special ceremonies for prosperity and protection.",
      story: "Created by Namgyal Bhutia, a skilled jeweller from Gangtok who continues his family’s legacy of designing ornaments inspired by Tibetan and Lepcha traditions.",
      specialty: "Traditional Jewellery",
      experience: 20,
      verified: true,
      monasteryEndorsed: false,
      inStock: true,
      craftType: 'traditional-jewellery',
      gallery: [
        "/assets/images/Aimg4.jpg",
        "https://images.unsplash.com/photo-1605025183246-42b9a8b9d06b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1602144051823-9a80c7c1f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 7,
      name: "Handwoven Bamboo & Cane Basket - Utility Design",
      artisanName: "Phurba Tamang",
      image: "/assets/images/Aimg7.jpg",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      location: "Namchi, Sikkim",
      price: 850,
      rating: 4.8,
      reviews: 76,
      totalProducts: 24,
      description: "Eco-friendly handwoven basket made from locally sourced bamboo and cane. Strong, lightweight, and versatile—used for carrying vegetables, grains, or as a decorative storage piece.",
      story: "Crafted by Phurba Tamang, a bamboo artisan from Namchi, who has dedicated his life to keeping the tradition of bamboo weaving alive in his community.",
      specialty: "Bamboo & Cane Craft",
      experience: 16,
      verified: true,
      monasteryEndorsed: false,
      inStock: true,
      craftType: 'bamboo-cane',
      gallery: [
        "/assets/images/Aimg7.jpg",
        "https://images.unsplash.com/photo-1602144123459-f2b3c718e541?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1602524907824-7e54b01d3a9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
  id: 9,
  name: "Traditional Wooden Mask",
  artisanName: "Pema Dorjee",
  image: "/assets/images/Aimg2.jpg",
  profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
  location: "Sikkim, India",
  price: 2500,
  rating: 4.6,
  reviews: 41,
  totalProducts: 18,
  description: "Hand-carved wooden mask used in traditional Sikkimese festivals and Cham dances. Crafted from sustainably sourced wood and painted with natural colors.",
  story: "Carved by Pema Dorjee, who belongs to a lineage of artisans preserving sacred mask-making traditions for generations.",
  specialty: "Wood Carving",
  experience: 20,
  verified: true,
  monasteryEndorsed: true,
  inStock: true,
  craftType: 'woodwork', 
   gallery: [
        "/assets/images/Aimg2.jpg",
        "https://images.unsplash.com/photo-1602144123459-f2b3c718e541?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1602524907824-7e54b01d3a9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
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

  // --- UPDATED CART MANAGEMENT FUNCTIONS ---

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // If item exists, update its quantity
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prev, { ...item, quantity: 1, addedAt: new Date() }];
      }
    });
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // --- END OF CART UPDATES ---

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
                    viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'
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
                        // NEW: Pass handleArtisanProfile to the card
                        onViewProfile={handleArtisanProfile}
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

      {/* --- RENDER MODALS AND CART PANEL --- */}
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
        onAddToCart={handleAddToCart} // Pass add to cart function
      />

      {/* NEW: Render CartPanel */}
      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* NEW: Connect FloatingCartIcon to toggle cart */}
      <FloatingCartIcon
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        onClick={handleToggleCart}
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
              © {new Date()?.getFullYear()} Monastery360. Built for Smart India Hackathon 2025.
              Preserving heritage, supporting artisans.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtisanConnectMarketplace;