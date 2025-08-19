import { Button } from "@/components/ui/button";

const showcaseApps = [
  {
    title: "Fit Plan Generator",
    description: "Your body your blueprint fitness planner",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "Baby Meal Planner", 
    description: "Fresh baby meals from farm to spoon",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "Law Study Guide",
    description: "Law wisdom at your fingertips today",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "Book Match Guide",
    description: "Find your next favorite book match", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "Foundation Match Pro",
    description: "Find your perfect foundation match today",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "StyleSync",
    description: "Your closet styles your perfect day",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "GreenWave Energy",
    description: "Clean energy powers tomorrows future today",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "Beauty Brand Hub",
    description: "Natural beauty for modern radiance",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=600&fit=crop&crop=center&hue=60"
  },
  {
    title: "Bubble Tea Filter",
    description: "Sweet sips that fit your limits",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "Gift Guide Pro",
    description: "Perfect gifts for every birthday story",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "Serum Compare", 
    description: "Smart serum picks for your skin",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=600&fit=crop&crop=center"
  },
  {
    title: "MBTI Game Match",
    description: "Find your gaming personality match",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=600&fit=crop&crop=center"
  }
];

const ShowcaseSection = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="text-center mb-12 md:mb-16 p-8">
          <h2 className="text-4xl md:text-5xl font-serif text-macaron-text-primary mb-4">
            实际操作
          </h2>
          <p className="text-lg md:text-xl text-macaron-text-secondary max-w-2xl mx-auto">
            其他 AI 助手帮助你工作。Macaron 帮助你更好生活。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {showcaseApps.map((app, index) => (
            <div key={index} className="group">
              <div className="relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-macaron-cream border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[356px]">
                <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                  <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                    <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                      <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-macaron-text-primary flex-1 min-w-0">
                        {app.title}
                      </h3>
                    </div>
                    <p className="text-[16px] leading-[1.3] text-macaron-text-secondary line-clamp-2 min-h-[2.6em]">
                      {app.description}
                    </p>
                  </div>
                  <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                    <div className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                         style={{ backgroundImage: `url(${app.image})` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full mt-12 md:mt-16">
          <div className="w-[290px] h-auto">
            <Button className="bg-macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full hover:scale-105 transition-transform duration-200">
              在灵感库中查看超过 200 个案例
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;