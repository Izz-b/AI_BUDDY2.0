
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, Award, Star, ArrowRight } from "lucide-react";
import Avatar from "../components/Avatar";

const RoadmapPage = () => {
  const [activeDay, setActiveDay] = useState(3); // Current day (1-based)
  
  // Sample roadmap data - in a real app this would come from an API
  const roadmapData = [
    { 
      id: 1, 
      day: 1, 
      title: "First Steps", 
      completed: true, 
      points: 50,
      tasks: ["Complete profile", "Take assessment", "Set learning goals"]
    },
    { 
      id: 2, 
      day: 2, 
      title: "Learning Basics", 
      completed: true, 
      points: 75,
      tasks: ["Complete Reading lesson 1", "Practice vocabulary", "Complete daily quiz"]
    },
    { 
      id: 3, 
      day: 3, 
      title: "Building Skills", 
      completed: false, 
      points: 100,
      tasks: ["Complete Language lesson", "Practice new words", "Take challenge quiz"]
    },
    { 
      id: 4, 
      day: 4, 
      title: "Knowledge Explorer", 
      completed: false, 
      points: 125,
      tasks: ["Discover science facts", "Complete knowledge quiz", "Earn explorer badge"]
    },
    { 
      id: 5, 
      day: 5, 
      title: "Achievement Day", 
      completed: false, 
      points: 150,
      tasks: ["Weekly assessment", "Complete bonus activities", "Review progress"]
    },
  ];

  return (
    <div className="relative pb-20">
      {/* Page title */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Learning Roadmap</h1>
          <p className="text-gray-600">Your daily learning journey</p>
        </div>
        <Badge variant="outline" className="bg-sprout-purple/10 text-sprout-purple px-3 py-1 text-sm">
          Day {activeDay} of 5
        </Badge>
      </div>

      {/* Avatar character */}
      <Avatar position="float" size="sm" />
      
      {/* Road path visual */}
      <div className="relative mx-auto max-w-4xl mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-4 bg-gradient-to-r from-sprout-green/30 via-sprout-purple/30 to-sprout-blue/30 rounded-full -translate-y-1/2 z-0"></div>
        
        <div className="relative z-10 flex justify-between items-center py-10">
          {roadmapData.map((day, index) => (
            <div key={day.id} className="flex flex-col items-center">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all ${
                  day.day < activeDay 
                    ? "bg-gradient-to-br from-green-400 to-green-500 text-white" 
                    : day.day === activeDay 
                      ? "bg-gradient-to-br from-sprout-purple to-purple-500 text-white animate-pulse" 
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {day.completed ? <Star className="h-5 w-5" /> : day.day}
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
        <Card key={day.id} className="mb-6 bg-gradient-to-br from-white to-purple-50 border-sprout-purple/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-sprout-purple">Day {day.day}: {day.title}</h2>
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{day.points} points</Badge>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Today's Tasks:</h3>
              <ul className="space-y-2">
                {day.tasks.map((task, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-sprout-purple flex items-center justify-center">
                      {i === 0 && <div className="w-2 h-2 bg-sprout-purple rounded-full"></div>}
                    </div>
                    <span className={i === 0 ? "text-gray-800" : "text-gray-500"}>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Previous and upcoming days */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous days */}
        {roadmapData
          .filter(day => day.day < activeDay)
          .map(day => (
            <Card key={day.id} className="bg-gradient-to-br from-white to-green-50 border-green-100">
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
              </CardContent>
            </Card>
          ))}

        {/* Upcoming days */}
        {roadmapData
          .filter(day => day.day > activeDay)
          .map(day => (
            <Card key={day.id} className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Map className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-500">Day {day.day}: {day.title}</h3>
                    <p className="text-sm text-gray-400">Upcoming • {day.points} points available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default RoadmapPage;
