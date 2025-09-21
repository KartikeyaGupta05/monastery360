import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArtisanCard = ({ artisan, onQuickView, onAddToCart, viewMode = 'grid' }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const cardRef = useRef(null);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const formatPrice = (price, currency = 'INR') => {
    if (!price) return 'Price on request';
    
    if (currency === 'INR') {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(price);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(price / 83);
  };

  const getDiscountPercentage = () => {
    if (artisan?.originalPrice && artisan?.price < artisan?.originalPrice) {
      return Math.round(((artisan.originalPrice - artisan.price) / artisan.originalPrice) * 100);
    }
    return null;
  };

  const TrustBadges = () => (
    <div className="flex items-center gap-2 mb-3 flex-wrap">
      {artisan?.verified && (
        <div className="flex items-center gap-1 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-full shadow-sm">
          <Icon name="ShieldCheck" size={14} className="text-green-600" />
          <span className="text-xs font-semibold">Verified</span>
        </div>
      )}
      {artisan?.monasteryEndorsed && (
        <div className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full shadow-sm">
          <Icon name="Award" size={14} className="text-amber-600" />
          <span className="text-xs font-semibold">Endorsed</span>
        </div>
      )}
    </div>
  );

  const RatingDisplay = ({ rating, reviews, size = 'sm' }) => {
    const fullStars = Math.floor(rating || 0);
    const hasHalfStar = (rating % 1) >= 0.5;
    
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={size === 'sm' ? 14 : 16}
              className={`${
                i < fullStars
                  ? "text-amber-400 fill-current"
                  : i === fullStars && hasHalfStar
                  ? "text-amber-400 fill-current opacity-50"
                  : "text-gray-300"
              } transition-colors duration-200`}
            />
          ))}
        </div>
        <span className={`font-medium text-foreground ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
          {rating?.toFixed(1) || 'N/A'}
        </span>
        <span className={`text-muted-foreground ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          ({reviews || 0})
        </span>
      </div>
    );
  };

  const QuickActions = () => (
    <div className={`absolute inset-x-4 bottom-4 flex gap-2 transition-all duration-300 ${
      showQuickActions ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <Button
        variant="secondary"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onQuickView(artisan);
        }}
        className="flex-1 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg border-0"
      >
        <Icon name="Eye" size={16} className="mr-1" />
        Quick View
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleWishlistToggle}
        className="bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg border-0"
      >
        <Icon 
          name="Heart" 
          size={16}
          className={`transition-all duration-300 ${
            isWishlisted 
              ? "text-red-500 fill-current scale-110" 
              : "text-gray-600 hover:text-red-400"
          }`}
        />
      </Button>
    </div>
  );

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(artisan);
    toast.success(`${artisan.name} added to cart!`, {
      icon: '🛒',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  if (viewMode === 'list') {
    // List view remains the same as it doesn't need height matching
    return (
        <div 
            className="group bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        {/* ... (existing list view code is unchanged) ... */}
        </div>
    );
  }

  // Enhanced Grid View with uniform height
  return (
    // CHANGE 1: Added `flex flex-col` to make the entire card a vertical flex container.
    <div 
      ref={cardRef}
      className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
      onMouseEnter={() => {
        setIsHovered(true);
        setShowQuickActions(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickActions(false);
      }}
      onClick={() => onQuickView(artisan)}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={artisan?.image}
          alt={artisan?.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* ... (image overlays and badges) ... */}
        <QuickActions />
        {!artisan?.inStock && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/95 px-6 py-3 rounded-xl shadow-xl">
              <span className="text-gray-800 font-bold">Out of Stock</span>
            </div>
          </div>
        )}
      </div>

      {/* CHANGE 2: Added `flex flex-col flex-grow` to make this section fill the remaining vertical space. */}
      <div className="p-6 flex flex-col flex-grow">
        {/* CHANGE 3: Added `flex-grow` to this wrapper. It will expand to push the price and button down. */}
        <div className="flex-grow">
          <TrustBadges />
          <h3 className="font-heading font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {artisan?.name}
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {artisan?.description}
          </p>
          <RatingDisplay rating={artisan?.rating} reviews={artisan?.reviews} />
        </div>

        {/* This div contains content that will be pushed to the bottom. */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-foreground">
                {formatPrice(artisan?.price)}
              </span>
              {artisan?.originalPrice && (
                <span className="font-body text-sm text-muted-foreground line-through">
                  {formatPrice(artisan?.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={handleAddToCart}
            disabled={!artisan?.inStock}
            className="w-full transition-all duration-300"
          >
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            {!artisan?.inStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;