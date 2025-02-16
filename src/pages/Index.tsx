
import Navbar from "../components/Navbar";
import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";
import { Calendar, Award, Users } from "lucide-react";

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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/10" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-primary-dark" />
              <h3 className="text-2xl font-montserrat font-bold text-primary-dark">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <Award className="w-8 h-8 mx-auto mb-4 text-primary-dark" />
              <h3 className="text-2xl font-montserrat font-bold text-primary-dark">50+</h3>
              <p className="text-gray-600">Awards Received</p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <Users className="w-8 h-8 mx-auto mb-4 text-primary-dark" />
              <h3 className="text-2xl font-montserrat font-bold text-primary-dark">100k+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <ArticleSection />

      {/* Speaking Engagements Section */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-primary-dark">
            Upcoming Speaking Engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <div className="text-xl font-montserrat font-semibold mb-2 text-primary-dark">
                Global Leadership Summit
              </div>
              <div className="text-gray-600 mb-4">New York, NY • April 15, 2024</div>
              <p className="text-gray-600 mb-4">
                Keynote speech on "The Future of Innovation in Leadership"
              </p>
              <button className="text-primary-dark font-medium hover:text-blue-700 transition-colors">
                Register Now →
              </button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <div className="text-xl font-montserrat font-semibold mb-2 text-primary-dark">
                Tech Innovation Forum
              </div>
              <div className="text-gray-600 mb-4">San Francisco, CA • May 20, 2024</div>
              <p className="text-gray-600 mb-4">
                Panel discussion on "Emerging Technologies and Society"
              </p>
              <button className="text-primary-dark font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <div className="text-xl font-montserrat font-semibold mb-2 text-primary-dark">
                Impact Conference
              </div>
              <div className="text-gray-600 mb-4">London, UK • June 10, 2024</div>
              <p className="text-gray-600 mb-4">
                Workshop on "Creating Sustainable Change"
              </p>
              <button className="text-primary-dark font-medium hover:text-blue-700 transition-colors">
                Join Waitlist →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
