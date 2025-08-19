const Footer = () => {
  return (
    <div className="w-full mt-8">
      <div 
        className="w-full pt-[60px] pb-[60px] px-4 md:px-8 lg:px-16 bg-cover bg-bottom bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop&crop=center&opacity=0.1')" 
        }}
      >
        <div className="w-full flex">
          <div className="w-[25%] flex justify-center items-start">
            <img 
              alt="Macaron Logo" 
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=56&h=56&fit=crop&crop=center"
              className="w-14 h-14 rounded-lg"
            />
          </div>
          <div className="flex-1">
            <p className="font-[600] text-macaron-text-primary mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">
              公司
            </p>
            <ul className="space-y-[16px]">
              <li>
                <a className="text-macaron-text-primary font-[400] text-[12px] md:text-[16px] hover:text-macaron-pink transition-colors" href="/blog">
                  博客
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="font-[600] text-macaron-text-primary mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">
              法律
            </p>
            <ul className="space-y-[16px]">
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-macaron-text-primary font-[400] text-[12px] md:text-[16px] hover:text-macaron-pink transition-colors" 
                  href="/privacy-policy"
                >
                  隐私政策
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-macaron-text-primary font-[400] text-[12px] md:text-[16px] hover:text-macaron-pink transition-colors" 
                  href="/terms-of-service"
                >
                  条款和条件
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="font-[600] text-macaron-text-primary mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">
              社交
            </p>
            <ul className="space-y-[16px]">
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-macaron-text-primary font-[400] text-[12px] md:text-[16px] hover:text-macaron-pink transition-colors" 
                  href="https://x.com/macaron0fficial"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a 
                  rel="noopener noreferrer" 
                  className="text-macaron-text-primary font-[400] text-[12px] md:text-[16px] hover:text-macaron-pink transition-colors" 
                  href="/linkedin"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-macaron-text-primary font-[400] text-[12px] md:text-[16px] hover:text-macaron-pink transition-colors" 
                  href="https://discord.com/invite/zEnS2JGM72"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-macaron-text-primary font-[400] text-[12px] md:text-[16px] hover:text-macaron-pink transition-colors" 
                  href="https://www.reddit.com/user/Relative-Win3271"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;