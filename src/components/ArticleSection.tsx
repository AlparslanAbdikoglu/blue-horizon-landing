
import { Bookmark } from "lucide-react";

const articles = [
  {
    title: "Latest Achievement",
    description: "Celebrating recent milestones and achievements in leadership and innovation.",
    date: "March 15, 2024",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "New Project Announcement",
    description: "Exploring new horizons with groundbreaking initiatives and collaborations.",
    date: "March 10, 2024",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    title: "Industry Recognition",
    description: "Honored with prestigious awards for contributions to the field.",
    date: "March 5, 2024",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Community Impact",
    description: "Making a difference through meaningful engagement and social responsibility.",
    date: "March 1, 2024",
    category: "Impact",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "Future of Leadership",
    description: "Insights into emerging trends and the evolution of leadership in the digital age.",
    date: "February 25, 2024",
    category: "Thought Leadership",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    title: "Global Initiatives",
    description: "Expanding our reach and impact through international partnerships and programs.",
    date: "February 20, 2024",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const ArticleSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary rounded-full text-primary-dark font-medium text-sm mb-4">
            Latest News
          </span>
          <h2 className="text-3xl font-montserrat font-bold text-primary-dark">
            Featured Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-dark">
                    {article.category}
                  </span>
                </div>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-primary-dark hover:text-blue-700 transition-colors"
                  aria-label="Bookmark article"
                >
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-xl font-montserrat font-semibold mb-2 text-primary-dark">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.description}
                </p>
                <button className="text-primary-dark font-medium hover:text-blue-700 transition-colors">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
