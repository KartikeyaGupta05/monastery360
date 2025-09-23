import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share2, Star, ChevronDown, ChevronUp, Download } from 'lucide-react';
import Header from 'components/ui/Header';

// Dummy data
const narrations = [
  {
    id: '1',
    title: 'Hall of Wisdom: Art & Philosophy',
    narrator: 'Ven. Tenzin Norbu',
    role: 'Senior Resident Monk',
    description: 'Discover the profound meanings behind ancient murals and sculptures that have watched over countless prayers for centuries.',
    duration: '12 min',
    language: 'english',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    transcript: 'Welcome to the Hall of Wisdom, where art becomes prayer and philosophy takes form. These walls have witnessed centuries of devotion, each brushstroke carrying the weight of spiritual understanding. The central mandala before us represents the universe in perfect harmony...',
    rating: 4.8,
    isOfflineReady: true,
    imageUrl: '/assets/images/monasteries/rumtek.jpeg'
  },
  {
    id: '2',
    title: 'Sacred Ceremonies: Living Traditions',
    narrator: 'Ven. Karma Choephel',
    role: 'Ritual Master',
    description: 'Experience the spiritual depth of daily ceremonies and understand the ancient practices that connect us to the divine.',
    duration: '15 min',
    language: 'english',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    transcript: 'The morning ceremony begins before dawn, as it has for eight hundred years. The sound of bells awakens not just the monastery, but the spiritual consciousness within each practitioner...',
    rating: 4.9,
    isOfflineReady: true,
    imageUrl: '/assets/images/monasteries/pemayangtse.jpeg'
  },
  {
    id: '3',
    title: 'Architecture of Enlightenment',
    narrator: 'Dr. Pema Wangchuk',
    role: 'Cultural Historian',
    description: 'Explore how every architectural element was designed to guide the mind toward spiritual awakening and inner peace.',
    duration: '18 min',
    language: 'english',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    transcript: 'Each pillar, each beam, each carefully placed stone serves a purpose beyond mere construction. The architecture itself becomes a teacher, guiding visitors through a physical and spiritual journey...',
    rating: 4.7,
    isOfflineReady: false,
    imageUrl: '/assets/images/monasteries/thangka.jpeg'
  },
  {
    id: '4',
    title: 'प्राचीन मंत्र और उनका अर्थ',
    narrator: 'आचार्य राज कुमार शर्मा',
    role: 'संस्कृत विद्वान',
    description: 'समझिए प्राचीन मंत्रों का गहरा अर्थ और जानिए कैसे ये आध्यात्मिक शक्ति प्रदान करते हैं।',
    duration: '20 min',
    language: 'hindi',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    transcript: 'ॐ मणिपद्मे हूं - यह मंत्र केवल शब्दों का समूह नहीं है, बल्कि एक संपूर्ण आध्यात्मिक यात्रा है। प्रत्येक अक्षर में छुपा है गहरा दर्शन...',
    rating: 4.6,
    isOfflineReady: true,
    imageUrl: '/assets/images/monasteries/tashiding.jpg'
  },
  {
    id: '5',
    title: 'हिमालयी परम्परा र आध्यात्मिकता',
    narrator: 'लामा सोनम ग्यात्सो',
    role: 'वरिष्ठ भिक्षु',
    description: 'हिमालयी क्षेत्रको पुरानो परम्परा र आध्यात्मिक अभ्यासहरूको बारेमा जान्नुहोस्।',
    duration: '14 min',
    language: 'nepali',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    transcript: 'हिमालयको यो पवित्र भूमिमा शताब्दीयौंदेखि आध्यात्मिक साधनाको धारा बगिरहेको छ। यहाँका प्रत्येक ढुङ्गाले, प्रत्येक रूखले आध्यात्मिक कथा भन्छ...',
    rating: 4.5,
    isOfflineReady: true,
    imageUrl: '/assets/images/monasteries/rituals.jpg'
  },
  {
    id: '6',
    title: 'Meditation Gardens: Nature as Teacher',
    narrator: 'Sister Mary Catherine',
    role: 'Garden Keeper',
    description: 'Walk through our sacred gardens where every plant and stone has been placed with intention to inspire contemplation.',
    duration: '11 min',
    language: 'english',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    transcript: 'In our meditation garden, nature becomes the greatest teacher. The gentle rustle of bamboo speaks of impermanence, while the steadfast mountains remind us of eternal truths...',
    rating: 4.9,
    isOfflineReady: false,
    imageUrl: '/assets/images/monasteries/manuscript.jpeg'
  }
];

const narrators = [
  {
    id: '1',
    name: 'Ven. Tenzin Norbu',
    role: 'Senior Resident Monk',
    quote: 'Each prayer wheel spun carries the hopes of countless souls',
    imageUrl: '/assets/images/team-mates/yash.jpg'
  },
  {
    id: '2',
    name: 'Dr. Pema Wangchuk',
    role: 'Cultural Historian',
    quote: 'History lives in these walls, waiting to speak to open hearts',
    imageUrl: '/assets/images/team-mates/rahul.jpg'
  },
  {
    id: '3',
    name: 'Ven. Karma Choephel',
    role: 'Ritual Master',
    quote: 'In ceremony, we touch the eternal through the temporal',
    imageUrl: '/assets/images/team-mates/mridul.jpg'
  },
  {
    id: '4',
    name: 'Sister Mary Catherine',
    role: 'Garden Keeper',
    quote: 'Every flower that blooms here is a prayer made visible',
    imageUrl: '/assets/images/team-mates/om.jpg'
  }
];

// Components
const HeroSection = ({ onStartListening }) => {
  return (
    <>
    <Header />
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100">
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop)',
          backgroundColor: 'rgba(139, 69, 19, 0.3)'
        }}
      />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          Narrated Walkthroughs
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 opacity-90">
          Journey Beyond Sight
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
          Let the authentic voices of resident monks and cultural historians guide you through sacred halls,
          revealing the hidden meanings behind the art and rituals.
        </p>
        <button
          onClick={onStartListening}
          className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Start Listening
        </button>
      </div>
    </div>
    </>
  );
};

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'english', label: 'English' },
    { code: 'hindi', label: 'हिंदी' },
    { code: 'nepali', label: 'नेपाली' },
    { code: 'sikkimese', label: 'སིཀྐིམ' }
  ];

  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-orange-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedLanguage === lang.code
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-orange-50 text-orange-800 hover:bg-orange-100'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const NarrationCard = ({ narration, onPlay, favorites, onToggleFavorite, expandedTranscript, onToggleTranscript }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={narration.imageUrl}
          alt={narration.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {narration.isOfflineReady && (
          <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Download size={12} />
            Offline Ready
          </div>
        )}
        <button
          onClick={() => onPlay(narration)}
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
            <Play size={24} fill="white" />
          </div>
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">{narration.title}</h3>
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onToggleFavorite(narration.id)}
              className={`p-2 rounded-full transition-colors ${
                favorites.has(narration.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart size={18} fill={favorites.has(narration.id) ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-orange-600 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="mb-3">
          <p className="text-orange-700 font-medium">{narration.narrator}</p>
          <p className="text-sm text-gray-600">{narration.role}</p>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{narration.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              {narration.duration}
            </span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={`cursor-pointer transition-colors ${
                    star <= (rating || narration.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">({narration.rating})</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onPlay(narration)}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Play size={18} fill="white" />
            Play Now
          </button>
          <button
            onClick={() => onToggleTranscript(narration.id)}
            className="px-6 py-3 border border-orange-300 text-orange-700 rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2"
          >
            {expandedTranscript === narration.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            Transcript
          </button>
        </div>

        {expandedTranscript === narration.id && (
          <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <h4 className="font-semibold text-gray-900 mb-2">Transcript</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{narration.transcript}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const AudioPlayer = ({ currentNarration, isPlaying, onTogglePlay, progress, onSeek, volume, onVolumeChange }) => {
  if (!currentNarration) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <img
            src={currentNarration.imageUrl}
            alt={currentNarration.title}
            className="w-12 h-12 rounded-lg object-cover"
          />

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 truncate">{currentNarration.title}</h4>
            <p className="text-sm text-gray-600 truncate">{currentNarration.narrator}</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <SkipBack size={20} />
            </button>

            <button
              onClick={onTogglePlay}
              className="p-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
            >
              {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <SkipForward size={20} />
            </button>
          </div>

          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex-1 bg-gray-200 rounded-full h-2 cursor-pointer" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const width = rect.width;
              onSeek(x / width);
            }}>
              <div
                className="h-full bg-orange-600 rounded-full transition-all duration-200"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            <div className="flex items-center gap-2">
              <Volume2 size={18} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NarratorCard = ({ narrator }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center">
      <img
        src={narrator.imageUrl}
        alt={narrator.name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-orange-100"
      />
      <h3 className="font-semibold text-gray-900 mb-1">{narrator.name}</h3>
      <p className="text-orange-700 text-sm mb-3">{narrator.role}</p>
      <p className="text-gray-600 text-sm italic leading-relaxed">"{narrator.quote}"</p>
    </div>
  );
};

// Main Component
const NarratedWalkthroughs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [currentNarration, setCurrentNarration] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [favorites, setFavorites] = useState(new Set());
  const [expandedTranscript, setExpandedTranscript] = useState(null);

  const audioRef = useRef(null);
  const narrationsRef = useRef(null);

  const filteredNarrations = narrations.filter(n => n.language === selectedLanguage);

  const scrollToNarrations = () => {
    narrationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlay = (narration) => {
    setCurrentNarration(narration);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (newProgress) => {
    setProgress(newProgress);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const toggleTranscript = (id) => {
    setExpandedTranscript(expandedTranscript === id ? null : id);
  };

  // Simulate audio progress
  useEffect(() => {
    if (isPlaying && currentNarration) {
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 1 ? 0 : prev + 0.01));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentNarration]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <HeroSection onStartListening={scrollToNarrations} />

      <LanguageSelector
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />

      <div ref={narrationsRef} className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Sacred Narrations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the wisdom of centuries through carefully curated audio experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredNarrations.map(narration => (
            <NarrationCard
              key={narration.id}
              narration={narration}
              onPlay={handlePlay}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              expandedTranscript={expandedTranscript}
              onToggleTranscript={toggleTranscript}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-yellow-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Narrators</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the spiritual guides and scholars who bring these sacred spaces to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {narrators.map(narrator => (
              <NarratorCard key={narrator.id} narrator={narrator} />
            ))}
          </div>
        </div>

        <div className="text-center bg-white rounded-3xl shadow-lg p-12">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Experience Sacred Silence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Beyond words and narration lies the profound silence that speaks to the soul.
            Visit us to experience the transformative power of contemplative quiet.
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Plan Your Visit
          </button>
        </div>
      </div>

      <AudioPlayer
        currentNarration={currentNarration}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        progress={progress}
        onSeek={handleSeek}
        volume={volume}
        onVolumeChange={handleVolumeChange}
      />

      {currentNarration && (
        <div className="pb-24" />
      )}
    </div>
  );
};

export default NarratedWalkthroughs;