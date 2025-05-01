import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Bubble, BubbleTail } from './SpeechBubble';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // New avatar import

interface AvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  position?: "left" | "right" | "float";
  showQuote?: boolean;
}

const Avatar = ({
  className,
  size = "md",
  position = "right",
  showQuote = true,
}: AvatarProps) => {
  const [quote, setQuote] = useState<string | null>(null);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  const motivationalQuotes = [
    "You're doing great today!",
    "Every small step counts!",
    "I believe in you!",
    "Learning is an adventure!",
    "You're super smart!",
    "Keep exploring and growing!",
    "You've made amazing progress!",
    "Your brain is getting stronger!",
  ];

  useEffect(() => {
    if (showQuote) {
      const showQuoteTimeout = setTimeout(() => {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        setQuote(randomQuote);
        setShowSpeechBubble(true);

        const hideQuoteTimeout = setTimeout(() => {
          setShowSpeechBubble(false);
        }, 5000);

        return () => clearTimeout(hideQuoteTimeout);
      }, 10000);

      return () => clearTimeout(showQuoteTimeout);
    }
  }, [showQuote, quote]);

  const sizes = {
    sm: "w-32 h-32",     // 128px
    md: "w-48 h-48",     // 192px
    lg: "w-64 h-64",     // 256px
    xl: "w-80 h-80", 
  };

  const positions = {
    left: "left-6",
    right: "right-6",
    float: "animate-float",
  };

  const handleAvatarClick = () => {
    if (!showSpeechBubble) {
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setQuote(randomQuote);
      setShowSpeechBubble(true);

      setTimeout(() => {
        setShowSpeechBubble(false);
      }, 5000);
    }
  };

  return (
    <div className={cn(
      "fixed bottom-6 z-40 transition-all duration-300 ease-in-out",
      positions[position],
      className
    )}>
      {showSpeechBubble && quote && (
        <div className="mb-4 relative">
          <Bubble>
            <p className="text-sm font-medium text-black">{quote}</p> {/* Text color changed to black */}
          </Bubble>
          <BubbleTail position={position === "left" ? "left" : "right"} />
        </div>
      )}

      {/* Replaced avatar with Lottie animation */}
      <div 
        className={cn("relative cursor-pointer", sizes[size])}
        onClick={handleAvatarClick}
      >
        <DotLottieReact
          src="https://lottie.host/0200ca09-8142-4ff3-90c8-2a29ef98518c/6mxiidzfFz.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Avatar;
