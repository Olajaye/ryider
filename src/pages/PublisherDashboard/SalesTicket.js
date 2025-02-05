import React, { useState } from 'react';
import { Upload } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventCategory: '',
    typeOfEvent: '',
    venueName: '',
    venueAddress: '',
    dateAndTime: '',
    ticketType: '',
    price: '',
    videoLink: '',
    eventDescription: '',
    optInPromotions: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
   
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Create Ticket</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            onClick={handleSubmit}
          >
            Create Ticket
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Event Category</label>
          <select
            name="eventCategory"
            value={formData.eventCategory}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          >
            <option value="">Select category</option>
            <option value="social">Social Events</option>
            <option value="corporate">Corporate Events</option>
            <option value="entertainment">Entertainment Events</option>
            <option value="sports">Sports Events</option>
            <option value="cultural">Cultural Events</option>
            <option value="fashion">Fashion Events</option>
            <option value="food">Food and Beverage Events</option>
            <option value="community">Community Events</option>
            <option value="virtual">Virtual Events</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type of Event</label>
          <select
            name="typeOfEvent"
            value={formData.typeOfEvent}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          >
            <option value="">Select Type of Event</option> 
            <option value="social">Online</option>
            <option value="physical">physical</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Venue Name</label>
          <input
            type="text"
            name="venueName"
            value={formData.venueName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Venue Address</label>
          <input
            type="text"
            name="venueAddress"
            value={formData.venueAddress}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date and Time</label>
          <input
            type="datetime-local"
            name="dateAndTime"
            value={formData.dateAndTime}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ticket Type</label>
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          >
            <option value="">Select ticket type</option>
            <option value="general">General Admission</option>
            <option value="vip">VIP</option>
            <option value="early-bird">Early Bird</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="block w-full pl-7 pr-12 rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="0.00"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Video Link (Optional)</label>
          <input
            type="url"
            name="videoLink"
            value={formData.videoLink}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="https://"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Event Description</label>
          <textarea
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <Upload className="h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Drag and drop or click to upload banner</p>
          </div>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="optInPromotions"
            checked={formData.optInPromotions}
            onChange={(e) => setFormData(prev => ({ ...prev, optInPromotions: e.target.checked }))}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-600">
            Opt-in for promotions (receive a 25% margin on sales or a 5% outright fee)
          </label>
        </div>
      </form>
    </div>
      
  );
}

export default App;