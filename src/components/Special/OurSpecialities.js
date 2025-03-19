import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

const OurSpecialities = () => {
  const specialities = [
    {
      title: "Instagram",
      icon: <FaInstagram className="text-pink-600" />,
    },
    {
      title: "Twitter",
      icon: <FaTwitter className="text-blue-400" />,
    },
    {
      title: "Facebook",
      icon: <FaFacebookF className="text-blue-600" />,
    },
    {
      title: "Tiktok",
      icon: <FaTiktok className="text-black" />,
    },
  ];

  return (
    <div className="flex justify-end">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Fight Trolls
          </h2>
          <div className="flex flex-col items-center space-y-14">
            {specialities.map((item, index) => (
              <div
                key={index}
                className="group relative w-full text-center"
              >
                <div className="inline-block transition-transform duration-300 hover:scale-125 mb-4">
                  <div className="text-5xl">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSpecialities;