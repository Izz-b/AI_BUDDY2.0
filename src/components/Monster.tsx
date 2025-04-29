
import { cn } from "@/lib/utils";

interface MonsterProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  showArms?: boolean;
  animated?: boolean;
  onBlink?: () => void;
}

const Monster = ({
  className,
  size = "md",
  color = "#5CDB95",
  showArms = true,
  animated = true,
  onBlink,
}: MonsterProps) => {
  const sizes = {
    sm: "w-40 h-40",
    md: "w-72 h-72",
    lg: "w-96 h-96",
  };

  return (
    <div 
      className={cn(
        "relative monster-shadow", 
        sizes[size], 
        animated && "animate-float",
        className
      )}
    >
      {/* Body */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
      />
      
      {/* Horn Left */}
      <div 
        className="absolute w-16 h-32 -left-2 top-16 -rotate-12"
        style={{ backgroundColor: "#379683" }}
      >
        <div className="absolute inset-0 bg-inherit transform skew-x-12 rounded-tl-xl origin-bottom-right"></div>
      </div>

      {/* Horn Right */}
      <div 
        className="absolute w-16 h-32 -right-2 top-16 rotate-12"
        style={{ backgroundColor: "#379683" }}
      >
        <div className="absolute inset-0 bg-inherit transform -skew-x-12 rounded-tr-xl origin-bottom-left"></div>
      </div>
      
      {/* Hair */}
      <div className="absolute w-36 h-8 bg-green-900 rounded-full top-8 left-1/2 -translate-x-1/2">
        <div className="absolute w-6 h-6 bg-green-900 rounded-full -bottom-2 left-2"></div>
        <div className="absolute w-6 h-6 bg-green-900 rounded-full -bottom-2 left-8"></div>
        <div className="absolute w-6 h-6 bg-green-900 rounded-full -bottom-2 left-14"></div>
        <div className="absolute w-6 h-6 bg-green-900 rounded-full -bottom-2 left-20"></div>
        <div className="absolute w-6 h-6 bg-green-900 rounded-full -bottom-2 left-26"></div>
      </div>

      {/* Eyes Container */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 flex gap-8">
        {/* Left Eye */}
        <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center">
          <div 
            className={cn(
              "w-4 h-4 bg-black rounded-full", 
              animated && "animate-eye-blink"
            )}
            onClick={onBlink}
          ></div>
        </div>
        
        {/* Right Eye */}
        <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center">
          <div 
            className={cn(
              "w-4 h-4 bg-black rounded-full", 
              animated && "animate-eye-blink"
            )}
            onClick={onBlink}
          ></div>
        </div>
      </div>

      {/* Arms - conditional rendering */}
      {showArms && (
        <>
          {/* Left Arm */}
          <div 
            className="absolute w-16 h-20 -left-12 top-1/2"
            style={{ backgroundColor: color }}
          >
            <div className="absolute inset-0 bg-inherit rounded-l-full"></div>
            <div className="absolute bottom-0 left-0 w-6 h-4 bg-green-800 rounded-b-lg"></div>
            <div className="absolute bottom-0 left-6 w-6 h-4 bg-green-800 rounded-b-lg"></div>
          </div>
          
          {/* Right Arm */}
          <div 
            className="absolute w-16 h-20 -right-12 top-1/2"
            style={{ backgroundColor: color }}
          >
            <div className="absolute inset-0 bg-inherit rounded-r-full"></div>
            <div className="absolute bottom-0 right-0 w-6 h-4 bg-green-800 rounded-b-lg"></div>
            <div className="absolute bottom-0 right-6 w-6 h-4 bg-green-800 rounded-b-lg"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Monster;
