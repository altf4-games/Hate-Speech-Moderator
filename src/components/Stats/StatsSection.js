import React from 'react';

const StatsSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-950 overflow-hidden">
      {/* Background Image with Dark Overlay and Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://wallpapers.com/images/hd/social-media-apps-dgwr9vwvb0svnu9w.jpg")',
          filter: ' brightness(0.5)',
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Happy Customers */}
          <div className="p-8 transform transition-all hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-50 mb-2">4,680</h3>
            <p className="text-lg text-gray-200">Happy Customers</p>
          </div>

          {/* Dishes Served */}
          <div className="p-8 transform transition-all hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-50 mb-2">865</h3>
            <p className="text-lg text-gray-200">People Online</p>
          </div>

          {/* Total Beverages */}
          <div className="p-8 transform transition-all hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-50 mb-2">510</h3>
            <p className="text-lg text-gray-200">New Customers everyday</p>
          </div>

          {/* Cup of Coffees */}
          <div className="p-8 transform transition-all hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-50 mb-2">1,350</h3>
            <p className="text-lg text-gray-200">Comments moderated per hour</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;