
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: number;
  completed: boolean;
  locked: boolean;
  onStart: (id: string) => void;
  className?: string;
}

const LessonCard = ({
  id,
  title,
  description,
  difficulty,
  completed,
  locked,
  onStart,
  className
}: LessonCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card 
      className={cn(
        "transition-all duration-200 border-2",
        locked ? "bg-gray-100 border-gray-200 opacity-70" : completed ? "bg-green-50 border-green-200" : "bg-white border-blue-100",
        isHovering && !locked && "transform -translate-y-1 shadow-lg",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className={cn("text-lg", locked && "text-gray-400")}>{title}</CardTitle>
          <div className="flex">
            {[...Array(difficulty)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={cn(
                  "fill-current", 
                  locked ? "text-gray-300" : "text-yellow-400"
                )} 
              />
            ))}
            {[...Array(5 - difficulty)].map((_, i) => (
              <Star 
                key={i + difficulty} 
                size={16} 
                className="text-gray-200" 
              />
            ))}
          </div>
        </div>
        <CardDescription className={cn(locked && "text-gray-400")}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {completed && (
          <div className="flex items-center gap-2 text-green-600">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z" fill="currentColor"/>
            </svg>
            <span className="text-sm font-medium">Completed</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => !locked && onStart(id)} 
          disabled={locked}
          className={cn(
            "w-full",
            completed ? "bg-green-500 hover:bg-green-600" : "bg-sprout-blue hover:bg-sprout-blue/90",
            locked && "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
          )}
        >
          {locked ? "Locked" : completed ? "Review Lesson" : "Start Lesson"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
