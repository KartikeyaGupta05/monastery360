import React, { useState } from "react";
import eventsData from "../../utils/eventsData";
import EventCard from "./components/EventCard";
import BookingModal from "./components/BookingModal";
import Header from "../../components/ui/Header";

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
    <div className="p-6">
      <Header />
      {/* Page Title + Subtitle */}
      <div className="text-center mb-20">
        <h1 className="text-3xl font-bold">Cultural Events & Festivals
        </h1>
        <p className="text-gray-600 mt-2">
          Discover authentic monastery-linked cultural festivals and events.
          Each gathering preserves ancient traditions and invites you to be part of Sikkim’s vibrant heritage.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="md:w-1/4 bg-white shadow rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-semibold">Filters</h2>

          {/* Search Filter */}
          <div>
            <label className="block text-sm font-medium mb-1">Search</label>
            <input
              type="text"
              placeholder="Search events or monasteries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Monastery Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">Monastery</label>
            <select
              value={filterMonastery}
              onChange={(e) => setFilterMonastery(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {monasteryOptions.map((monastery, idx) => (
                <option key={idx} value={monastery}>
                  {monastery}
                </option>
              ))}
            </select>
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
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
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
                  <p className="font-caption text-sm opacity-80">Digital Heritage Platform</p>
                </div>
              </div>
              <p className="font-body text-background/80 leading-relaxed max-w-md">
                Preserving sacred heritage through immersive technology while empowering 
                artisan communities and promoting sustainable cultural tourism.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Explore</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/virtual-tour-experience" className="text-background/80 hover:text-background transition-colors">Virtual Tours</a></li>
                <li><a href="/interactive-mandala-ai" className="text-background/80 hover:text-background transition-colors">Mandala AI</a></li>
                <li><a href="/artisan-connect-marketplace" className="text-background/80 hover:text-background transition-colors">Artisan Connect</a></li>
                <li><a href="/about-us" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Connect</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/contact" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-background/60 text-sm mb-4 md:mb-0">
              © {new Date()?.getFullYear()} Monastery360. Built for Smart India Hackathon 2025.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;
