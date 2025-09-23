import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Download,
  Eye,
  Calendar,
  MapPin,
  Tag,
  ChevronDown,
  Star,
  Clock,
  Users,
  Heart,
  Share2,
  Bookmark,
  ZoomIn,
  RotateCw,
  Play,
  Pause,
  Volume2,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  SortAsc,
  Layers,
  Shield,
  Database,
  Cpu,
  Brain,
  MousePointer,
  FileText,
  Camera,
} from "lucide-react";
import Header from "components/ui/Header";
import Button from "components/ui/Button";

// Digital Archives Enhanced Page Component
const DigitalArchivesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [bookmarked, setBookmarked] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 9;

  // Enhanced dummy data for archives
  const archiveCategories = [
    {
      id: "all",
      name: "All Documents",
      count: 847,
      icon: Database,
      color: "text-amber-600",
    },
    {
      id: "manuscripts",
      name: "Ancient Manuscripts",
      count: 256,
      icon: FileText,
      color: "text-amber-600",
    },
    {
      id: "murals",
      name: "Sacred Murals",
      count: 189,
      icon: Layers,
      color: "text-amber-600",
    },
    {
      id: "prayers",
      name: "Prayer Books",
      count: 134,
      icon: BookOpen,
      color: "text-amber-600",
    },
    {
      id: "history",
      name: "Historical Records",
      count: 167,
      icon: Calendar,
      color: "text-amber-600",
    },
    {
      id: "architecture",
      name: "Architectural Drawings",
      count: 101,
      icon: Grid,
      color: "text-amber-600",
    },
  ];

  const eraFilters = [
    { id: "all", name: "All Periods", count: 847 },
    { id: "17th", name: "17th Century", count: 234 },
    { id: "18th", name: "18th Century", count: 198 },
    { id: "19th", name: "19th Century", count: 256 },
    { id: "20th", name: "20th Century", count: 159 },
  ];

  const languageFilters = [
    { id: "all", name: "All Languages" },
    { id: "tibetan", name: "Classical Tibetan" },
    { id: "english", name: "English" },
    { id: "hindi", name: "Hindi" },
    { id: "nepali", name: "Nepali" },
    { id: "sanskrit", name: "Sanskrit" },
  ];

  const sortOptions = [
    { id: "popularity", name: "Most Popular" },
    { id: "recent", name: "Recently Added" },
    { id: "oldest", name: "Oldest First" },
    { id: "rating", name: "Highest Rated" },
    { id: "downloads", name: "Most Downloaded" },
  ];

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedEra("all");
    setSelectedLanguage("all");
    setSortBy("popularity");
    setSearchTerm("");
    setCurrentPage(1);
  };

  const featuredDocuments = [
    {
      id: 1,
      title: "Sacred Mandala of Tashiding Monastery",
      description:
        "Ancient mandala depicting the cosmic order, hand-painted by Tibetan monks in 1680. This masterpiece showcases the Buddhist cosmological understanding through intricate geometric patterns and symbolic representations.",
      category: "murals",
      era: "17th",
      monastery: "Tashiding Monastery",
      location: "West Sikkim",
      dateCreated: "1680 CE",
      language: "Classical Tibetan",
      pages: 1,
      downloads: 247,
      views: 834,
      likes: 156,
      rating: 4.8,
      resolution: "4K Ultra HD",
      fileSize: "85 MB",
      image:"/assets/images/monasteries/tashiding.jpg",
      tags: [
        "mandala",
        "sacred geometry",
        "tibetan art",
        "spiritual",
        "cosmic order",
      ],
      aiInsights:
        "This mandala represents the Buddhist cosmology with Mount Meru at the center, surrounded by four continents and eight sub-continents. The intricate details reveal the monks' deep understanding of sacred geometry.",
      preservation: "Digitally restored using AI enhancement",
      culturalSignificance: "High",
      rarity: "Extremely Rare",
      condition: "Well Preserved",
      featured: true,
    },
    {
      id: 2,
      title: "Pemayangtse Foundation Chronicle",
      description:
        "Comprehensive historical manuscript detailing the establishment and early history of Pemayangtse Monastery. Contains rare insights into monastic life and architectural planning from the 18th century.",
      category: "manuscripts",
      era: "18th",
      monastery: "Pemayangtse Monastery",
      location: "West Sikkim",
      dateCreated: "1705 CE",
      language: "Classical Tibetan",
      pages: 47,
      downloads: 192,
      views: 621,
      likes: 89,
      rating: 4.9,
      resolution: "High Resolution Scan",
      fileSize: "124 MB",
      image:"/assets/images/monasteries/pemayangtse.jpeg",
      tags: [
        "history",
        "monastery",
        "foundation",
        "tibetan script",
        "chronicle",
      ],
      aiInsights:
        "Contains detailed accounts of land grants, construction phases, and the first abbot Lhatsun Chenpo. Reveals important political and religious connections of the era.",
      preservation: "Carefully digitized with UV photography",
      culturalSignificance: "Very High",
      rarity: "Rare",
      condition: "Good",
      featured: true,
    },
    {
      id: 3,
      title: "Rumtek Monastery Architectural Plans",
      description:
        "Original blueprints and architectural drawings of the famous Rumtek Monastery. These plans show the integration of traditional Tibetan architecture with modern construction techniques.",
      category: "architecture",
      era: "20th",
      monastery: "Rumtek Monastery",
      location: "East Sikkim",
      dateCreated: "1966 CE",
      language: "English & Tibetan",
      pages: 23,
      downloads: 156,
      views: 421,
      likes: 67,
      rating: 4.7,
      resolution: "Engineering Grade",
      fileSize: "67 MB",
      image:"/assets/images/monasteries/rumtek.jpeg",
      tags: [
        "architecture",
        "modern",
        "construction",
        "blueprints",
        "engineering",
      ],
      aiInsights:
        "Shows the integration of traditional Tibetan architecture with modern construction techniques. Demonstrates careful consideration of seismic activity and climate factors.",
      preservation: "Professional archival scanning",
      culturalSignificance: "Medium",
      rarity: "Uncommon",
      condition: "Excellent",
      featured: false,
    },
    {
      id: 4,
      title: "Daily Prayer Rituals Handbook",
      description:
        "Complete guide to daily prayers and rituals performed at Enchey Monastery. Includes detailed instructions, timings, and spiritual significance of each practice.",
      category: "prayers",
      era: "19th",
      monastery: "Enchey Monastery",
      location: "East Sikkim",
      dateCreated: "1840 CE",
      language: "Classical Tibetan",
      pages: 156,
      downloads: 341,
      views: 856,
      likes: 198,
      rating: 4.9,
      resolution: "High Definition",
      fileSize: "198 MB",
      image:"/assets/images/monasteries/rituals.jpg",
      tags: [
        "prayers",
        "rituals",
        "daily practice",
        "spiritual guide",
        "monastery life",
      ],
      aiInsights:
        "Includes detailed instructions for morning prayers, meditation sessions, and evening chants. Provides insight into the structured spiritual life of Buddhist monks.",
      preservation: "Multi-spectral imaging used",
      culturalSignificance: "High",
      rarity: "Common",
      condition: "Fair",
      featured: true,
    },
    {
      id: 5,
      title: "Ancient Thangka Painting Collection",
      description:
        "Rare collection of Thangka paintings from various monasteries across Sikkim. Each painting tells a unique story of Buddhist teachings and local folklore.",
      category: "murals",
      era: "18th",
      monastery: "Multiple Monasteries",
      location: "All Sikkim",
      dateCreated: "1750-1800 CE",
      language: "Visual Art",
      pages: 12,
      downloads: 289,
      views: 734,
      likes: 167,
      rating: 4.8,
      resolution: "Museum Quality",
      fileSize: "345 MB",
      image:"/assets/images/monasteries/thangka.jpeg",
      tags: [
        "thangka",
        "paintings",
        "buddhist art",
        "folklore",
        "visual storytelling",
      ],
      aiInsights:
        "These Thangka paintings represent the pinnacle of Himalayan Buddhist art. Each piece incorporates local Sikkimese cultural elements with traditional Tibetan iconography.",
      preservation: "Color-corrected digital capture",
      culturalSignificance: "Very High",
      rarity: "Very Rare",
      condition: "Variable",
      featured: true,
    },
    {
      id: 6,
      title: "Medicinal Plant Manuscripts",
      description:
        "Traditional Tibetan medicine manuscripts documenting healing plants found in Sikkim's mountains. Includes preparation methods and therapeutic applications.",
      category: "manuscripts",
      era: "19th",
      monastery: "Tashiding Monastery",
      location: "West Sikkim",
      dateCreated: "1845 CE",
      language: "Classical Tibetan",
      pages: 89,
      downloads: 167,
      views: 445,
      likes: 89,
      rating: 4.6,
      resolution: "High Resolution",
      fileSize: "156 MB",
      image:"/assets/images/monasteries/manuscript.jpeg",
      tags: [
        "medicine",
        "plants",
        "healing",
        "traditional knowledge",
        "tibetan medicine",
      ],
      aiInsights:
        "Documents over 200 medicinal plants with detailed illustrations and preparation methods. Represents centuries of accumulated healing wisdom.",
      preservation: "Botanical accuracy verified",
      culturalSignificance: "High",
      rarity: "Rare",
      condition: "Good",
      featured: false,
    },
  ];

  const filteredDocuments = featuredDocuments.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesEra = selectedEra === "all" || doc.era === selectedEra;
    const matchesLanguage =
      selectedLanguage === "all" ||
      doc.language.toLowerCase().includes(selectedLanguage);

    return matchesSearch && matchesCategory && matchesEra && matchesLanguage;
  });

  // Pagination
  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);
  const startIndex = (currentPage - 1) * documentsPerPage;
  const currentDocuments = filteredDocuments.slice(
    startIndex,
    startIndex + documentsPerPage
  );

  const toggleBookmark = (docId) => {
    const newBookmarked = new Set(bookmarked);
    if (newBookmarked.has(docId)) {
      newBookmarked.delete(docId);
    } else {
      newBookmarked.add(docId);
    }
    setBookmarked(newBookmarked);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        {/* Enhanced Hero Section with Background Image */}
<section className="relative py-24 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      alt="Monastery background"
      className="w-full h-full object-cover"
    />
    {/* Overlay gradients for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/10"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
    {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-orange-900/20 to-amber-900/30"></div> */}
  </div>
  
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 text-white">
    <div className="text-center mb-12">
      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-white/30">
        <Shield className="w-6 h-6 mr-3" />
        <span className="font-semibold text-lg">Digital Heritage Preservation Initiative</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
        Sacred Digital Archives
      </h1>
      <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
        Explore 847+ meticulously digitized manuscripts, ancient murals, and historical documents 
        from Sikkim's monasteries with cutting-edge AI-powered search and cultural insights.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">UNESCO Partnership</span>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-orange-300" />
            <span className="font-semibold">Global Access</span>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-amber-300" />
            <span className="font-semibold">AI Enhanced</span>
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-4xl font-bold mb-2 text-white drop-shadow-lg">847</div>
        <div className="text-white/80">Digital Documents</div>
        <div className="text-sm text-amber-200 mt-1">+89 this month</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-4xl font-bold mb-2 text-white drop-shadow-lg">67+</div>
        <div className="text-white/80">Monasteries</div>
        <div className="text-sm text-amber-200 mt-1">Across Sikkim</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-4xl font-bold mb-2 text-white drop-shadow-lg">456+</div>
        <div className="text-white/80">Years of History</div>
        <div className="text-sm text-amber-200 mt-1">Dating to 1600s</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-4xl font-bold mb-2 text-white drop-shadow-lg">12+</div>
        <div className="text-white/80">Languages</div>
        <div className="text-sm text-amber-200 mt-1">Preserved</div>
      </div>
    </div>
  </div>
</section>

      {/* Enhanced Search Bar */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-7 h-7" />
                <input
                  type="text"
                  placeholder="Search & categorization using AI (e.g., '18th century Tibetan manuscripts on meditation')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-32 py-6 text-lg bg-transparent focus:outline-none"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-amber-700 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Powered
                  </div>
                  <Button variant="default" className="bg-amber-700 hover:bg-amber-800 text-white p-3 rounded-xl transition-colors">
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Sacred Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated collections organized by type, each
              preserving centuries of spiritual heritage and cultural wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {archiveCategories.slice(1).map((category, index) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                // CHANGE 1: Added flexbox to align content vertically
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-amber-100 hover:border-amber-200 relative overflow-hidden w-full max-w-sm mx-auto flex flex-col"
              >
                {/* Background Pattern (No change) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                {/* Icon (No change) */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon
                    className={`w-10 h-10 ${category.color.replace(
                      "text-",
                      "text-amber-"
                    )}`}
                  />
                </div>

                {/* Content */}
                {/* CHANGE 2: Made this content block a growing flex container */}
                <div className="relative z-10 text-center flex flex-col flex-grow">
                  {/* CHANGE 3: Gave the title a minimum height to prevent layout shifts */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-800 transition-colors min-h-[3.5rem]">
                    {category.name}
                  </h3>

                  {/* Stats (No change) */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 mb-6">
                    <div className="text-3xl font-bold text-amber-700 mb-1">
                      {category.count}
                    </div>
                    <div className="text-sm text-amber-600 font-medium">
                      Sacred Documents
                    </div>
                  </div>

                  {/* Progress Bar (No change) */}
                  <div className="w-full bg-amber-100 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-700 group-hover:from-amber-600 group-hover:to-orange-600"
                      style={{
                        width: `${Math.min(
                          100,
                          (category.count / 300) * 100
                        )}%`,
                      }}
                    ></div>
                  </div>

                  {/* Action Button */}
                  {/* CHANGE 4: Added margin-top-auto to push the button to the bottom */}
                  <Button variant="default" className="w-full text-white py-3 px-6 rounded-2xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 group-hover:shadow-lg mt-auto">
                    Explore Collection
                  </Button >
                </div>

                {/* Decorative Elements (No change) */}
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-amber-300 rounded-full opacity-60"></div>
                <div className="absolute top-6 left-6 w-2 h-2 bg-orange-300 rounded-full opacity-40"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Left Sidebar Filters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Filter className="w-6 h-6 text-amber-700" />
                  <h3 className="font-bold text-gray-800 text-xl">
                    Smart Filters
                  </h3>
                </div>
                {/* Clear Filters Button */}
                <div className="mb-6">
                  <Button
                    variant="default"
                    onClick={clearAllFilters}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Clear All Filters
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none bg-white shadow-sm font-medium"
                    >
                      {archiveCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name} ({cat.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Era Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Historical Period
                    </label>
                    <select
                      value={selectedEra}
                      onChange={(e) => setSelectedEra(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none bg-white shadow-sm font-medium"
                    >
                      {eraFilters.map((era) => (
                        <option key={era.id} value={era.id}>
                          {era.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Language Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Language
                    </label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none bg-white shadow-sm font-medium"
                    >
                      {languageFilters.map((lang) => (
                        <option key={lang.id} value={lang.id}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none bg-white shadow-sm font-medium"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      View Mode
                    </label>
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        onClick={() => setViewMode("grid")}
                        className={`flex-1 p-3 rounded-xl transition-all border-2 ${
                          viewMode === "grid"
                            ? "bg-amber-100 text-amber-700 border-amber-200 shadow-md"
                            : "text-gray-400 hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        <Grid className="w-5 h-5 mx-auto" />
                      </Button>
                      <Button
                        variant="default"
                        onClick={() => setViewMode("list")}
                        className={`flex-1 p-3 rounded-xl transition-all border-2 ${
                          viewMode === "list"
                            ? "bg-amber-100 text-amber-700 border-amber-200 shadow-md"
                            : "text-gray-400 hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        <List className="w-5 h-5 mx-auto" />
                      </Button>
                    </div>
                  </div>

                  {/* Filter Results Summary */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-amber-800">
                        Active Filters
                      </h4>
                      {(selectedCategory !== "all" ||
                        selectedEra !== "all" ||
                        selectedLanguage !== "all" ||
                        searchTerm) && (
                        <Button
                        variant="default"
                          onClick={clearAllFilters}
                          className="text-xs text-red-600 hover:text-red-700 font-semibold underline"
                        >
                          Clear All
                        </Button>
                      )}
                    </div>
                    <div className="text-sm text-amber-700 space-y-1">
                      {selectedCategory !== "all" && (
                        <div>
                          Category:{" "}
                          {
                            archiveCategories.find(
                              (c) => c.id === selectedCategory
                            )?.name
                          }
                        </div>
                      )}
                      {selectedEra !== "all" && (
                        <div>
                          Era:{" "}
                          {eraFilters.find((e) => e.id === selectedEra)?.name}
                        </div>
                      )}
                      {selectedLanguage !== "all" && (
                        <div>
                          Language:{" "}
                          {
                            languageFilters.find(
                              (l) => l.id === selectedLanguage
                            )?.name
                          }
                        </div>
                      )}
                      {searchTerm && <div>Search: "{searchTerm}"</div>}
                    </div>
                    <div className="text-lg font-bold text-amber-800 mt-2">
                      {filteredDocuments.length} documents found
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Sacred Documents Collection
                  </h2>
                  <p className="text-gray-600">
                    Discover {filteredDocuments.length} carefully preserved
                    manuscripts and artifacts
                  </p>
                </div>
                <div className="text-sm text-gray-500 bg-white rounded-lg px-4 py-2 border border-gray-200">
                  Page {currentPage} of {totalPages}
                </div>
              </div>

              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    : "space-y-8"
                }
              >
                {currentDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer group relative ${
                      viewMode === "list" ? "flex" : ""
                    } ${
                      doc.featured
                        ? "ring-2 ring-amber-300 ring-opacity-50"
                        : ""
                    }`}
                    onClick={() => setSelectedDocument(doc)}
                  >
                    {doc.featured && (
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Featured
                      </div>
                    )}

                    <div
                      className={`relative ${
                        viewMode === "list"
                          ? "w-80 flex-shrink-0"
                          : "w-full h-64"
                      } overflow-hidden`}
                    >
                      <img
                        src={doc.image}
                        alt={doc.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div className="text-white">
                            <div className="text-sm font-medium">
                              {doc.resolution}
                            </div>
                            <div className="text-xs opacity-90">
                              {doc.fileSize}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="default"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleBookmark(doc.id);
                              }}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Bookmark
                                className={`w-4 h-4 ${
                                  bookmarked.has(doc.id)
                                    ? "fill-current text-yellow-300"
                                    : "text-white"
                                }`}
                              />
                            </Button>
                            <Button variant="default" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                              <Share2 className="w-4 h-4 text-white" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold">
                            {doc.rating}
                          </span>
                        </div>
                      </div>

                      {/* Rarity Badge */}
                      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {doc.rarity}
                      </div>
                    </div>

                    <div className="p-8 flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2 text-sm text-amber-700">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{doc.monastery}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{doc.era}th Century</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors leading-tight">
                        {doc.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {doc.description}
                      </p>

                      {/* Enhanced Metadata */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-100">
                          <div className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-1">
                            Cultural Significance
                          </div>
                          <div className="font-bold text-amber-700">
                            {doc.culturalSignificance}
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                          <div className="text-gray-500 text-xs uppercase tracking-wide font-semibold mb-1">
                            Condition
                          </div>
                          <div className="font-bold text-gray-700">
                            {doc.condition}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {doc.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="bg-white text-amber-700 px-3 py-1 rounded-full text-xs font-medium border border-amber-200"
                          >
                            #{tag}
                          </span>
                        ))}
                        {doc.tags.length > 4 && (
                          <span className="text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-full border border-gray-200">
                            +{doc.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{doc.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>{doc.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{doc.likes.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-700">
                            {doc.pages} {doc.pages === 1 ? "page" : "pages"}
                          </div>
                          <div className="text-xs text-gray-500">
                            {doc.language}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="default"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Download logic
                          }}
                          className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center hover:from-amber-700 hover:to-orange-700"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="default" className="px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors bg-white">
                          <ZoomIn className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-12">
                  <Button
                    variant="default"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex space-x-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <Button
                          variant="default"
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-4 py-2 rounded-lg ${
                            currentPage === pageNum
                              ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white"
                              : "bg-white border-2 border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>

                  <Button
                    variant="default" 
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="flex items-center px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Document Modal */}
      {selectedDocument && (
        <DocumentModal
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}

      {/* Enhanced AI Insights Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Brain className="w-6 h-6 mr-3 text-amber-700" />
              <span className="font-semibold text-lg text-gray-800">
                Powered by Advanced AI
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Cultural Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our cutting-edge artificial intelligence analyzes thousands of
              documents to provide unprecedented cultural context and historical
              connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Semantic Search
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Find documents by meaning, not just keywords. Ask natural
                questions about Buddhist concepts, historical periods, or
                spiritual practices and get intelligent results.
              </p>
              <div className="mt-4 text-sm text-amber-700 font-semibold">
                98.7% Accuracy Rate
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6">
                <Tag className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Smart Categorization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Documents are automatically categorized by era, theme,
                monastery, and spiritual significance using advanced machine
                learning algorithms trained on Buddhist literature.
              </p>
              <div className="mt-4 text-sm text-amber-700 font-semibold">
                15+ Categories Detected
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Cultural Context
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get detailed explanations of symbols, rituals, and historical
                context for each document. Our AI provides rich cultural
                insights that enhance understanding.
              </p>
              <div className="mt-4 text-sm text-amber-700 font-semibold">
                Deep Learning Powered
              </div>
            </div>
          </div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center mr-4">
                  <MousePointer className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Interactive Exploration
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Click on any part of a manuscript or mural to get instant
                AI-generated explanations of symbols, text, or artistic
                elements.
              </p>
              <div className="flex items-center text-sm text-amber-700 font-semibold">
                <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                Live Translation Available
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Pattern Recognition
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced computer vision identifies recurring motifs, artistic
                styles, and symbolic patterns across different monasteries and
                time periods.
              </p>
              <div className="flex items-center text-sm text-amber-700 font-semibold">
                <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                Neural Network Trained
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preservation Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-3 mb-6">
                <Shield className="w-5 h-5 mr-2 text-amber-700" />
                <span className="font-semibold text-gray-800">
                  Digital Preservation Excellence
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                State-of-the-Art Preservation Technology
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We use cutting-edge digital preservation techniques to ensure
                these sacred documents are protected for future generations
                while making them accessible today.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Ultra-High Resolution Scanning
                    </h3>
                    <p className="text-gray-600">
                      Professional-grade scanners capture documents at up to 600
                      DPI with color accuracy verification and multi-spectral
                      imaging for faded texts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Climate-Controlled Processing
                    </h3>
                    <p className="text-gray-600">
                      All digitization happens in controlled environments to
                      protect fragile manuscripts from temperature and humidity
                      fluctuations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Redundant Backup Systems
                    </h3>
                    <p className="text-gray-600">
                      Multiple copies stored across different geographic
                      locations ensure permanent preservation of these cultural
                      treasures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Digital preservation process"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700">847</div>
                    <div className="text-sm text-gray-600">
                      Documents Preserved
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">
                      4K+
                    </div>
                    <div className="text-sm text-gray-600">
                      Ultra HD Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Explore Sacred Heritage Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Join thousands of researchers, students, and spiritual seekers
            discovering Sikkim's rich monastery heritage through our digital
            archives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="default" className="bg-white text-amber-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Search className="w-5 h-5 mr-3" />
              Start Exploring Archives
            </Button>
            <Button variant="default" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-3" />
              Download Mobile App
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

// Enhanced Document Modal Component
const DocumentModal = ({ document, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-3xl">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {document.title}
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center text-sm text-amber-700">
                <MapPin className="w-4 h-4 mr-1" />
                {document.monastery}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {document.dateCreated}
              </div>
              <div className="flex items-center text-sm text-yellow-600">
                <Star className="w-4 h-4 mr-1 fill-current" />
                {document.rating} Rating
              </div>
            </div>
          </div>
          <Button
            variant="default"
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="text-2xl text-gray-400">×</span>
          </Button>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Image Viewer */}
            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-4">
                <img
                  src={document.image}
                  alt={document.title}
                  className="w-full rounded-xl shadow-lg"
                  style={{ transform: `scale(${zoomLevel})` }}
                />

                {/* Image Controls */}
                <div className="absolute top-6 right-6 flex space-x-2">
                  <Button variant="default"
                    onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.5))}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow hover:bg-white transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button variant="default"
                    onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.5))}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow hover:bg-white transition-colors"
                  >
                    <RotateCw className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quality Indicators */}
                <div className="absolute bottom-6 left-6 flex space-x-2">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {document.resolution}
                  </span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {document.fileSize}
                  </span>
                </div>
              </div>

              {/* Audio Guide Preview */}
              {document.category === "murals" && (
                <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Audio Guide Available
                    </h4>
                    <Button
                      variant="default"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-amber-500 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Narrated by monastery monks</span>
                    <span>4:32 / 15:20</span>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Document Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {document.description}
                </p>
              </div>

              {/* Comprehensive Metadata */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4">
                  <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">
                    Monastery
                  </h4>
                  <p className="text-gray-900 font-semibold">
                    {document.monastery}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4">
                  <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">
                    Location
                  </h4>
                  <p className="text-gray-900 font-semibold">
                    {document.location}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-4">
                  <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">
                    Era
                  </h4>
                  <p className="text-gray-900 font-semibold">
                    {document.dateCreated}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4">
                  <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">
                    Language
                  </h4>
                  <p className="text-gray-900 font-semibold">
                    {document.language}
                  </p>
                </div>
              </div>

              {/* Enhanced AI Insights */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-amber-700" />
                  AI Cultural Insights
                </h4>
                <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {document.aiInsights}
                  </p>
                  <div className="mt-4 pt-4 border-t border-amber-300">
                    <div className="flex items-center text-sm text-amber-700 font-semibold">
                      <Cpu className="w-4 h-4 mr-2" />
                      Generated by Advanced AI • 99.2% Cultural Accuracy
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Tags */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Topics & Keywords
                </h4>
                <div className="flex flex-wrap gap-3">
                  {document.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200 hover:from-amber-200 hover:to-orange-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-amber-600 mb-1">
                    {document.views}
                  </div>
                  <div className="text-sm text-gray-600">Views</div>
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {document.downloads}
                  </div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    {document.likes}
                  </div>
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex gap-4">
                <Button variant="default" className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center text-lg hover:from-amber-700 hover:to-orange-700">
                  <Download className="w-5 h-5 mr-3" />
                  Download ({document.fileSize})
                </Button>
                <Button variant="default" className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center text-lg bg-white">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Open Viewer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalArchivesPage;
