
import Navbar from "../components/Navbar";
import ArticleCarousel from "../components/ArticleCarousel";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <header className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 bg-primary rounded-full text-primary-dark font-medium text-sm mb-4 animate-fade-in">
                Welcome
              </span>
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-dark mb-6 animate-fade-in">
                Leading with Vision <br />
                and Purpose
              </h1>
              <p className="font-inter text-lg text-gray-600 mb-8 animate-fade-in">
                Dedicated to making a positive impact through innovation, leadership, and meaningful engagement.
              </p>
              <button className="bg-primary-dark text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors animate-fade-in">
                Learn More
              </button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/10" />
            </div>
          </div>
        </div>
      </header>

      {/* Article Carousel Section */}
      <section className="py-12">
        <ArticleCarousel />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
