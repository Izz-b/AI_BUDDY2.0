
import { cn } from "@/lib/utils";

interface BubbleProps {
  children: React.ReactNode;
  className?: string;
}

export const Bubble = ({ children, className }: BubbleProps) => {
  return (
    <div className={cn(
      "bg-white p-4 rounded-2xl shadow-md animate-fade-in border-2 border-sprout-purple/30",
      className
    )}>
      {children}
    </div>
  );
};

interface BubbleTailProps {
  position?: "left" | "right";
  className?: string;
}

export const BubbleTail = ({ position = "right", className }: BubbleTailProps) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 w-4 h-4 transform rotate-45 bg-white border-b-2 border-r-2 border-sprout-purple/30 translate-y-1/2",
        position === "right" ? "right-6" : "left-6",
        className
      )}
    />
  );
};
