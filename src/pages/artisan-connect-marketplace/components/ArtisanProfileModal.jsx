import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArtisanProfileModal = ({ artisan, isOpen, onClose }) => {
  if (!isOpen || !artisan) return null;

  const achievements = [
    { icon: 'Award', label: 'Master Craftsperson', year: '2018' },
    { icon: 'Star', label: 'Heritage Preserver', year: '2020' },
    { icon: 'Users', label: 'Community Leader', year: '2021' },
    { icon: 'Heart', label: 'Cultural Ambassador', year: '2022' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-background border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden spiritual-shadow-lg">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-primary/20 to-secondary/20">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="relative px-6 pb-6 -mt-16">
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Image
                src={artisan?.profileImage || artisan?.image}
                alt={artisan?.artisanName || artisan?.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-background spiritual-shadow"
              />
              {artisan?.verified && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-success rounded-full flex items-center justify-center border-2 border-background">
                  <Icon name="ShieldCheck" size={16} className="text-white" />
                </div>
              )}
            </div>
          </div>

          {/* Basic Info */}
          <div className="text-center mb-6">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-1">
              {artisan?.artisanName || artisan?.name}
            </h2>
            <p className="font-body text-muted-foreground mb-2">
              Master of {artisan?.specialty || 'Traditional Crafts'}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">{artisan?.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">
                  {artisan?.experience || '15'} years experience
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="font-heading font-bold text-xl text-foreground">
                {artisan?.totalProducts || '24'}
              </div>
              <div className="font-body text-xs text-muted-foreground">Products</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="font-heading font-bold text-xl text-foreground">
                {artisan?.rating || '4.8'}
              </div>
              <div className="font-body text-xs text-muted-foreground">Rating</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="font-heading font-bold text-xl text-foreground">
                {artisan?.orders || '156'}
              </div>
              <div className="font-body text-xs text-muted-foreground">Orders</div>
            </div>
          </div>

          {/* Story */}
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Artisan's Journey
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              {artisan?.fullStory || `Born into a family of traditional craftspeople in ${artisan?.location}, ${artisan?.artisanName || artisan?.name} has dedicated their life to preserving ancient techniques passed down through generations. Their work represents not just artistic excellence, but a living connection to our cultural heritage.\n\nEach piece is created with meditation and devotion, following traditional methods that have remained unchanged for centuries. Through their craft, they support their local monastery and community, ensuring these precious traditions continue for future generations.`}
            </p>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Recognition & Achievements
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements?.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name={achievement?.icon} size={16} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-sm text-foreground">
                      {achievement?.label}
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      {achievement?.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monastery Connection */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Building" size={16} className="text-primary" />
              <h4 className="font-heading font-semibold text-foreground">
                Monastery Partnership
              </h4>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Proudly supports {artisan?.monastery || 'Hemis Monastery'} through craft sales, 
              contributing to heritage preservation and community welfare programs.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="flex-1"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Contact Artisan
            </Button>
            <Button
              variant="default"
              className="flex-1"
              iconName="Eye"
              iconPosition="left"
            >
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfileModal;