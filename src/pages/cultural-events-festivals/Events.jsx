import React, { useState } from "react";
import eventsData from "../../utils/eventsData";
import EventCard from "./EventCard";
import BookingModal from "./BookingModal";

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
    </div>
  );
};

export default Events;
