
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  lessons: number;
  completed: number;
  className?: string;
}

const SubjectCard = ({
  id,
  title,
  description,
  progress,
  lessons,
  completed,
  className
}: SubjectCardProps) => {
  const navigate = useNavigate();
  
  const getIcon = () => {
    switch (id) {
      case "reading":
        return <Book className="h-8 w-8 text-sprout-blue" />;
      case "languages":
        return <BookOpen className="h-8 w-8 text-sprout-purple" />;
      case "knowledge":
        return <Award className="h-8 w-8 text-sprout-orange" />;
      default:
        return <Book className="h-8 w-8 text-sprout-blue" />;
    }
  };
  
  const getColor = () => {
    switch (id) {
      case "reading":
        return "bg-blue-50 hover:bg-blue-100 border-blue-100";
      case "languages":
        return "bg-purple-50 hover:bg-purple-100 border-purple-100";
      case "knowledge":
        return "bg-orange-50 hover:bg-orange-100 border-orange-100";
      default:
        return "bg-blue-50 hover:bg-blue-100 border-blue-100";
    }
  };

  const getButtonColor = () => {
    switch (id) {
      case "reading":
        return "bg-sprout-blue hover:bg-sprout-blue/90";
      case "languages":
        return "bg-sprout-purple hover:bg-sprout-purple/90";
      case "knowledge":
        return "bg-sprout-orange hover:bg-sprout-orange/90";
      default:
        return "bg-sprout-blue hover:bg-sprout-blue/90";
    }
  };

  const getProgressColor = () => {
    switch (id) {
      case "reading":
        return "bg-sprout-blue";
      case "languages":
        return "bg-sprout-purple";
      case "knowledge":
        return "bg-sprout-orange";
      default:
        return "bg-sprout-blue";
    }
  };

  return (
    <Card className={cn("transition-all duration-200 border-2", getColor(), className)}>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-lg bg-white border">
          {getIcon()}
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className={cn("h-2", getProgressColor())} />
        <p className="text-sm text-gray-500 mt-2">{completed} of {lessons} lessons completed</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => navigate(`/lessons/${id}`)} 
          className={cn("w-full", getButtonColor())}
        >
          Continue Learning
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
