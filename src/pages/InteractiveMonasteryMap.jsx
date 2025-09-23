import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, MapPin, Navigation, Clock, Car, Bus, Users, Star, Bookmark, Route, Phone, Globe } from 'lucide-react';

// Sample monastery data
const monasteryData = [
  {
    id: 1,
    name: "Rumtek Monastery",
    coordinates: [27.3167, 88.7833],
    district: "East Sikkim",
    description: "The largest monastery in Sikkim and seat of the Karmapa",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop",
    founded: 1966,
    accessibility: "Easy",
    attractions: ["Golden Stupa", "Main Prayer Hall", "Monastery Museum"],
    accommodations: ["Hotel Tibet", "Rumtek Resort"],
    dining: ["Monastery Cafeteria", "Local Tibetan Kitchen"],
    travelTime: "45 min from Gangtok"
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    coordinates: [27.3081, 88.2425],
    district: "West Sikkim",
    description: "One of the oldest and most important monasteries in Sikkim",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=200&fit=crop",
    founded: 1705,
    accessibility: "Moderate",
    attractions: ["Seven-storied Wooden Model", "Ancient Murals", "Rabdentse Ruins"],
    accommodations: ["Pelling Resort", "Mount Pandim Hotel"],
    dining: ["Traditional Bhutia Cuisine", "Organic Farm Restaurant"],
    travelTime: "2 hours from Gangtok"
  },
  {
    id: 3,
    name: "Enchey Monastery",
    coordinates: [27.3389, 88.6167],
    district: "East Sikkim",
    description: "Perched on a hilltop with panoramic views of Gangtok",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=200&fit=crop",
    founded: 1909,
    accessibility: "Easy",
    attractions: ["Annual Cham Dance", "Sacred Caves", "Meditation Halls"],
    accommodations: ["Gangtok Hotels", "Homestays"],
    dining: ["Local Restaurants", "Monastery Kitchen"],
    travelTime: "15 min from Gangtok"
  },
  {
    id: 4,
    name: "Tashiding Monastery",
    coordinates: [27.3333, 88.2667],
    district: "West Sikkim",
    description: "Sacred monastery on a hilltop between Rangit and Rathong rivers",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    founded: 1717,
    accessibility: "Difficult",
    attractions: ["Holy Water Festival", "Ancient Chortens", "Sacred Lake"],
    accommodations: ["Tashiding Guesthouse", "Riverside Camps"],
    dining: ["Mountain View Cafe", "Local Tibetan Food"],
    travelTime: "3 hours from Gangtok"
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    coordinates: [27.3197, 88.2353],
    district: "West Sikkim",
    description: "The oldest monastery in Sikkim, built in 1701",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=300&h=200&fit=crop",
    founded: 1701,
    accessibility: "Difficult",
    attractions: ["Original Buddhist Texts", "Ancient Architecture", "Meditation Caves"],
    accommodations: ["Yuksom Residency", "Eco Lodges"],
    dining: ["Organic Cafe", "Traditional Kitchen"],
    travelTime: "4 hours from Gangtok"
  },
  {
    id: 6,
    name: "Phensang Monastery",
    coordinates: [27.7333, 88.6167],
    district: "North Sikkim",
    description: "Remote monastery with stunning Himalayan views",
    image: "https://images.unsplash.com/photo-1591123720334-8d0b0665de5e?w=300&h=200&fit=crop",
    founded: 1721,
    accessibility: "Very Difficult",
    attractions: ["Himalayan Views", "Rare Manuscripts", "Prayer Wheels"],
    accommodations: ["Lachung Hotels", "Mountain Camps"],
    dining: ["High Altitude Cuisine", "Yak Meat Specialties"],
    travelTime: "6 hours from Gangtok"
  },
  {
    id: 7,
    name: "Ralang Monastery",
    coordinates: [27.2833, 88.3167],
    district: "South Sikkim",
    description: "Beautiful monastery known for its annual masked dance festival",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=300&h=200&fit=crop",
    founded: 1768,
    accessibility: "Moderate",
    attractions: ["Masked Dance Festival", "Sacred Relics", "Mountain Views"],
    accommodations: ["Ravangla Resorts", "Nature Camps"],
    dining: ["Valley View Restaurant", "Local Delicacies"],
    travelTime: "2.5 hours from Gangtok"
  },
  {
    id: 8,
    name: "Sang Monastery",
    coordinates: [27.2667, 88.4167],
    district: "South Sikkim",
    description: "Ancient monastery with rich collection of Buddhist art",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=200&fit=crop",
    founded: 1716,
    accessibility: "Easy",
    attractions: ["Buddhist Art Collection", "Ancient Thangkas", "Sculpture Gallery"],
    accommodations: ["Namchi Hotels", "Cultural Homestays"],
    dining: ["Traditional Nepali Cuisine", "Monastery Meals"],
    travelTime: "2 hours from Gangtok"
  }
];

// Transport options
const transportOptions = [
  { type: 'taxi', name: 'Private Taxi', icon: '🚗', time: 'Flexible', price: '₹2000-5000' },
  { type: 'bus', name: 'Shared Bus', icon: '🚌', time: 'Fixed Schedule', price: '₹50-200' },
  { type: 'shuttle', name: 'Tourist Shuttle', icon: '🚐', time: 'Group Tours', price: '₹500-1500' }
];

const SikkimMonasteryMap = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    district: 'all',
    accessibility: 'all',
    travelTime: 'all'
  });
  const [userLocation] = useState([27.5330, 88.5122]); // Gangtok center
  const [showRoute, setShowRoute] = useState(false);
  const [selectedMonasteries, setSelectedMonasteries] = useState([]);
  const [showItinerary, setShowItinerary] = useState(false);
  const [currentView, setCurrentView] = useState('map');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return;

    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Add CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css';
        document.head.appendChild(cssLink);
      }

      // Add JS
      if (!window.L) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js';
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      // Initialize map
      if (window.L && !leafletMapRef.current) {
        leafletMapRef.current = window.L.map(mapRef.current).setView([27.5330, 88.5122], 8);
        
        // Add tile layer
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(leafletMapRef.current);

        // Set bounds for Sikkim
        const bounds = window.L.latLngBounds(
          window.L.latLng(27.08, 88.00),
          window.L.latLng(28.20, 89.00)
        );
        leafletMapRef.current.setMaxBounds(bounds);
        leafletMapRef.current.on('drag', function() {
          leafletMapRef.current.panInsideBounds(bounds, { animate: false });
        });

        // Add user location marker
        const userIcon = window.L.divIcon({
          html: '<div style="background: #3B82F6; border: 2px solid #1E40AF; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 10px;">📍</div>',
          className: 'user-marker',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        window.L.marker(userLocation, { icon: userIcon })
          .addTo(leafletMapRef.current)
          .bindPopup('<div style="text-align: center;"><strong>Your Location</strong><br/>Gangtok, Sikkim</div>');

        setMapLoaded(true);
        updateMarkers();
      }
    };

    loadLeaflet();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Filter monasteries based on search and filters
  const filteredMonasteries = monasteryData.filter(monastery => {
    const matchesSearch = monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monastery.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDistrict = filters.district === 'all' || monastery.district === filters.district;
    const matchesAccessibility = filters.accessibility === 'all' || monastery.accessibility === filters.accessibility;
    
    return matchesSearch && matchesDistrict && matchesAccessibility;
  });

  // Update markers when filtered data changes
  const updateMarkers = () => {
    if (!leafletMapRef.current || !window.L) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      leafletMapRef.current.removeLayer(marker);
    });
    markersRef.current = [];

    // Add monastery markers
    filteredMonasteries.forEach(monastery => {
      const monasteryIcon = window.L.divIcon({
        html: '<div style="background: #D97706; border: 2px solid #92400E; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">🕉</div>',
        className: 'monastery-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = window.L.marker(monastery.coordinates, { icon: monasteryIcon })
        .addTo(leafletMapRef.current)
        .bindPopup(`
          <div style="width: 250px; padding: 8px;">
            <h3 style="font-weight: bold; font-size: 16px; color: #92400E; margin-bottom: 8px;">${monastery.name}</h3>
            <p style="font-size: 14px; color: #666; margin-bottom: 12px;">${monastery.description}</p>
            <button onclick="window.selectMonastery(${monastery.id})" style="width: 100%; background: #D97706; color: white; padding: 8px 12px; border: none; border-radius: 6px; font-size: 14px; cursor: pointer;">
              View Details
            </button>
          </div>
        `);

      marker.on('click', () => {
        setSelectedMonastery(monastery);
      });

      markersRef.current.push(marker);
    });

    // Add route line if showing route
    if (showRoute && selectedMonastery) {
      const routeLine = window.L.polyline([userLocation, selectedMonastery.coordinates], {
        color: '#D97706',
        weight: 4,
        opacity: 0.7
      }).addTo(leafletMapRef.current);
      markersRef.current.push(routeLine);

      // Add traffic simulation
      const midPoint = [
        (userLocation[0] + selectedMonastery.coordinates[0]) / 2,
        (userLocation[1] + selectedMonastery.coordinates[1]) / 2
      ];
      const trafficCircle = window.L.circle(midPoint, {
        radius: 2000,
        color: '#ef4444',
        fillColor: '#ef4444',
        fillOpacity: 0.2
      }).addTo(leafletMapRef.current);
      markersRef.current.push(trafficCircle);
    }
  };

  // Update markers when dependencies change
  useEffect(() => {
    if (mapLoaded) {
      updateMarkers();
    }
  }, [filteredMonasteries, showRoute, selectedMonastery, mapLoaded]);

  // Global function for popup buttons
  useEffect(() => {
    window.selectMonastery = (id) => {
      const monastery = monasteryData.find(m => m.id === id);
      if (monastery) {
        setSelectedMonastery(monastery);
      }
    };

    return () => {
      delete window.selectMonastery;
    };
  }, []);

  const addToItinerary = (monastery) => {
    if (!selectedMonasteries.find(m => m.id === monastery.id)) {
      setSelectedMonasteries([...selectedMonasteries, monastery]);
    }
  };

  const removeFromItinerary = (monasteryId) => {
    setSelectedMonasteries(selectedMonasteries.filter(m => m.id !== monasteryId));
  };

  const clearItinerary = () => {
    setSelectedMonasteries([]);
    setShowItinerary(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Interactive Monastery Map
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Discover all 200+ monasteries across Sikkim with geo-tagged locations, travel routes, and integrated transport services for seamless exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentView('map')}
              className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              🗺️ Explore Map
            </button>
            <button 
              onClick={() => setShowItinerary(true)}
              className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              📋 Plan Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar - Search and Filters */}
          <div className={`lg:w-80 ${isMobile ? 'order-1' : ''}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
                <Search className="mr-2" size={24} />
                Search & Filters
              </h2>
              
              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search monasteries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Filters */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">District</label>
                  <select
                    value={filters.district}
                    onChange={(e) => setFilters({...filters, district: e.target.value})}
                    className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Districts</option>
                    <option value="East Sikkim">East Sikkim</option>
                    <option value="West Sikkim">West Sikkim</option>
                    <option value="North Sikkim">North Sikkim</option>
                    <option value="South Sikkim">South Sikkim</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Accessibility</label>
                  <select
                    value={filters.accessibility}
                    onChange={(e) => setFilters({...filters, accessibility: e.target.value})}
                    className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Levels</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Difficult">Difficult</option>
                    <option value="Very Difficult">Very Difficult</option>
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Found {filteredMonasteries.length} monasteries
              </div>
            </div>

            {/* Itinerary Panel */}
            {selectedMonasteries.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                  <Bookmark className="mr-2" size={20} />
                  Your Itinerary ({selectedMonasteries.length})
                </h3>
                <div className="space-y-2 mb-4">
                  {selectedMonasteries.map(monastery => (
                    <div key={monastery.id} className="flex items-center justify-between p-2 bg-amber-50 rounded-lg">
                      <span className="text-sm font-medium">{monastery.name}</span>
                      <button
                        onClick={() => removeFromItinerary(monastery.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={clearItinerary}
                  className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>

          {/* Map Section */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                ref={mapRef}
                style={{ height: isMobile ? '400px' : '600px', width: '100%' }}
                className="relative"
              >
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading Interactive Map...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Monastery Details */}
        {selectedMonastery && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[2000]">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-amber-800">{selectedMonastery.name}</h2>
                <button
                  onClick={() => {
                    setSelectedMonastery(null);
                    setShowRoute(false);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedMonastery.image}
                      alt={selectedMonastery.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    
                    <div className="space-y-3">
                      <p className="text-gray-700">{selectedMonastery.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>District:</strong> {selectedMonastery.district}
                        </div>
                        <div>
                          <strong>Founded:</strong> {selectedMonastery.founded}
                        </div>
                        <div>
                          <strong>Accessibility:</strong> 
                          <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
                            selectedMonastery.accessibility === 'Easy' ? 'bg-green-100 text-green-800' :
                            selectedMonastery.accessibility === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                            selectedMonastery.accessibility === 'Difficult' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {selectedMonastery.accessibility}
                          </span>
                        </div>
                        <div>
                          <strong>Travel Time:</strong> {selectedMonastery.travelTime}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Attractions */}
                    <div>
                      <h3 className="font-bold text-amber-800 mb-2">🏛️ Key Attractions</h3>
                      <ul className="text-sm space-y-1">
                        {selectedMonastery.attractions.map((attraction, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                            {attraction}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accommodations */}
                    <div>
                      <h3 className="font-bold text-amber-800 mb-2">🏨 Nearby Accommodations</h3>
                      <ul className="text-sm space-y-1">
                        {selectedMonastery.accommodations.map((accommodation, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                            {accommodation}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dining */}
                    <div>
                      <h3 className="font-bold text-amber-800 mb-2">🍽️ Dining Options</h3>
                      <ul className="text-sm space-y-1">
                        {selectedMonastery.dining.map((dining, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                            {dining}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Transport Options */}
                <div className="mt-6 border-t pt-6">
                  <h3 className="font-bold text-amber-800 mb-4">🚗 Transport Options</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {transportOptions.map((transport, index) => (
                      <div key={index} className="border border-amber-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="text-2xl mb-2">{transport.icon}</div>
                        <h4 className="font-semibold text-gray-800">{transport.name}</h4>
                        <p className="text-sm text-gray-600">{transport.time}</p>
                        <p className="text-sm font-semibold text-amber-600">{transport.price}</p>
                        <button className="w-full mt-2 bg-amber-600 text-white py-2 rounded text-sm hover:bg-amber-700 transition-colors">
                          Book Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <button
                    onClick={() => setShowRoute(!showRoute)}
                    className={`px-4 py-2 rounded-lg font-semibold flex items-center ${
                      showRoute 
                        ? 'bg-green-600 text-white' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
                  >
                    <Navigation className="mr-2" size={16} />
                    {showRoute ? 'Hide Route' : 'Get Directions'}
                  </button>
                  
                  <button
                    onClick={() => addToItinerary(selectedMonastery)}
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center"
                  >
                    <Bookmark className="mr-2" size={16} />
                    Add to Itinerary
                  </button>
                  
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center">
                    <Phone className="mr-2" size={16} />
                    Contact Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Explore Sikkim's Sacred Heritage</h3>
          <p className="mb-4">Discover the spiritual heart of the Himalayas through our comprehensive monastery guide.</p>
          <div className="flex justify-center space-x-6">
            <span className="flex items-center"><Globe className="mr-1" size={16} /> 200+ Monasteries</span>
            <span className="flex items-center"><MapPin className="mr-1" size={16} /> GPS Navigation</span>
            <span className="flex items-center"><Route className="mr-1" size={16} /> Smart Routes</span>
          </div>
          <p className="mt-4 text-sm text-amber-300">© 2025 Sikkim Monastery Explorer. Preserving sacred traditions through technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default SikkimMonasteryMap;