import { useEffect, useState } from "react";

const macaronImages = [
  "https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center&hue=60",
  "https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center&hue=120",
  "https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center&hue=180",
  "https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center&hue=240",
  "https://images.unsplash.com/photo-1587736804910-95d4c901d3e0?w=400&h=400&fit=crop&crop=center&hue=300"
];

const MacaronRolling = () => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => (prev - 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100px] md:h-[140px] overflow-hidden">
      <div 
        className="bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%] flex flex-row items-center justify-center gap-24 pl-32 relative w-full"
        style={{ 
          transform: `translateX(${translateX}px) translateZ(0px)` 
        }}
      >
        {macaronImages.map((image, index) => (
          <div 
            key={index}
            className="relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72"
            style={{ 
              transform: `rotate(${15.4754 + (index * 30)}deg) translateZ(0px)` 
            }}
          >
            <img 
              alt={`Macaron ${index + 1}`} 
              src={image}
              className="w-full h-full object-cover rounded-full shadow-lg animate-rotate-slow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MacaronRolling;