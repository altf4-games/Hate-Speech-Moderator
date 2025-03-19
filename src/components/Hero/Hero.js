import Link from 'next/link';
import Image from 'next/image';
import foodsImage from './images/cover.jpg';
import OurSpecialities from '../Special/OurSpecialities';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={foodsImage}
          alt="Delicious Food Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full">
        {/* Left Half - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:pr-24 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 font-serif leading-tight">
              Stop the Trolls
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Keep your Social media handles positive and encouraging with no place for trolls.
            </p>
            <Link
              href="/menu"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block text-lg"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Half - White Section with Irregular Shape */}
        <div className="w-full lg:w-1/2 relative">
          {/* Irregular shape overlay */}
          <div className="absolute inset-y-0 left-0 w-[200%] bg-white transform -skew-x-12 origin-top-left lg:-skew-x-6 xl:skew-x-0" 
               style={{ clipPath: 'polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)' }}>
            <div className="absolute inset-0 bg-white"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative h-full flex items-center justify-center p-8 lg:p-12 xl:p-16">
  {/* Left Wave */}
  <div
    className="absolute left-0 top-0 h-full w-24 bg-no-repeat bg-cover bg-left"
    style={{ backgroundImage: "url('/wave.svg')" }}
  ></div>

  <div className="w-full max-w-xl space-y-8 transform lg:translate-x-12">
    <OurSpecialities />
  </div>
</div>
        </div>
      </div>
    </div>
  );
}