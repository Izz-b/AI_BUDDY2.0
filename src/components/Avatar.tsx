
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
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
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

      {/* Friendly Robot Avatar */}
      <div 
        className={cn("relative cursor-pointer", sizes[size])}
        onClick={handleAvatarClick}
      >
        {/* Robot Head */}
        <div className="absolute inset-0 bg-sprout-purple rounded-3xl shadow-lg overflow-hidden">
          {/* Antenna */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3">
            <div className="w-4 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 rounded-full bg-sprout-orange absolute -top-3 left-1/2 -translate-x-1/2 animate-pulse"></div>
          </div>

          {/* Face */}
          <div className="absolute top-1/4 w-full flex items-center justify-center">
            {/* Eyes */}
            <div className="flex gap-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full animate-eye-blink"></div>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full animate-eye-blink"></div>
              </div>
            </div>
          </div>

          {/* Mouth */}
          <div className="absolute bottom-1/4 w-full flex items-center justify-center">
            <div className="w-16 h-4 bg-white rounded-full"></div>
          </div>

          {/* Control Panels */}
          <div className="absolute bottom-6 w-full flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
