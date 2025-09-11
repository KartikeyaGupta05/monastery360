import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SortControls = ({ sortBy, onSortChange, viewMode, onViewModeChange, resultCount }) => {
  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'cultural-significance', label: 'Cultural Significance' },
    { value: 'artisan-rating', label: 'Artisan Rating' },
    { value: 'newest', label: 'Newest First' },
    { value: 'verified', label: 'Verified First' }
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      {/* Results Count */}
      <div className="flex items-center space-x-4">
        <p className="font-body text-sm text-muted-foreground">
          Showing {resultCount} authentic products
        </p>
      </div>

      {/* Sort and View Controls */}
      <div className="flex items-center space-x-4">
        {/* Sort Dropdown */}
        <div className="min-w-48">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={onSortChange}
            placeholder="Sort by..."
            className="w-full"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="hidden sm:flex items-center border border-border rounded-lg p-1">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('grid')}
            className="px-3"
          >
            <Icon name="Grid3X3" size={16} />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('list')}
            className="px-3"
          >
            <Icon name="List" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SortControls;