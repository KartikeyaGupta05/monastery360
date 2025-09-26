import React, { useState } from 'react';
import { 
  Play, MapPin, Clock, Users, Star, Eye, ArrowRight, 
  Navigation, Compass, Camera, VolumeX, Volume2, 
  Maximize, RotateCw, Info, Share2, Bookmark, Download,
  Map, Route, Calendar, Award, Globe, Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from "../../components/ui/Header";

// Virtual 360° Tour Selection Page with Brown Monastery Theme
const VirtualTourExperience = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [tourPreview, setTourPreview] = useState(null);
  const [filterLocation, setFilterLocation] = useState('all');

  // Monastery data with 360° tour information
  const monasteries = [
    {
      id: 1,
      name: 'Rumtek Monastery',
      location: 'East Sikkim',
      district: 'East Sikkim',
      distance: '24 km from Gangtok',
      elevation: '1,550 meters',
      description: 'The largest monastery in Sikkim and the main seat of the Karma Kagyu lineage. Experience the grandeur of the Golden Stupa and sacred assembly halls.',
      image: '/assets/images/monasteries/rumtek.jpeg',
      tourImage: '/assets/images/monasteries/rumtek.jpeg',
      rating: 4.9,
      visitors: 2847,
      duration: '45 minutes',
      highlights: [
        'Golden Stupa Hall',
        'Main Assembly Hall', 
        'Monastery Museum',
        'Prayer Wheels Courtyard',
        'Monks Living Quarters',
        'Sacred Mandala Room'
      ],
      features: [
        '360° High Definition',
        'Spatial Audio',
        'Interactive Hotspots',
        'Historical Narration',
        'VR Compatible',
        'Offline Available'
      ],
      founded: '1966 CE',
      significance: 'Seat of the 16th Karmapa',
      architecture: 'Traditional Tibetan with modern elements',
      bestTime: 'October to May',
      vrReady: true,
      audioGuide: true,
      languages: ['English', 'Hindi', 'Nepali', 'Tibetan'],
      coordinates: { lat: 27.3389, lng: 88.5277 }
    },
    {
      id: 2,
      name: 'Pemayangtse Monastery',
      location: 'West Sikkim',
      district: 'West Sikkim',
      distance: '110 km from Gangtok',
      elevation: '2,085 meters',
      description: 'One of the oldest and most prestigious monasteries in Sikkim, offering breathtaking views of the Himalayas and intricate wooden sculptures.',
      image: '/assets/images/monasteries/pemayangtse.jpeg',
      tourImage: '/assets/images/monasteries/pemayangtse.jpeg',
      rating: 4.8,
      visitors: 1923,
      duration: '38 minutes',
      highlights: [
        'Ancient Prayer Hall',
        'Wooden Sculptures Gallery',
        'Mountain View Terrace',
        'Monastery Garden',
        'Traditional Library',
        'Sacred Relics Chamber'
      ],
      features: [
        '360° Ultra HD',
        'Mountain Panorama',
        'Cultural Hotspots',
        'Monk Commentary',
        'VR Experience',
        'Multi-language'
      ],
      founded: '1705 CE',
      significance: 'Second oldest monastery in Sikkim',
      architecture: 'Three-storied traditional Tibetan',
      bestTime: 'March to June, September to November',
      vrReady: true,
      audioGuide: true,
      languages: ['English', 'Hindi', 'Tibetan'],
      coordinates: { lat: 27.2167, lng: 88.2167 }
    },
    {
      id: 3,
      name: 'Tashiding Monastery',
      location: 'West Sikkim',
      district: 'West Sikkim',
      distance: '125 km from Gangtok',
      elevation: '1,465 meters',
      description: 'Sacred hilltop monastery with panoramic Himalayan views. Famous for its holy chorten and spiritual significance in the Buddhist calendar.',
      image: '/assets/images/monasteries/tashiding.jpg',
      tourImage: '/assets/images/monasteries/tashiding.jpg',
      rating: 4.7,
      visitors: 1456,
      duration: '32 minutes',
      highlights: [
        'Sacred Chorten',
        'Himalayan Panorama',
        'Ancient Murals',
        'Meditation Halls',
        'Holy Spring',
        'Prayer Flag Valley'
      ],
      features: [
        '360° Scenic Views',
        'Nature Audio',
        'Sacred Hotspots',
        'Historical Guide',
        'Mobile Optimized',
        'Downloadable'
      ],
      founded: '1641 CE',
      significance: 'Holiest monastery in Sikkim',
      architecture: 'Hilltop traditional design',
      bestTime: 'October to May',
      vrReady: false,
      audioGuide: true,
      languages: ['English', 'Hindi'],
      coordinates: { lat: 27.3167, lng: 88.2667 }
    },
    {
      id: 4,
      name: 'Enchey Monastery',
      location: 'East Sikkim',
      district: 'East Sikkim', 
      distance: '3 km from Gangtok',
      elevation: '1,840 meters',
      description: 'Ancient monastery perched on a hilltop overlooking Gangtok. Known for its annual Cham dance and beautiful mountain backdrop.',
      image: '/assets/images/monasteries/enchey.jpeg',
      tourImage: '/assets/images/monasteries/enchey.jpeg',
      rating: 4.6,
      visitors: 1789,
      duration: '28 minutes',
      highlights: [
        'Main Prayer Hall',
        'Gangtok City Views',
        'Traditional Murals',
        'Monastery Courtyard',
        'Buddhist Statues',
        'Festival Grounds'
      ],
      features: [
        '360° City Views',
        'Urban Monastery',
        'Festival Spaces',
        'Easy Access',
        'Student Tours',
        'Cultural Programs'
      ],
      founded: '1840 CE',
      significance: 'Guardian deity Mahakala',
      architecture: 'Hilltop traditional Tibetan',
      bestTime: 'Year round',
      vrReady: true,
      audioGuide: true,
      languages: ['English', 'Hindi', 'Nepali'],
      coordinates: { lat: 27.3314, lng: 88.6138 }
    },
    {
      id: 5,
      name: 'Dubdi Monastery',
      location: 'West Sikkim',
      district: 'West Sikkim',
      distance: '125 km from Gangtok',
      elevation: '2,100 meters',
      description: 'The oldest monastery in Sikkim, built in 1701. A peaceful retreat surrounded by dense forests with ancient meditation caves.',
      image: '/assets/images/monasteries/dubdi.jpeg',
      tourImage: '/assets/images/monasteries/dubdi.jpeg',
      rating: 4.5,
      visitors: 967,
      duration: '25 minutes',
      highlights: [
        'Ancient Meditation Caves',
        'Forest Surroundings',
        'Original Prayer Hall',
        'Mountain Streams',
        'Wildlife Viewing',
        'Hermitage Cells'
      ],
      features: [
        '360° Nature Views',
        'Forest Sounds',
        'Wildlife Audio',
        'Meditation Guide',
        'Eco-tour',
        'Peaceful Setting'
      ],
      founded: '1701 CE',
      significance: 'Oldest monastery in Sikkim',
      architecture: 'Simple traditional design',
      bestTime: 'March to November',
      vrReady: false,
      audioGuide: true,
      languages: ['English', 'Tibetan'],
      coordinates: { lat: 27.2833, lng: 88.2500 }
    },
    {
      id: 6,
      name: 'Phensang Monastery',
      location: 'North Sikkim',
      district: 'North Sikkim',
      distance: '38 km from Gangtok',
      elevation: '1,750 meters',
      description: 'Remote monastery offering spectacular views of snow-capped peaks. Known for its meditation retreats and traditional festivals.',
      image: '/assests/images/monasteries/phensang.jpeg',
      tourImage: '/assets/images/monasteries/phensang.jpeg',
      rating: 4.4,
      visitors: 634,
      duration: '22 minutes',
      highlights: [
        'Snow Peak Views',
        'Meditation Retreat',
        'Traditional Festivals',
        'Remote Location',
        'Alpine Setting',
        'Prayer Ceremonies'
      ],
      features: [
        '360° Mountain Views',
        'Alpine Audio',
        'Remote Experience',
        'Seasonal Tours',
        'Limited Access',
        'Exclusive Content'
      ],
      founded: '1721 CE',
      significance: 'Remote mountain monastery',
      architecture: 'Alpine traditional style',
      bestTime: 'April to October',
      vrReady: true,
      audioGuide: false,
      languages: ['English'],
      coordinates: { lat: 27.4667, lng: 88.5833 }
    }
  ];

  const districts = [
    { id: 'all', name: 'All Districts' },
    { id: 'East Sikkim', name: 'East Sikkim' },
    { id: 'West Sikkim', name: 'West Sikkim' },
    { id: 'North Sikkim', name: 'North Sikkim' },
    { id: 'South Sikkim', name: 'South Sikkim' }
  ];

  const filteredMonasteries = monasteries.filter(monastery => 
    filterLocation === 'all' || monastery.district === filterLocation
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center text-white py-20"
  style={{ backgroundImage: "url('https://www.sikkimdarshan.com/assets/Images/website-images/landing-hero-bg.webp')" }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8">
              <Camera className="w-6 h-6 mr-3" />
              <span className="font-semibold text-lg">360° Virtual Experience</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Step Inside Sacred Monasteries
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Explore ancient monasteries from anywhere in the world. Discover hidden murals, 
              sacred halls, and immerse yourself in centuries of spiritual heritage through 
              immersive 360° virtual tours.
            </p>

            {/* Tour Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">{monasteries.length}</div>
                <div className="text-orange-200">Virtual Tours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">360°</div>
                <div className="text-orange-200">HD Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">VR</div>
                <div className="text-orange-200">Compatible</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">FREE</div>
                <div className="text-orange-200">Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Choose Your Virtual Journey</h2>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <select
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className="border-2 border-amber-200 rounded-lg px-4 py-2 focus:border-amber-500 focus:outline-none"
                  >
                    {districts.map(district => (
                      <option key={district.id} value={district.id}>{district.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{filteredMonasteries.reduce((sum, m) => sum + m.visitors, 0)} total visitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Avg. {Math.round(filteredMonasteries.reduce((sum, m) => sum + parseInt(m.duration), 0) / filteredMonasteries.length)} min tours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monasteries Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredMonasteries.map(monastery => (
                <div key={monastery.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 hover:shadow-2xl transition-all duration-500 group">
                  {/* Monastery Image with Tour Preview */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={monastery.tourImage} 
                      alt={monastery.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay with Play Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {monastery.duration}
                        </span>
                        {monastery.vrReady && (
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            VR Ready
                          </span>
                        )}
                      </div>
                      
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span className="text-sm font-bold">{monastery.rating}</span>
                        </div>
                      </div>

                      {/* Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Link 
                          to="/vr-360"
                          className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
                        >
                          <Play className="w-12 h-12 text-white ml-1" />
                        </Link>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{monastery.name}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-orange-200">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{monastery.location} • {monastery.distance}</span>
                          </div>
                          <div className="flex items-center text-orange-200">
                            <Users className="w-4 h-4 mr-1" />
                            <span className="text-sm">{monastery.visitors} visitors</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monastery Details */}
                  <div className="p-8">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {monastery.description}
                    </p>

                    {/* Key Details */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Founded</h4>
                        <p className="text-gray-900 font-semibold">{monastery.founded}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Elevation</h4>
                        <p className="text-gray-900 font-semibold">{monastery.elevation}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Significance</h4>
                        <p className="text-gray-900 font-semibold">{monastery.significance}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Best Time</h4>
                        <p className="text-gray-900 font-semibold">{monastery.bestTime}</p>
                      </div>
                    </div>

                    {/* Tour Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Tour Highlights</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {monastery.highlights.slice(0, 4).map(highlight => (
                          <div key={highlight} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      {monastery.highlights.length > 4 && (
                        <p className="text-sm text-amber-600 mt-2">+{monastery.highlights.length - 4} more highlights</p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Tour Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {monastery.features.map(feature => (
                          <span key={feature} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium border border-amber-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Link 
                        to="/vr-360"
                        className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center text-lg"
                      >
                        <Play className="w-5 h-5 mr-3" />
                        Start Virtual Tour
                      </Link>
                      
                      <Link 
                        to="/InteractiveMonasteryMap"
                        className="px-6 py-4 border-2 border-amber-300 text-amber-700 rounded-xl font-bold hover:bg-amber-50 transition-colors flex items-center justify-center"
                      >
                        <Navigation className="w-5 h-5 mr-2" />
                        View on Map
                      </Link>
                    </div>

                    {/* Additional Options */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-4">
                        {monastery.audioGuide && (
                          <Link to="/smart-audio-guide" className="flex items-center text-sm text-amber-600 hover:text-amber-700">
                            <Headphones className="w-4 h-4 mr-1" />
                            Audio Guide
                          </Link>
                        )}
                        <button className="flex items-center text-sm text-gray-600 hover:text-gray-700">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </button>
                        <button className="flex items-center text-sm text-gray-600 hover:text-gray-700">
                          <Bookmark className="w-4 h-4 mr-1" />
                          Save
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Available in {monastery.languages.length} languages
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Features */}
        <section className="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cutting-Edge Virtual Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 360° virtual tours use the latest technology to bring you closer to Sikkim's sacred heritage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ultra HD 360° Capture</h3>
                <p className="text-gray-600 leading-relaxed">Professional-grade cameras capture every detail in stunning 4K resolution, allowing you to zoom in on intricate murals and sacred artifacts.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <Volume2 className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Spatial Audio Experience</h3>
                <p className="text-gray-600 leading-relaxed">Immersive 3D audio brings monastery sounds to life - from chanting monks to prayer bells, creating an authentic spiritual atmosphere.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  <Info className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Hotspots</h3>
                <p className="text-gray-600 leading-relaxed">Click on artifacts, murals, and architectural features to unlock detailed information, historical context, and cultural significance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Begin Your Virtual Pilgrimage
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Experience the spiritual heritage of Sikkim's monasteries from anywhere in the world. 
              No travel required, just pure immersion in sacred spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/vr-360"
                className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Play className="w-6 h-6 mr-3" />
                Start Free Virtual Tour
              </Link>
              <Link 
                to="/InteractiveMonasteryMap"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Map className="w-6 h-6 mr-3" />
                Explore Interactive Map
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VirtualTourExperience;