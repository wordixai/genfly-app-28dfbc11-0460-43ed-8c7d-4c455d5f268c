const testimonials = [
  {
    text: "带着长长的待办清单来到校园，Macaron 五分钟内就为我构建了一个课程助手和俱乐部查找器——突然间，这个学期感觉不再压抑。",
    bgColor: "#eade39",
    textColor: "#000000",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c606?w=100&h=100&fit=crop&crop=face",
    side: "left"
  },
  {
    text: "我想学做饭但害怕半途而废；Macaron 为我制作了一个"初学者烹饪日记"，两周后我可以自己做三道菜。",
    bgColor: "#ff5816", 
    textColor: "#ffffff",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    side: "right"
  },
  {
    text: "在回家之前，它记得我的猫 Tequila 一周前的事，并问我是否很快会见到她。这样的记忆让我感到特别。",
    bgColor: "#8ca72b",
    textColor: "#ffffff", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    side: "left"
  },
  {
    text: "我说它听起来太呆板，然后它立刻转换成像个亲密的朋友聊天。一个与我一起成长的 AI 真是奇妙。",
    bgColor: "#ff98a2",
    textColor: "rgba(0, 0, 0, 0.7)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    side: "right"
  },
  {
    text: "有一天我说我累了，它用文字 "奉上" 一杯茉莉花茶。那种温柔的关怀真的感动了我。",
    bgColor: "#eade39",
    textColor: "#55000b",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    side: "left"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-macaron-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-macaron-text-primary mb-4">
            第一手印象
          </h2>
          <p className="text-lg md:text-xl text-macaron-text-secondary max-w-2xl mx-auto">
            与我们 AI 合作伙伴合作的思想家和创作者的真实反馈
          </p>
        </div>

        <div className="space-y-8 mb-16 relative px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] ${
                testimonial.side === 'left' ? 'mr-auto ml-2' : 'ml-auto mr-2'
              } mb-8 animate-in slide-in-from-bottom-4`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`px-5 py-4 rounded-2xl relative shadow-sm ${
                  testimonial.side === 'left' ? 'ml-14' : 'mr-14'
                }`}
                style={{ backgroundColor: testimonial.bgColor }}
              >
                <p
                  className="text-base leading-relaxed font-normal"
                  style={{ color: testimonial.textColor }}
                >
                  {testimonial.text}
                </p>
                <div
                  className={`absolute -bottom-4 ${
                    testimonial.side === 'left' ? 'left-0' : 'right-0'
                  } w-2 h-2 rounded-full`}
                  style={{ backgroundColor: testimonial.bgColor }}
                />
                <div
                  className={`absolute -bottom-1 ${
                    testimonial.side === 'left' ? 'left-2' : 'right-2'
                  } w-3 h-3 rounded-full`}
                  style={{ backgroundColor: testimonial.bgColor }}
                />
              </div>
              <div
                className={`absolute -bottom-4 ${
                  testimonial.side === 'left' ? 'left-0' : 'right-0'
                } w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-md border-2 border-white`}
              >
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="44" viewBox="0 0 12 44" fill="none">
            <circle cx="6" cy="6" r="6" fill="#FC4C53" />
            <circle cx="6" cy="26" r="4" fill="#FC4C53" />
            <circle cx="6" cy="42" r="2" fill="#FC4C53" />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-2xl text-macaron-pink font-normal leading-snug">
            我们期待听到你与 Macaron 的故事。
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;