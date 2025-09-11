import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const QuickViewModal = ({ artisan, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !artisan) return null;

  const sizeOptions = [
    { value: 'small', label: 'Small (12" x 16")' },
    { value: 'medium', label: 'Medium (18" x 24")' },
    { value: 'large', label: 'Large (24" x 36")' },
    { value: 'custom', label: 'Custom Size' }
  ];

  const quantityOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`
  }));

  const formatPrice = (price, currency = 'INR') => {
    if (currency === 'INR') {
      return `₹${price?.toLocaleString('en-IN')}`;
    }
    return `$${(price / 83)?.toFixed(2)}`;
  };

  const images = artisan?.gallery || [artisan?.image];

  const handleAddToCart = () => {
    onAddToCart({
      ...artisan,
      selectedSize,
      quantity: selectedQuantity
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-background border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden spiritual-shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading font-semibold text-xl text-foreground">
            Quick View
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)] overflow-y-auto">
          {/* Image Gallery */}
          <div className="lg:w-1/2 p-6">
            <div className="relative mb-4">
              <Image
                src={images?.[currentImageIndex]}
                alt={artisan?.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              {!artisan?.inStock && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium text-lg">Out of Stock</span>
                </div>
              )}
            </div>
            
            {images?.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index 
                        ? 'border-primary' :'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${artisan?.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-6 border-t lg:border-t-0 lg:border-l border-border">
            {/* Trust Badges */}
            <div className="flex items-center space-x-2 mb-4">
              {artisan?.verified && (
                <div className="flex items-center space-x-1 bg-success/10 text-success px-3 py-1 rounded-full">
                  <Icon name="ShieldCheck" size={14} />
                  <span className="text-sm font-medium">Authenticity Verified</span>
                </div>
              )}
              {artisan?.monasteryEndorsed && (
                <div className="flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  <Icon name="Award" size={14} />
                  <span className="text-sm font-medium">Monastery Endorsed</span>
                </div>
              )}
            </div>

            <h1 className="font-heading font-bold text-2xl text-foreground mb-2">
              {artisan?.name}
            </h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">
                  {artisan?.location}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={16} className="text-secondary fill-current" />
                <span className="font-body text-sm font-medium">{artisan?.rating}</span>
                <span className="font-body text-sm text-muted-foreground">
                  ({artisan?.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <span className="font-heading font-bold text-3xl text-foreground">
                {formatPrice(artisan?.price)}
              </span>
              <span className="font-body text-lg text-muted-foreground ml-3">
                {formatPrice(artisan?.price, 'USD')}
              </span>
            </div>

            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              {artisan?.description}
            </p>

            {/* Artisan Story */}
            {artisan?.story && (
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Artisan's Story
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {artisan?.story}
                </p>
              </div>
            )}

            {/* Size Selection */}
            <div className="mb-4">
              <Select
                label="Size"
                options={sizeOptions}
                value={selectedSize}
                onChange={setSelectedSize}
              />
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <Select
                label="Quantity"
                options={quantityOptions}
                value={selectedQuantity}
                onChange={setSelectedQuantity}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="flex-1"
                iconName="Heart"
                iconPosition="left"
              >
                Add to Wishlist
              </Button>
              <Button
                variant="default"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!artisan?.inStock}
                iconName="ShoppingCart"
                iconPosition="left"
              >
                Add to Cart
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Free shipping above ₹500</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="RotateCcw" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">30-day return policy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Authenticity guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;