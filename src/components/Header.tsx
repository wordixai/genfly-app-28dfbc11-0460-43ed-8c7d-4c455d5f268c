import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full pt-[44px] md:pt-[64px]">
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-macaron-bg">
        {/* Floating Macaron Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute z-[1] group cursor-pointer left-[-80px] top-[70px] w-[200px] h-[200px] md:left-[-168px] md:top-[60px] md:w-[330px] md:h-[330px] xl:left-[-200px] xl:top-[80px] xl:w-[380px] xl:h-[380px] animate-float">
            <img 
              src="https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center" 
              alt="Left Macaron Decoration" 
              className="w-full h-full object-contain pointer-events-auto transition-transform duration-300 ease-in-out hover:rotate-[10deg] hover:-translate-x-[10px]"
            />
          </div>
          <div className="absolute z-[1] group cursor-pointer right-[-60px] top-[200px] w-[150px] h-[150px] md:right-[-79px] md:top-[251px] md:w-[199px] md:h-[199px] xl:right-[-120px] xl:top-[300px] xl:w-[260px] xl:h-[260px] animate-float" style={{ animationDelay: '1s' }}>
            <img 
              src="https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center&sat=-100&hue=30" 
              alt="Right Macaron Decoration" 
              className="w-full h-full object-contain pointer-events-auto transition-transform duration-300 ease-in-out hover:rotate-[15deg] hover:-translate-y-[20px]"
            />
          </div>
        </div>

        {/* Main Header Content */}
        <div 
          className="relative flex flex-col items-center justify-center overflow-visible w-full"
          style={{
            background: "radial-gradient(#FFE6D1, #F9F7F1)",
            backgroundPosition: "-10% 0%",
            backgroundSize: "120% 100%"
          }}
        >
          <div className="flex flex-col items-center justify-start relative z-[2] gap-[33px] w-full xl:w-[1120px]">
            {/* Logo and Title Section */}
            <div className="flex flex-col items-center w-full pt-[140px] pb-0 gap-[23px] md:pt-[142px] md:pb-0 md:gap-[50px]">
              <img 
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=200&fit=crop&crop=center" 
                alt="Macaron Logo" 
                className="object-contain w-[272px] h-[51px] md:w-[463px] md:h-[86px] xl:w-[742px] xl:h-[138px]"
              />
              <div className="flex flex-col items-center w-full">
                <h1 className="text-center text-macaron-pink text-[20px] w-auto md:text-[48px] md:max-w-[936px] md:w-full font-medium">
                  世界上第一个 Personal AI Agent
                </h1>
              </div>
            </div>
          </div>

          {/* Download Buttons Section */}
          <div className="flex flex-col items-center w-full max-w-[1200px] relative z-[2] py-[60px] md:py-[80px]">
            <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
              {/* Decorative elements */}
              <div className="absolute z-10 left-[-40px] top-[10%] transform -translate-y-1/2 md:left-[-60px] xl:left-[-80px]">
                <svg width="41" height="44" viewBox="0 0 41 44" fill="none" className="w-6 h-7 md:w-8 md:h-9 xl:w-10 xl:h-11 animate-pulse" style={{ filter: "drop-shadow(0 0 0 rgba(246, 58, 60, 0.3))" }}>
                  <path d="M 23.192 41.188 C 23.448 41.344 23.616 41.613 23.643 41.913 C 23.664 42.266 23.626 42.619 23.53 42.959 C 23.465 43.227 22.978 43.721 22.776 43.649 C 22.387 43.522 22.01 43.363 21.647 43.174 C 21.415 43.061 18.967 40.646 18.129 39.85 C 17.328 39.068 16.58 38.233 15.889 37.352 C 14.469 35.569 13.031 33.838 11.629 32.061 C 11.329 31.654 11.059 31.227 10.82 30.782 C 9.964 29.283 8.97 27.868 7.849 26.555 C 7.688 26.313 7.475 26.11 7.226 25.96 C 6.762 25.734 3.946 21.988 3.66 21.429 C 3.001 20.05 2.258 18.724 1.581 17.35 C 1.48 17.154 1.301 16.999 1.337 16.756 C 1.356 16.258 1.203 15.768 0.903 15.37 C 0.588 14.798 0.317 14.201 0.095 13.586 C 0.016 13.236 -0.014 12.875 0.006 12.516 C 0.006 12.183 0.6 12.023 0.683 12.076 C 0.992 12.225 1.105 11.886 1.278 11.737 C 1.343 11.684 1.414 11.64 1.491 11.606 C 2.058 11.951 2.594 12.344 3.096 12.778 C 3.704 13.222 4.276 13.713 4.807 14.246 C 4.807 14.246 5.027 14.55 5.342 14.972 L 6.501 16.512 C 7.362 17.648 8.283 18.825 8.479 19.057 C 8.672 19.317 8.822 19.606 8.925 19.913 C 8.984 20.05 11.682 23.397 11.771 23.546 C 12.336 24.241 12.788 25.022 13.108 25.859 C 13.167 26.031 13.263 26.19 13.387 26.323 C 14.308 27.542 15.093 28.862 15.919 30.152 C 16.341 30.812 16.84 31.418 17.291 32.055 C 17.364 32.179 17.429 32.308 17.487 32.441 C 17.559 32.605 17.645 32.762 17.743 32.911 C 18.866 34.385 19.829 35.973 21.041 37.37 C 21.32 37.691 22.277 39.517 22.615 39.868 C 22.8 40.058 22.978 41.063 23.192 41.188 Z" fill="rgb(246, 58, 60)" />
                </svg>
              </div>

              <div className="w-[290px] h-auto">
                <Button className="bg-macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full hover:scale-105 transition-transform duration-200">
                  在 App Store 安装
                </Button>
              </div>

              <div className="w-[290px] h-auto">
                <Button 
                  disabled 
                  className="bg-[#dddddb] text-white border-none shadow-none cursor-not-allowed h-14 rounded-full px-10 text-base w-full"
                >
                  Android 敬请期待
                </Button>
              </div>

              <div className="absolute z-10 right-[-40px] top-[10%] transform -translate-y-1/2 md:right-[-60px] xl:right-[-80px]">
                <svg width="41" height="44" viewBox="0 0 41 44" fill="none" className="w-6 h-7 md:w-8 md:h-9 xl:w-10 xl:h-11 animate-pulse" style={{ filter: "drop-shadow(0 0 0 rgba(246, 58, 60, 0.3))", animationDelay: '1s' }}>
                  <path d="M 23.192 41.188 C 23.448 41.344 23.616 41.613 23.643 41.913 C 23.664 42.266 23.626 42.619 23.53 42.959 C 23.465 43.227 22.978 43.721 22.776 43.649 C 22.387 43.522 22.01 43.363 21.647 43.174 C 21.415 43.061 18.967 40.646 18.129 39.85 C 17.328 39.068 16.58 38.233 15.889 37.352 C 14.469 35.569 13.031 33.838 11.629 32.061 C 11.329 31.654 11.059 31.227 10.82 30.782 C 9.964 29.283 8.97 27.868 7.849 26.555 C 7.688 26.313 7.475 26.11 7.226 25.96 C 6.762 25.734 3.946 21.988 3.66 21.429 C 3.001 20.05 2.258 18.724 1.581 17.35 C 1.48 17.154 1.301 16.999 1.337 16.756 C 1.356 16.258 1.203 15.768 0.903 15.37 C 0.588 14.798 0.317 14.201 0.095 13.586 C 0.016 13.236 -0.014 12.875 0.006 12.516 C 0.006 12.183 0.6 12.023 0.683 12.076 C 0.992 12.225 1.105 11.886 1.278 11.737 C 1.343 11.684 1.414 11.64 1.491 11.606 C 2.058 11.951 2.594 12.344 3.096 12.778 C 3.704 13.222 4.276 13.713 4.807 14.246 C 4.807 14.246 5.027 14.55 5.342 14.972 L 6.501 16.512 C 7.362 17.648 8.283 18.825 8.479 19.057 C 8.672 19.317 8.822 19.606 8.925 19.913 C 8.984 20.05 11.682 23.397 11.771 23.546 C 12.336 24.241 12.788 25.022 13.108 25.859 C 13.167 26.031 13.263 26.19 13.387 26.323 C 14.308 27.542 15.093 28.862 15.919 30.152 C 16.341 30.812 16.84 31.418 17.291 32.055 C 17.364 32.179 17.429 32.308 17.487 32.441 C 17.559 32.605 17.645 32.762 17.743 32.911 C 18.866 34.385 19.829 35.973 21.041 37.37 C 21.32 37.691 22.277 39.517 22.615 39.868 C 22.8 40.058 22.978 41.063 23.192 41.188 Z" fill="rgb(246, 58, 60)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;