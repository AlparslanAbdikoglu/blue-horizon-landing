
import Navbar from "../components/Navbar";
import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";
import { PlayCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Full-width Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Professional headshot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl animate-slide-in">
              <span className="inline-block px-4 py-1 bg-secondary rounded-full text-white font-medium text-sm mb-4">
                Welcome
              </span>
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Leading with Vision <br />
                and Purpose
              </h1>
              <p className="font-inter text-lg text-white/90 mb-8">
                Dedicated to making a positive impact through innovation, leadership, and meaningful engagement.
              </p>
              <button className="bg-secondary text-white font-medium px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Picture Carousel Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="flex space-x-6 animate-carousel">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="flex-none w-80 h-60 relative rounded-xl overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1580000000000 + index}`}
                    alt={`Gallery image ${index}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <ArticleSection />

      {/* Video Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-primary">
            Featured Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative group">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={`https://images.unsplash.com/photo-${1580000000000 + index}`}
                    alt={`Video thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                  <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-4 text-xl font-montserrat font-semibold text-primary">
                  Video Title {index}
                </h3>
                <p className="mt-2 text-gray-600">
                  Short description of the video content and its key highlights.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
