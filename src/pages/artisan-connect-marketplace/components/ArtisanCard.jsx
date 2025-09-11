import React, { useState, useRef, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArtisanCard = ({ artisan, onQuickView, onAddToCart, viewMode = 'grid' }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const cardRef = useRef(null);

  // Enhanced wishlist toggle with animation feedback
  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    // Add haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  // Dynamic price formatting with better currency handling
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

  // Calculate discount percentage if applicable
  const getDiscountPercentage = () => {
    if (artisan?.originalPrice && artisan?.price < artisan?.originalPrice) {
      return Math.round(((artisan.originalPrice - artisan.price) / artisan.originalPrice) * 100);
    }
    return null;
  };

  // Enhanced trust badges with more visual appeal
  const TrustBadges = () => (
    <div className="flex items-center gap-2 mb-3 flex-wrap">
      {artisan?.verified && (
        <div className="flex items-center gap-1 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 hover:shadow-md">
          <Icon name="ShieldCheck" size={14} className="text-green-600" />
          <span className="text-xs font-semibold">Verified Artisan</span>
        </div>
      )}
      {artisan?.monasteryEndorsed && (
        <div className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 hover:shadow-md">
          <Icon name="Award" size={14} className="text-amber-600" />
          <span className="text-xs font-semibold">Monastery Endorsed</span>
        </div>
      )}
      {artisan?.featured && (
        <div className="flex items-center gap-1 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 text-purple-700 px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 hover:shadow-md">
          <Icon name="Star" size={14} className="text-purple-600" />
          <span className="text-xs font-semibold">Featured</span>
        </div>
      )}
      {artisan?.newArrival && (
        <div className="flex items-center gap-1 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 hover:shadow-md">
          <Icon name="Sparkles" size={14} className="text-blue-600" />
          <span className="text-xs font-semibold">New</span>
        </div>
      )}
    </div>
  );

  // Enhanced rating component
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

  // Quick action buttons for grid view
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

  if (viewMode === 'list') {
    return (
      <div 
        className="group bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced Product Image */}
        <div className="relative w-full sm:w-56 h-56 sm:h-40 flex-shrink-0 overflow-hidden rounded-xl">
          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`} />
          
          <Image
            src={artisan?.image}
            alt={artisan?.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
          )}

          {/* Discount Badge */}
          {getDiscountPercentage() && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg">
              {getDiscountPercentage()}% OFF
            </div>
          )}

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <Icon 
              name="Heart" 
              size={16}
              className={`transition-all duration-300 ${
                isWishlisted 
                  ? "text-red-500 fill-current" 
                  : "text-gray-600"
              }`}
            />
          </Button>

          {/* Stock Status */}
          {!artisan?.inStock && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="bg-white/90 px-4 py-2 rounded-lg">
                <span className="text-gray-800 font-semibold text-sm">Out of Stock</span>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <TrustBadges />
            
            <h3 className="font-heading font-bold text-xl text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {artisan?.name}
            </h3>
            
            <div className="flex items-center gap-2 mb-3">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span className="font-body text-sm text-muted-foreground font-medium">
                {artisan?.location}
              </span>
            </div>

            <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
              {artisan?.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <RatingDisplay rating={artisan?.rating} reviews={artisan?.reviews} />
              <div className="flex items-center gap-1">
                <Icon name="Package" size={14} className="text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">
                  {artisan?.totalProducts} products
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="font-heading font-bold text-2xl text-foreground">
                  {formatPrice(artisan?.price)}
                </span>
                {artisan?.originalPrice && artisan?.originalPrice > artisan?.price && (
                  <span className="font-body text-sm text-muted-foreground line-through">
                    {formatPrice(artisan?.originalPrice)}
                  </span>
                )}
              </div>
              <span className="font-body text-xs text-muted-foreground">
                {formatPrice(artisan?.price, 'USD')}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onQuickView(artisan)}
                className="transition-all duration-300 hover:scale-105"
              >
                <Icon name="Eye" size={16} className="mr-1" />
                Quick View
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => onAddToCart(artisan)}
                disabled={!artisan?.inStock}
                className="transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
              >
                <Icon name="ShoppingCart" size={16} className="mr-1" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Enhanced Grid View
  return (
    <div 
      ref={cardRef}
      className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 cursor-pointer"
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
      {/* Enhanced Product Image */}
      <div className="relative h-72 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        <Image
          src={artisan?.image}
          alt={artisan?.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}

        {/* Discount Badge */}
        {getDiscountPercentage() && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
            {getDiscountPercentage()}% OFF
          </div>
        )}

        {/* Quick Actions Overlay */}
        <QuickActions />

        {/* Stock Status */}
        {!artisan?.inStock && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/95 px-6 py-3 rounded-xl shadow-xl">
              <span className="text-gray-800 font-bold">Out of Stock</span>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Product Details */}
      <div className="p-6">
        <TrustBadges />
        
        <h3 className="font-heading font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {artisan?.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <Icon name="MapPin" size={16} className="text-primary" />
          <span className="font-body text-sm text-muted-foreground font-medium">
            {artisan?.location}
          </span>
        </div>

        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {artisan?.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <RatingDisplay rating={artisan?.rating} reviews={artisan?.reviews} />
          <span className="font-body text-xs text-muted-foreground bg-gray-50 px-2 py-1 rounded-full">
            {artisan?.totalProducts} products
          </span>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl text-foreground">
                {formatPrice(artisan?.price)}
              </span>
              {artisan?.originalPrice && artisan?.originalPrice > artisan?.price && (
                <span className="font-body text-sm text-muted-foreground line-through">
                  {formatPrice(artisan?.originalPrice)}
                </span>
              )}
            </div>
            <div className="font-body text-xs text-muted-foreground mt-1">
              {formatPrice(artisan?.price, 'USD')}
            </div>
          </div>
        </div>

        <Button
          variant="default"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(artisan);
          }}
          disabled={!artisan?.inStock}
          className="w-full transition-all duration-300 hover:scale-105 disabled:hover:scale-100 py-3 font-semibold"
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          {!artisan?.inStock ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default ArtisanCard;