import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';
const MenuSection = () => {
  const menuItems = [
    { name: 'Instagram Reels', icon: <FaInstagram className="text-pink-600"/>},
    { name: 'Instagram Posts',  icon: <FaInstagram className="text-pink-600"/> },
    { name: 'Instagram Stories',  icon: <FaInstagram className="text-pink-600"/> },
    { name: 'Facebook Posts',  icon: <FaFacebookF className="text-blue-400" />, },
    { name: 'Facebook Reels',  icon: <FaFacebookF className="text-blue-400" /> },
    { name: 'Facebook Stories', icon: <FaFacebookF className="text-blue-400" /> },
    { name: 'Twitter (X) Posts', icon: <FaTwitter className="text-blue-400" /> },
    { name: 'Tiktok posts', icon: <FaTiktok className="text-blue-400" /> },
    { name: 'Tiktok Misc', icon: <FaTiktok className="text-blue-400" /> }, // New menu item
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Moderation of Comments on Your
        </h2>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4  flex justify-center items-center">{item.icon} {item.name}</h3>
                
              </div>
            </div>
          ))}
        </div>

        {/* Additional Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic text-lg">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;