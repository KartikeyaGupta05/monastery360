import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Download, Bluetooth, MapPin, Volume2, Headphones, 
  Wifi, WifiOff, Play, Pause, SkipForward, SkipBack, Settings,
  Star, Clock, Users, CheckCircle, AlertCircle, Battery,
  Navigation, Compass, Signal, QrCode, Share2
} from 'lucide-react';
import Header from "../../components/ui/Header";

// Smart Audio Guide Main Page Component
const SmartAudioGuidePage = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [downloadStatus, setDownloadStatus] = useState({});
  const [bluetoothStatus, setBluetooth] = useState('disconnected');
  const [locationStatus, setLocationStatus] = useState('enabled');

  // Dummy data for monasteries with audio guides
  const monasteries = [
    {
      id: 1,
      name: 'Rumtek Monastery',
      location: 'East Sikkim',
      distance: '24 km from Gangtok',
      description: 'The largest monastery in Sikkim and seat of the Karmapa',
      image: '/assets/images/monasteries/rumtek.jpeg',
      rating: 4.9,
      reviews: 342,
      audioTracks: 12,
      duration: '45 min',
      downloadSize: '85 MB',
      languages: ['English', 'Hindi', 'Nepali', 'Tibetan'],
      features: ['Bluetooth Beacons', 'GPS Navigation', 'Offline Mode', '360° Audio'],
      highlights: [
        'Golden Stupa Hall',
        'Monastery Museum',
        'Prayer Wheels Courtyard',
        'Main Assembly Hall',
        'Monks Quarters'
      ],
      tracks: [
        { id: 1, title: 'Welcome to Rumtek', duration: '3:45', type: 'introduction' },
        { id: 2, title: 'History and Foundation', duration: '5:20', type: 'history' },
        { id: 3, title: 'The Golden Stupa', duration: '4:15', type: 'location' },
        { id: 4, title: 'Daily Monastery Life', duration: '6:30', type: 'culture' },
        { id: 5, title: 'Sacred Artifacts', duration: '7:45', type: 'artifacts' }
      ],
      beacons: 15,
      offlineAvailable: true
    },
    {
      id: 2,
      name: 'Pemayangtse Monastery',
      location: 'West Sikkim',
      distance: '110 km from Gangtok',
      description: 'One of the oldest and most prestigious monasteries in Sikkim',
      image: '/assets/images/monasteries/pemayangtse.jpeg',
      rating: 4.8,
      reviews: 289,
      audioTracks: 10,
      duration: '38 min',
      downloadSize: '72 MB',
      languages: ['English', 'Hindi', 'Tibetan'],
      features: ['Bluetooth Beacons', 'GPS Navigation', 'Offline Mode'],
      highlights: [
        'Ancient Prayer Hall',
        'Wooden Sculptures',
        'Mountain Views',
        'Monastery Garden',
        'Traditional Architecture'
      ],
      tracks: [
        { id: 1, title: 'Monastery Introduction', duration: '3:20', type: 'introduction' },
        { id: 2, title: 'Architecture Marvel', duration: '4:45', type: 'architecture' },
        { id: 3, title: 'Sacred Sculptures', duration: '5:10', type: 'artifacts' },
        { id: 4, title: 'Himalayan Views', duration: '3:30', type: 'nature' }
      ],
      beacons: 12,
      offlineAvailable: true
    },
    {
      id: 3,
      name: 'Tashiding Monastery',
      location: 'West Sikkim',
      distance: '125 km from Gangtok',
      description: 'Sacred hilltop monastery with panoramic Himalayan views',
      image: '/assets/images/monasteries/tashiding.jpg',
      rating: 4.7,
      reviews: 194,
      audioTracks: 8,
      duration: '30 min',
      downloadSize: '58 MB',
      languages: ['English', 'Hindi'],
      features: ['GPS Navigation', 'Offline Mode'],
      highlights: [
        'Sacred Chorten',
        'Himalayan Panorama',
        'Ancient Murals',
        'Meditation Halls',
        'Holy Spring'
      ],
      tracks: [
        { id: 1, title: 'Sacred Journey Begins', duration: '3:15', type: 'introduction' },
        { id: 2, title: 'The Holy Chorten', duration: '4:20', type: 'sacred' },
        { id: 3, title: 'Mountain Spirituality', duration: '5:45', type: 'spiritual' }
      ],
      beacons: 8,
      offlineAvailable: true
    }
  ];

  const appFeatures = [
    {
      icon: Bluetooth,
      title: 'Bluetooth Beacons',
      description: 'Automatically triggered audio content based on your precise location',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Navigation,
      title: 'GPS Navigation',
      description: 'Turn-by-turn directions to monasteries and between locations',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: WifiOff,
      title: 'Offline Mode',
      description: 'Download content for use in remote areas without internet',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Volume2,
      title: 'Spatial Audio',
      description: '3D audio experience that changes based on your orientation',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const downloadMonastery = (monasteryId) => {
    setDownloadStatus({...downloadStatus, [monasteryId]: 'downloading'});
    // Simulate download
    setTimeout(() => {
      setDownloadStatus({...downloadStatus, [monasteryId]: 'completed'});
    }, 3000);
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section 
  className="relative bg-cover bg-center text-white py-20"
  style={{ backgroundImage: "url('https://www.sikkimdarshan.com/assets/Images/website-images/landing-hero-bg.webp')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
          <Smartphone className="w-5 h-5 mr-2" />
          <span className="font-semibold">Smart Audio Guide App</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Spiritual Journey Companion
        </h1>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Experience location-based audio guidance using Bluetooth beacons and GPS technology. 
          Works offline in remote monastery locations for uninterrupted spiritual exploration.
        </p>
        
        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            <Download className="w-5 h-5 mr-3" />
            Download for iOS
          </button>
          <button className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            <Download className="w-5 h-5 mr-3" />
            Download for Android
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-blue-200 text-sm">Audio Guides</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-blue-200 text-sm">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-blue-200 text-sm">Offline Ready</div>
          </div>
        </div>
      </div>

      {/* App Preview */}
      <div className="relative">
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm mx-auto">
          <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Signal className="w-4 h-4 text-green-400" />
                <Bluetooth className="w-4 h-4 text-blue-400" />
                <Wifi className="w-4 h-4 text-green-400" />
              </div>
              <Battery className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">Rumtek Monastery</h3>
            <p className="text-gray-300 text-sm mb-4">Now playing: History and Foundation</p>
            <div className="bg-gray-800 rounded-lg p-3 mb-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '35%'}}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1:45</span>
                <span>5:20</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <SkipBack className="w-8 h-8 text-gray-400" />
              <div className="bg-green-500 rounded-full p-3">
                <Play className="w-6 h-6" />
              </div>
              <SkipForward className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Audio Guide Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology meets ancient wisdom for an immersive spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Monasteries */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Audio Guides
            </h2>
            <p className="text-lg text-gray-600">
              Discover detailed audio guides for Sikkim's most sacred monasteries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {monasteries.map(monastery => (
              <div key={monastery.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={monastery.image} 
                    alt={monastery.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {monastery.audioTracks} Tracks
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{monastery.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{monastery.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{monastery.location} • {monastery.distance}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{monastery.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {monastery.features.slice(0, 2).map(feature => (
                      <span key={feature} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                    {monastery.features.length > 2 && (
                      <span className="text-gray-400 text-xs">+{monastery.features.length - 2}</span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">{monastery.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{monastery.downloadSize}</div>
                      <div className="text-xs text-gray-500">Size</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">{monastery.languages.length}</div>
                      <div className="text-xs text-gray-500">Languages</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => downloadMonastery(monastery.id)}
                      disabled={downloadStatus[monastery.id] === 'downloading'}
                      className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {downloadStatus[monastery.id] === 'completed' ? (
                        <>
                          <CheckCircle className="w-4 h-4 inline mr-2" />
                          Downloaded
                        </>
                      ) : downloadStatus[monastery.id] === 'downloading' ? (
                        <>
                          <div className="w-4 h-4 inline mr-2 animate-spin border-2 border-white border-t-transparent rounded-full"></div>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 inline mr-2" />
                          Download
                        </>
                      )}
                    </button>
                    <button 
                      onClick={() => setSelectedMonastery(monastery)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Advanced location technology for seamless spiritual exploration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 1: Download & Setup</h3>
              <p className="text-gray-600">Download the app, select your monastery, and prepare for offline use. QR codes at entrances provide instant setup.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 2: Navigate & Explore</h3>
              <p className="text-gray-600">GPS guides you to the monastery and between locations. Bluetooth beacons automatically trigger relevant audio content.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Step 3: Immersive Experience</h3>
              <p className="text-gray-600">Enjoy spatial audio that adapts to your location and orientation, creating an immersive spiritual journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monastery Preview Modal */}
      {selectedMonastery && (
        <MonasteryPreviewModal 
          monastery={selectedMonastery} 
          onClose={() => setSelectedMonastery(null)}
        />
      )}

      {/* Call to Action */}
      <section className="py-16 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Download the Monastery360 Audio Guide and explore Sikkim's sacred heritage 
            with expert narration and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              <Download className="w-5 h-5 mr-3" />
              Download for iOS
            </button>
            <button className="flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Download className="w-5 h-5 mr-3" />
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

// Monastery Preview Modal
const MonasteryPreviewModal = ({ monastery, onClose }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{monastery.name} Audio Guide</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="sr-only">Close</span>
            X
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monastery Info */}
            <div>
              <img 
                src={monastery.image} 
                alt={monastery.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-gray-600">{monastery.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Highlights</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {monastery.highlights.map(highlight => (
                      <div key={highlight} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-1">Total Duration</h4>
                    <p className="text-gray-900 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {monastery.duration}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-1">Reviews</h4>
                    <p className="text-gray-900 flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {monastery.rating} ({monastery.reviews})
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-2">Available Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {monastery.languages.map(lang => (
                      <span key={lang} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Audio Tracks Preview</h3>
              
              {/* Current Track Player */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{monastery.tracks[currentTrack]?.title}</h4>
                    <p className="text-gray-600 text-sm">Track {currentTrack + 1} of {monastery.tracks.length}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{monastery.tracks[currentTrack]?.duration}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center space-x-6">
                  <button 
                    onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
                    className="p-2 hover:bg-white/50 rounded-full transition-colors"
                  >
                    <SkipBack className="w-6 h-6 text-gray-600" />
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button 
                    onClick={() => setCurrentTrack(Math.min(monastery.tracks.length - 1, currentTrack + 1))}
                    className="p-2 hover:bg-white/50 rounded-full transition-colors"
                  >
                    <SkipForward className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Track List */}
              <div className="space-y-3">
                {monastery.tracks.map((track, index) => (
                  <div 
                    key={track.id}
                    onClick={() => setCurrentTrack(index)}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      index === currentTrack 
                        ? 'bg-green-100 border-2 border-green-300' 
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium">{track.title}</h5>
                        <p className="text-sm text-gray-600 capitalize">{track.type}</p>
                      </div>
                      <div className="text-sm text-gray-500">{track.duration}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                <Download className="w-5 h-5 inline mr-2" />
                Download Complete Guide ({monastery.downloadSize})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAudioGuidePage;