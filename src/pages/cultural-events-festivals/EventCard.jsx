import React from "react";

const EventCard = ({ event, onBook }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      {/* Event Image */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
      </div>

      {/* Event Info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {event.title}
        </h3>

        {/* Monastery */}
        <p className="text-sm text-gray-600 mt-1">{event.monastery}</p>

        {/* Date */}
        <p className="text-sm text-gray-500">📅 {event.date}</p>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-2 line-clamp-2">
          {event.description}
        </p>

        {/* CTA */}
        <button
          onClick={() => onBook(event)}
          className="mt-4 px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
