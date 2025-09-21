import React, { useState } from "react";

const BookingModal = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${formData.name} 🎉`);
    onClose();
  };

  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-4">
          <h2 className="text-xl font-bold text-white">
            Reserve Your Spot 🎟️
          </h2>
          <p className="text-sm text-orange-100">
            {event.title} @ {event.monastery}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tickets */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Tickets
            </label>
            <input
              type="number"
              name="tickets"
              placeholder="1"
              min="1"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-orange-600 text-white font-medium rounded-lg shadow hover:bg-orange-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
