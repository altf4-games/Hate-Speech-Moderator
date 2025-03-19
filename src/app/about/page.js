import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function About() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <div 
                className="relative h-96 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://tractcybernetics.com/img/About_US.png')" }} // Placeholder food image from Unsplash
            >
                {/* Blurred Overlay */}
                <div className="absolute inset-0 bg-opacity-50 "></div>
                
                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4"></h1>
                    <p className="text-xl"></p>
                </div>
            </div>

            {/* About Page Content */}
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-6">
                    Founded in 2025, our company started as a small team of passionate individuals with a vision to 
                    revolutionize the industry. Over the years, we have grown into a trusted name, known for our 
                    commitment to quality and customer satisfaction.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Team</h2>
                <p className="text-gray-600 mb-6">
                    Our team is made up of experienced professionals who are experts in their fields. We believe in 
                    collaboration, creativity, and continuous learning to drive our success.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li><strong className="font-semibold">Integrity:</strong> We operate with honesty and transparency in everything we do.</li>
                    <li><strong className="font-semibold">Innovation:</strong> We constantly seek new ways to improve and innovate.</li>
                    <li><strong className="font-semibold">Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
                    <li><strong className="font-semibold">Sustainability:</strong> We are committed to sustainable practices and environmental responsibility.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                    If you have any questions or would like to learn more about our services, please feel free to 
                    <a href="/contact" className="text-blue-500 hover:text-blue-700 ml-1">contact us</a>. We would love to hear from you!
                </p>
            </div>
            <Footer />
        </>
    );
}