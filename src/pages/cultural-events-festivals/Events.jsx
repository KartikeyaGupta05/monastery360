import React, { useState } from "react";
import eventsData from "../../utils/eventsData";
import EventCard from "./EventCard";
import BookingModal from "./BookingModal";
import Header from '../../components/ui/Header';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [search, setSearch] = useState("");
  const [filterMonastery, setFilterMonastery] = useState("All");
  const [sortOption, setSortOption] = useState("upcoming");

  // Get unique monastery names for dropdown
  const monasteryOptions = ["All", ...new Set(eventsData.map((e) => e.monastery))];

  // ✅ Filtered + Sorted events
  const filteredEvents = eventsData
    .filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.monastery.toLowerCase().includes(search.toLowerCase());

      const matchesMonastery =
        filterMonastery === "All" || event.monastery === filterMonastery;

      return matchesSearch && matchesMonastery;
    })
    .sort((a, b) => {
      if (sortOption === "upcoming") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOption === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <>
    <Header />
    <div className="p-6 mt-16">
      {/* Page Title + Subtitle */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Cultural Events & Festivals
        </h1>
        <p className="text-gray-600 mt-2">
          Discover authentic monastery-linked cultural festivals and events. 
          Each gathering preserves ancient traditions and invites you to be part of Sikkim’s vibrant heritage.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="md:w-1/4 bg-white shadow-lg rounded-lg p-6 space-y-6 h-fit sticky top-6">
  {/* Header */}
  <div className="border-b border-gray-200 pb-3">
    <h2 className="text-xl font-semibold text-gray-800 flex items-center">
      <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
      </svg>
      Filters
    </h2>
  </div>

  {/* Search Filter */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Search</label>
    <div className="relative">
      <input
        type="text"
        placeholder="Search events or monasteries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm"
      />
      <svg className="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>

  {/* Monastery Filter */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Monastery</label>
    <div className="relative">
      <select
        value={filterMonastery}
        onChange={(e) => setFilterMonastery(e.target.value)}
        className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm"
      >
        {monasteryOptions.map((monastery, idx) => (
          <option key={idx} value={monastery}>
            {monastery}
          </option>
        ))}
      </select>
      <svg className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>

  {/* Date Range Filter */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Date Range</label>
    <div className="grid grid-cols-2 gap-2">
      <div className="relative">
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      <div className="relative">
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
        />
      </div>
    </div>
    <div className="text-xs text-gray-500 text-center">From → To</div>
  </div>

  {/* Festival Type Filter */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Festival Type</label>
    <div className="space-y-2">
      {['All Types', 'Religious', 'Cultural', 'Seasonal', 'Traditional'].map((type) => (
        <label key={type} className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name="festivalType"
            value={type}
            className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500 focus:ring-2"
          />
          <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
            {type}
          </span>
        </label>
      ))}
    </div>
  </div>

  {/* Quick Filter Tags */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Quick Filters</label>
    <div className="flex flex-wrap gap-2">
      {['This Month', 'Free Events', 'Family Friendly', 'Photography'].map((tag) => (
        <button
          key={tag}
          className="px-3 py-1.5 text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full hover:bg-amber-100 hover:border-amber-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {tag}
        </button>
      ))}
    </div>
  </div>

  {/* Clear Filters Button */}
  <div className="pt-4 border-t border-gray-200">
    <button className="w-full py-2 px-4 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
      Clear All Filters
    </button>
  </div>

  {/* Results Counter */}
  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
    <p className="text-sm text-amber-800">
      <span className="font-medium">10</span> events found
    </p>
  </div>
</aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing {filteredEvents.length} cultural events
            </p>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="upcoming">Upcoming</option>
              <option value="latest">Latest</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onBook={setSelectedEvent} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No events found.
              </p>
            )}
          </div>
        </main>
      </div>

      {/* Booking Modal */}
      {selectedEvent && (
        <BookingModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>

    <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-primary-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl">Monastery360</h3>
                  <p className="font-caption text-sm opacity-80">Digital Heritage Preservation</p>
                </div>
              </div>
              <p className="font-body text-sm opacity-80 leading-relaxed mb-4">
                Preserving monastery heritage through innovative technology, connecting cultures, and supporting artisan communities worldwide.
              </p>
              <p className="font-caption text-xs opacity-60">
                © {new Date()?.getFullYear()} Monastery360. Built for Smart India Hackathon 2025.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body text-sm">
                <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="/virtual-tour-experience" className="opacity-80 hover:opacity-100 transition-opacity">Virtual Tours</a></li>
                <li><a href="/interactive-mandala-ai" className="opacity-80 hover:opacity-100 transition-opacity">Mandala AI</a></li>
                <li><a href="/artisan-connect-marketplace" className="opacity-80 hover:opacity-100 transition-opacity">Artisan Connect</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-sm opacity-80">
                <li>hello@monastery360.com</li>
                <li>New Delhi, India</li>
                <li>Leh, Ladakh</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Events;
