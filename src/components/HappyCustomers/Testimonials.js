"use client"
import React from 'react';

const Testimonials = () => {
  // Array of food reviews
  const reviews = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin mollis felis, vel ullamcorper libero tincidunt eu. Nulla accumsan, neque nec efficitur vulputate, orci dui gravida nulla, nec suscipit odio nibh id nunc. Vivamus malesuada massa a augue volutpat vehicula. Pellentesque magna lacus, viverra sed est in, elementum dignissim nunc.",
      name: "Mia Brown",
      role: "Dance Artist",
    },
    {
      id: 2,
      quote: "Adipiscing elit. Phasellus sollicitudin mollis felis, vel ullamcorper libero tincidunt eu. Nulla accumsan, neque nec efficitur vulputate, orci dui gravida nulla, nec suscipit odio nibh id nunc. Vivamus malesuada massa a augue volutpat vehicula. Pellentesque magna lacus, viverra sed est in, elementum dignissim nunc.",
      name: "John Doe",
      role: "Influencer",
    },
    {
      id: 3,
      quote: "Consectetur adipiscing elit. Phasellus sollicitudin mollis felis, vel ullamcorper libero tincidunt eu. Nulla accumsan, neque nec efficitur vulputate, orci dui gravida nulla, nec suscipit odio nibh id nunc. Vivamus malesuada massa a augue volutpat vehicula. Pellentesque magna lacus, viverra sed est in, elementum dignissim nunc.",
      name: "Jane Smith",
      role: "Digital Creator",
    },
    {
      id: 4,
      quote: " Phasellus sollicitudin mollis felis, vel ullamcorper libero tincidunt eu. Nulla accumsan, neque nec efficitur vulputate, orci dui gravida nulla, nec suscipit odio nibh id nunc. Vivamus malesuada massa a augue volutpat vehicula. Pellentesque magna lacus, viverra sed est in, elementum dignissim nunc.",
      name: "Alice Johnson",
      role: "Fitness Influencer",
    },
    {
      id: 5,
      quote: "Aliquam erat volutpat. Aliquam feugiat nisl sed ligula auctor fermentum. Integer tempor at magna et gravida. Nunc scelerisque vehicula nulla eget placerat. Donec dapibus pretium tellus et eleifend. Praesent faucibus sapien a quam semper, ac venenatis risus fermentum. Vivamus facilisis orci nec sem porta eleifend.",
      name: "Bob Williams",
      role: "Traveler",
    },
    {
      id: 6,
      quote: "Integer tempor at magna et gravida. Nunc scelerisque vehicula nulla eget placerat. Donec dapibus pretium tellus et eleifend. Praesent faucibus sapien a quam semper, ac venenatis risus fermentum. Vivamus facilisis orci nec sem porta eleifend.",
      name: "Charlie Brown",
      role: "beauty influencer",
    },
  ];

  // State to track the current review
  const [currentReview, setCurrentReview] = React.useState(0);

  // Function to handle next review
  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  // Function to handle previous review
  const handlePrevious = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          {/* Food review image */}
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src="https://onetreeplanted.org/cdn/shop/articles/taking_photo_of_forest_on_smartphone_1600x.jpg?v=1661785399"
            alt="Food Review"
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-black">“</p>

            <h1 className="text-2xl font-semibold text-black lg:text-3xl lg:w-96">
              What our customers say about our services
            </h1>

            {/* Text container with fixed height */}
            <div className="max-w-lg mt-6 text-black min-h-[120px]">
              <p>{reviews[currentReview].quote}</p>
            </div>

            <h3 className="mt-6 text-lg font-medium text-black">
              {reviews[currentReview].name}
            </h3>
            <p className="text-black">
              {reviews[currentReview].role}
            </p>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                onClick={handlePrevious}
                className="p-2 text-black transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                title="right arrow"
                onClick={handleNext}
                className="p-2 text-black transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:mx-6 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;