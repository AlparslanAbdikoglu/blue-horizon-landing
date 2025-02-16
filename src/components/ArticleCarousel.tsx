
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Latest Achievement",
    description: "Celebrating recent milestones and achievements in leadership and innovation.",
    date: "March 15, 2024",
  },
  {
    title: "New Project Announcement",
    description: "Exploring new horizons with groundbreaking initiatives and collaborations.",
    date: "March 10, 2024",
  },
  {
    title: "Industry Recognition",
    description: "Honored with prestigious awards for contributions to the field.",
    date: "March 5, 2024",
  },
  {
    title: "Community Impact",
    description: "Making a difference through meaningful engagement and social responsibility.",
    date: "March 1, 2024",
  },
];

const ArticleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="absolute inset-0 bg-primary/10 rounded-xl -z-10" />
      <h2 className="text-3xl font-montserrat font-bold text-center mb-8 text-primary-dark">Latest Articles</h2>
      
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-xl font-montserrat font-semibold mb-2 text-primary-dark">
                  {article.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {article.description}
                </p>
                <button className="mt-4 text-primary-dark font-medium hover:text-blue-700 transition-colors">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-primary transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6 text-primary-dark" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-primary transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6 text-primary-dark" />
        </button>
      </div>
    </div>
  );
};

export default ArticleCarousel;
