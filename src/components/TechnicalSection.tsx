import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const TechnicalSection = () => {
  const [stats, setStats] = useState({
    gaia: 0,
    baseModel: 0,
    cases: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        if (step < steps) {
          setStats({
            gaia: Math.round((96 * step) / steps),
            baseModel: Math.round((669 * step) / steps),
            cases: Math.round((215 * step) / steps)
          });
          step++;
        } else {
          clearInterval(interval);
        }
      }, increment);

      return () => clearInterval(interval);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('technical-stats');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <section className="relative overflow-hidden bg-transparent w-full flex flex-col items-center justify-center gap-12 min-h-screen px-5 py-12 max-w-[500px] mx-auto md:gap-10 md:px-5 md:py-15 md:max-w-[800px] lg:flex-row lg:gap-10 lg:px-8 lg:py-15 lg:max-w-[1200px]">
        <div className="flex items-center justify-center w-full relative z-[2]">
          <div className="flex w-full flex-col gap-12 md:gap-[70px] md:max-w-[1024px] lg:flex-1 lg:max-w-[1170px]">
            <div className="flex flex-col items-center gap-[70px] w-full">
              <div className="flex flex-col items-center gap-4 w-full text-center">
                <h3 className="text-4xl md:text-5xl font-serif text-macaron-text-primary mb-4">
                  Design and training of Macaron agent
                </h3>
                <p className="text-lg md:text-xl text-macaron-text-secondary max-w-[1020px]">
                  We develop our in-house RL platform that supports up to 1T-parameter LLMs with high efficiency and low cost, and improve three key agentic capabilities of LLMs with RL.
                </p>
              </div>
              <div className="flex flex-col items-center gap-9 w-full">
                <div className="relative overflow-visible">
                  <img
                    alt="Benchmark Chart"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1028&h=598&fit=crop&crop=center"
                    className="w-full h-auto aspect-[1.719] md:w-[923px] lg:w-[923px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[102%] hover:shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-7 w-full" id="technical-stats">
              <div className="w-full h-px bg-black/5" />
              <div className="w-full flex flex-col gap-6 md:flex-row md:gap-3.5 lg:flex-row lg:gap-3.5">
                <div className="flex-1">
                  <div className="flex flex-col items-center justify-start gap-2.5 w-[370px] md:gap-0">
                    <div className="text-center">
                      <span className="inline-block tabular-nums transition-all duration-300 cursor-pointer text-[40px] md:text-[58px] lg:text-[72px] font-light text-black font-mono">
                        {stats.gaia}%
                      </span>
                    </div>
                    <p className="text-center text-black/50 leading-relaxed text-sm md:text-lg">
                      GAIA Level 1
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col items-center justify-start gap-2.5 w-[370px] md:gap-0">
                    <div className="text-center">
                      <span className="inline-block tabular-nums transition-all duration-300 cursor-pointer text-[40px] md:text-[58px] lg:text-[72px] font-light text-black font-mono">
                        {stats.baseModel}B+
                      </span>
                    </div>
                    <p className="text-center text-black/50 leading-relaxed text-sm md:text-lg">
                      Base Model for RL
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col items-center justify-start gap-2.5 w-[370px] md:gap-0">
                    <div className="text-center">
                      <span className="inline-block tabular-nums transition-all duration-300 cursor-pointer text-[40px] md:text-[58px] lg:text-[72px] font-light text-black font-mono">
                        {stats.cases}+
                      </span>
                    </div>
                    <p className="text-center text-black/50 leading-relaxed text-sm md:text-lg">
                      Cases Generated in 36min
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-black/5" />
            </div>

            <div className="flex flex-col items-center w-full max-w-[600px] mx-auto">
              <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
                <div className="w-[290px] h-auto">
                  <Button className="bg-macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full hover:scale-105 transition-transform duration-200">
                    Read technical blog
                  </Button>
                </div>
                <div className="w-[290px] h-auto">
                  <Button 
                    disabled 
                    className="bg-[#dddddb] text-white border-none shadow-none cursor-not-allowed h-14 rounded-full px-10 text-base w-full"
                  >
                    Open weights model
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSection;