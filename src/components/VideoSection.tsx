import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const handlePlayClick = () => {
    // In a real app, this would open a video modal or navigate to video
    window.open('https://www.youtube.com/watch?v=7TvPqi-6El4', '_blank');
  };

  return (
    <div className="flex flex-col items-center max-w-[1200px] w-full relative z-[2] mb-[60px] px-[32px] md:mb-[80px]">
      <div 
        className="relative rounded-2xl overflow-hidden bg-black cursor-pointer w-full aspect-video max-w-[90vw] md:max-w-[750px] lg:max-w-[865px] xl:max-w-[1120px] mx-auto group"
        onClick={handlePlayClick}
      >
        <img 
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=675&fit=crop&crop=center" 
          alt="YouTube video thumbnail" 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
          <Button 
            className="relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-macaron-pink hover:bg-macaron-pink/90 border-none shadow-lg transition-all duration-200 group-hover:scale-110"
            onClick={handlePlayClick}
          >
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;