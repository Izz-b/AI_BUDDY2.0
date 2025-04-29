
import { useState } from "react";
import SubjectCard from "../components/SubjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, Clock, User } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("learn");
  
  const subjects = [
    {
      id: "reading",
      title: "Reading",
      description: "Build vocabulary and comprehension",
      progress: 65,
      lessons: 10,
      completed: 6,
    },
    {
      id: "languages",
      title: "Languages",
      description: "Learn new words and phrases",
      progress: 30,
      lessons: 8,
      completed: 2,
    },
    {
      id: "knowledge",
      title: "General Knowledge",
      description: "Explore science and history",
      progress: 45,
      lessons: 12,
      completed: 5,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hello, Alex!</h1>
          <p className="text-gray-600">Ready to continue your learning adventure?</p>
        </div>
        <div className="flex items-center gap-2 bg-sprout-yellow/20 px-4 py-2 rounded-full">
          <Award className="h-5 w-5 text-amber-500" />
          <span className="font-medium">250 points</span>
        </div>
      </div>

      <Tabs defaultValue="learn" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>
        <TabsContent value="learn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                id={subject.id}
                title={subject.title}
                description={subject.description}
                progress={subject.progress}
                lessons={subject.lessons}
                completed={subject.completed}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="progress">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Clock className="h-5 w-5 text-sprout-blue" />
                <CardTitle className="text-lg">Time Spent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5h 23m</div>
                <p className="text-sm text-gray-500 mt-1">This week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <BookOpen className="h-5 w-5 text-sprout-purple" />
                <CardTitle className="text-lg">Lessons Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">13</div>
                <p className="text-sm text-gray-500 mt-1">Out of 30 total</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Award className="h-5 w-5 text-amber-500" />
                <CardTitle className="text-lg">Badges Earned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
                <p className="text-sm text-gray-500 mt-1">Keep it up!</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="rewards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  Reading Champion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-2">
                    <Award className="h-10 w-10 text-purple-500" />
                  </div>
                  <p className="text-sm text-gray-600">Complete 10 reading lessons</p>
                  <div className="mt-3 text-xs text-gray-500">6/10 completed</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  Word Master
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-2">
                    <Award className="h-10 w-10 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600">Learn 50 new words</p>
                  <div className="mt-3 text-xs text-gray-500">32/50 completed</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-500" />
                  Knowledge Explorer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                    <Award className="h-10 w-10 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600">Complete 5 knowledge quizzes</p>
                  <div className="mt-3 text-xs text-gray-500">3/5 completed</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
