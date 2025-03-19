"use client"
import React, { useState } from 'react';

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState('Deletion of Inappropriate comments from');

  // Data for each tab
  const tabData = {
    'Deletion of Inappropriate comments from': [], // This will be dynamically populated
    'Instagram': [
      { id: 4, image: 'https://sharethis.com/wp-content/uploads/2022/11/Blog_IGReels_110822-min.png', name: 'Instagram Reels' },
      { id: 5, image: 'https://static-cse.canva.com/blob/1218625/AcompleteguidetocreatinganInstagramStoryfeaturedimage.jpg', name: 'Stories' },
      { id: 6, image: 'https://brands.joinstatus.com/hubfs/Instagram%20Reels%20vs%20In-Feed%20Posts_%20Do%20They%20Have%20the%20Same%20Reach_.jpg', name: 'Posts' },
    ],
    'Facebook': [
      { id: 7, image: 'https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2021/11/18202550/Facebook-Reels.jpeg', name: 'Facebook Reels' },
      { id: 8, image: 'https://www.creatopy.com/blog/wp-content/uploads/2019/07/where-are-stories-on-facebook-600x600.png', name: 'Stories' },
      { id: 9, image: 'https://mockupden.com/wp-content/uploads/2021/02/Design-Free-Facebook-Mobile-Post-Mockup-PSD-Template-1920x1920.jpg', name: 'Posts' },
    ],
    'X and Tiktok': [
      { id: 10, image: 'https://images.hindustantimes.com/tech/img/2024/10/01/1600x900/22222222222222222222222222_1722120003774_1727773078438.jpg', name: 'Twitter X Text Posts' },
      { id: 11, image: 'https://www.searchinventure.com/wp-content/uploads/2021/06/terrillo-walls-t50Zs9KDV7I-unsplash.jpg', name: 'Twitter X Media Posts' },
      { id: 12, image: 'https://blog.eklipse.gg/wp-content/uploads/2023/08/31-tiktokonlinevideoeditors-listicle.jpg', name: 'Tiktok Posts' },
    ],
    
  };

  // Combine all images for the "All Foods" tab
  const allFoodsData = Object.values(tabData)
    .flat()
    .filter((item) => item.id); // Filter out empty arrays

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Our Services
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold text-sm md:text-lg ${
                activeTab === tab
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-all`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'Deletion of Inappropriate comments from' ? allFoodsData : tabData[activeTab]).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;