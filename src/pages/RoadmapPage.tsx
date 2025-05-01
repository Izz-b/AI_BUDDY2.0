
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Map, 
  Award, 
  Star, 
  ArrowRight, 
  Calendar, 
  Check, 
  Trophy, 
  FlagTriangleRight 
} from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Avatar from "../components/Avatar";
import { Bubble, BubbleTail } from "../components/SpeechBubble";

const RoadmapPage = () => {
  const [activeDay, setActiveDay] = useState(3); // Current day (1-based)
  const [showQuote, setShowQuote] = useState(false);
  
  // Sample roadmap data - in a real app this would come from an API
  const roadmapData = [
    { 
      id: 1, 
      day: 1, 
      title: "First Steps", 
      completed: true, 
      points: 50,
      tasks: ["Complete profile", "Take assessment", "Set learning goals"],
      achievements: ["Quick Starter", "Goal Setter"]
    },
    { 
      id: 2, 
      day: 2, 
      title: "Learning Basics", 
      completed: true, 
      points: 75,
      tasks: ["Complete Reading lesson 1", "Practice vocabulary", "Complete daily quiz"],
      achievements: ["Word Explorer"]
    },
    { 
      id: 3, 
      day: 3, 
      title: "Building Skills", 
      completed: false, 
      points: 100,
      tasks: ["Complete Language lesson", "Practice new words", "Take challenge quiz"],
      achievements: []
    },
    { 
      id: 4, 
      day: 4, 
      title: "Knowledge Explorer", 
      completed: false, 
      points: 125,
      tasks: ["Discover science facts", "Complete knowledge quiz", "Earn explorer badge"],
      achievements: []
    },
    { 
      id: 5, 
      day: 5, 
      title: "Achievement Day", 
      completed: false, 
      points: 150,
      tasks: ["Weekly assessment", "Complete bonus activities", "Review progress"],
      achievements: []
    },
  ];

  const motivationalQuotes = [
    "Every small step is a victory on your learning journey!",
    "You're making amazing progress. Keep it up!",
    "Learning something new every day builds incredible skills over time.",
    "You're right on track to becoming a knowledge champion!",
    "The path to success is made of daily achievements. You've got this!"
  ];

  useEffect(() => {
    // Show a motivational quote after a delay
    const timer = setTimeout(() => {
      setShowQuote(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDayClick = (day: number) => {
    setActiveDay(day);
    setShowQuote(false);
    
    // Show a new quote after changing days
    setTimeout(() => {
      setShowQuote(true);
    }, 1500);
  };

  // Calculate total progress
  const completedDays = roadmapData.filter(day => day.completed).length;
  const totalDays = roadmapData.length;
  const progressPercentage = (completedDays / totalDays) * 100;

  return (
    <div className="relative pb-20">
      {/* Page title */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Learning Roadmap</h1>
          <p className="text-gray-600">Your daily learning journey</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right mr-2">
            <p className="text-sm text-gray-500">Overall Progress</p>
            <p className="font-semibold text-sprout-purple">{progressPercentage.toFixed(0)}%</p>
          </div>
          <Badge variant="outline" className="bg-sprout-purple/10 text-sprout-purple px-3 py-1 text-sm">
            Day {activeDay} of {totalDays}
          </Badge>
        </div>
      </div>

      {/* Avatar character with speech bubble */}
      <div className="relative">
        <Avatar position="float" size="sm" />
        
        {showQuote && (
          <div className="absolute left-16 top-0 w-64 z-10 animate-fade-in">
            <Bubble>
              <p className="text-sm text-gray-700">
                {motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}
              </p>
            </Bubble>
            <BubbleTail position="left" />
          </div>
        )}
      </div>
      
      {/* Road path visual */}
      <div className="relative mx-auto max-w-4xl mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-4 bg-gradient-to-r from-sprout-green/30 via-sprout-purple/30 to-sprout-blue/30 rounded-full -translate-y-1/2 z-0"></div>
        
        <div className="relative z-10 flex justify-between items-center py-10">
          {roadmapData.map((day, index) => (
            <div 
              key={day.id} 
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleDayClick(day.day)}
            >
              <div 
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 ${
                  day.day < activeDay 
                    ? "bg-gradient-to-br from-green-400 to-green-500 text-white" 
                    : day.day === activeDay 
                      ? "bg-gradient-to-br from-sprout-purple to-purple-500 text-white animate-pulse" 
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {day.completed ? (
                  <Check className="h-6 w-6" />
                ) : (
                  <span className="text-lg font-semibold">{day.day}</span>
                )}
              </div>
              
              {/* Connecting line */}
              {index < roadmapData.length - 1 && (
                <div className="absolute h-0.5 bg-gray-200 w-full z-0"></div>
              )}
              
              {/* Day label */}
              <span className={`mt-2 font-medium ${day.day === activeDay ? "text-sprout-purple" : "text-gray-500"}`}>
                Day {day.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Current day details */}
      {roadmapData.filter(day => day.day === activeDay).map(day => (
        <Card key={day.id} className="mb-6 bg-gradient-to-br from-white to-purple-50 border-sprout-purple/20 animate-fade-in">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-sprout-purple">
                Day {day.day}: {day.title}
              </CardTitle>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                <Trophy className="h-3 w-3 mr-1" />
                {day.points} points
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <FlagTriangleRight className="h-4 w-4 text-sprout-purple" />
                  Today's Tasks:
                </h3>
                <ul className="space-y-3">
                  {day.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border-2 border-sprout-purple flex items-center justify-center">
                        {i === 0 && <div className="w-2 h-2 bg-sprout-purple rounded-full"></div>}
                      </div>
                      <span className={i === 0 ? "text-gray-800" : "text-gray-600"}>
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
                {!day.completed && (
                  <Button className="mt-4 bg-sprout-purple hover:bg-sprout-purple/90">
                    Start Today's Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-sprout-purple" />
                  Daily Schedule:
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between p-2 bg-sprout-light-purple/20 rounded">
                    <span>Morning Activity</span>
                    <span className="text-sprout-purple">{day.tasks[0]}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-sprout-light-purple/40 rounded">
                    <span>Midday Practice</span>
                    <span className="text-sprout-purple">{day.tasks[1]}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-sprout-light-purple/60 rounded">
                    <span>Afternoon Challenge</span>
                    <span className="text-sprout-purple">{day.tasks[2]}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {day.completed && day.achievements.length > 0 && (
              <>
                <Separator className="my-4" />
                <div>
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-amber-500" />
                    Achievements Earned:
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {day.achievements.map((achievement, i) => (
                      <Badge key={i} className="bg-amber-50 text-amber-800 border-amber-200 px-3 py-1">
                        <Star className="h-3 w-3 mr-1 text-amber-500" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Previous day achievements carousel */}
      {completedDays > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Previous Achievements</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {roadmapData
                .filter(day => day.completed)
                .map(day => (
                  <CarouselItem key={day.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full bg-gradient-to-br from-white to-green-50 border-green-100">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Award className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-bold">Day {day.day}: {day.title}</h3>
                            <p className="text-sm text-gray-600">Completed • {day.points} points earned</p>
                          </div>
                        </div>
                        {day.achievements.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-green-100">
                            <p className="text-xs text-gray-500 mb-2">Achievements:</p>
                            <div className="flex gap-1 flex-wrap">
                              {day.achievements.map((achievement, i) => (
                                <Badge key={i} className="bg-green-50 text-green-700 border-green-200">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      {/* Upcoming days preview */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Learning Days</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmapData
          .filter(day => day.day > activeDay)
          .map(day => (
            <Card key={day.id} className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Map className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-500">Day {day.day}: {day.title}</h3>
                    <p className="text-sm text-gray-400">Upcoming • {day.points} points available</p>
                  </div>
                  <button 
                    onClick={() => handleDayClick(day.day)}
                    className="text-sm text-sprout-purple hover:underline flex items-center"
                  >
                    Preview
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default RoadmapPage;
