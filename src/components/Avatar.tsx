
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Bubble, BubbleTail } from './SpeechBubble';

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
    // Show quotes periodically
    if (showQuote) {
      const showQuoteTimeout = setTimeout(() => {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        setQuote(randomQuote);
        setShowSpeechBubble(true);

        // Hide quote after 5 seconds
        const hideQuoteTimeout = setTimeout(() => {
          setShowSpeechBubble(false);
        }, 5000);

        return () => clearTimeout(hideQuoteTimeout);
      }, 10000); // Show quote every 10 seconds

      return () => clearTimeout(showQuoteTimeout);
    }
  }, [showQuote, quote]);

  const sizes = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
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
      
      // Hide quote after 5 seconds
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
      {/* Speech Bubble */}
      {showSpeechBubble && quote && (
        <div className="mb-4 relative">
          <Bubble>
            <p className="text-sm font-medium">{quote}</p>
          </Bubble>
          <BubbleTail position={position === "left" ? "left" : "right"} />
        </div>
      )}

      {/* Simple Smiling Avatar */}
      <div 
        className={cn("relative cursor-pointer", sizes[size])}
        onClick={handleAvatarClick}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sprout-purple to-sprout-purple/90 rounded-full shadow-lg overflow-hidden animate-pulse">
          {/* Simple Face */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Eyes */}
            <div className="flex gap-4 mb-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            {/* Smile */}
            <div className="w-12 h-6 border-b-4 border-white rounded-full mt-1"></div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
