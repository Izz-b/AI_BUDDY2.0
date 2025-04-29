
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Book, BookOpen, Award, Clock, CalendarCheck, Settings } from "lucide-react";
import ProgressOverview from "../components/ProgressOverview";

const ParentPortal = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const progressData = [
    { name: "Reading", score: 65, average: 50 },
    { name: "Languages", score: 30, average: 45 },
    { name: "Knowledge", score: 45, average: 40 },
    { name: "Vocabulary", score: 80, average: 60 },
    { name: "Comprehension", score: 55, average: 50 },
  ];

  const recentActivities = [
    { 
      id: 1, 
      activity: "Completed Reading Lesson: Vowel Sounds", 
      time: "Today, 2:30 PM", 
      subject: "Reading",
      score: "8/10"
    },
    { 
      id: 2, 
      activity: "Earned Badge: Word Detective", 
      time: "Yesterday, 4:15 PM", 
      subject: "Languages",
      score: null
    },
    { 
      id: 3, 
      activity: "Struggled with: Solar System Quiz", 
      time: "Yesterday, 3:00 PM", 
      subject: "Knowledge",
      score: "3/10"
    },
    { 
      id: 4, 
      activity: "Practiced: Animal Names", 
      time: "2 days ago", 
      subject: "Languages",
      score: "7/10"
    },
  ];

  const recommendations = [
    { 
      id: 1, 
      title: "Focus on vowel sounds", 
      description: "Alex seems to struggle with long vowel sounds. Try our targeted phonics exercises.", 
      priority: "high"
    },
    { 
      id: 2, 
      title: "Reading time", 
      description: "Encourage 15 minutes of daily reading with interactive stories.", 
      priority: "medium"
    },
    { 
      id: 3, 
      title: "Science concepts", 
      description: "Solar system concepts need reinforcement. Try our space adventure module.", 
      priority: "high"
    },
  ];

  return (
    <div>
      <Button 
        variant="ghost" 
        className="mb-6 pl-2"
        onClick={() => navigate("/dashboard")}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Parent Portal</h1>
          <p className="text-gray-600">Monitor and support your child's learning journey</p>
        </div>
        <Button className="bg-sprout-purple hover:bg-sprout-purple/90 flex gap-2 items-center">
          <Settings size={16} />
          Settings
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Clock className="h-5 w-5 text-sprout-blue" />
                <CardTitle className="text-lg">Weekly Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5h 23m</div>
                <p className="text-sm text-gray-500 mt-1">+1h 10m from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <CalendarCheck className="h-5 w-5 text-sprout-green" />
                <CardTitle className="text-lg">Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12 days</div>
                <p className="text-sm text-gray-500 mt-1">Last activity: Today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Award className="h-5 w-5 text-amber-500" />
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7 Badges</div>
                <p className="text-sm text-gray-500 mt-1">2 new this week</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProgressOverview data={progressData} />
            
            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
                <CardDescription>Based on recent performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recommendations.map((rec) => (
                    <li key={rec.id} className="border-l-4 border-sprout-blue pl-4 py-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{rec.title}</h4>
                        <Badge variant={rec.priority === "high" ? "destructive" : "outline"}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Recommendations</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="progress">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Subject Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <div>
                        <span className="text-sm font-medium">Reading</span>
                        <span className="text-xs text-gray-500 ml-2">(Phonics, Comprehension, Vocabulary)</span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-sprout-blue rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <div>
                        <span className="text-sm font-medium">Languages</span>
                        <span className="text-xs text-gray-500 ml-2">(Vocabulary, Basic Grammar)</span>
                      </div>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-sprout-purple rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <div>
                        <span className="text-sm font-medium">General Knowledge</span>
                        <span className="text-xs text-gray-500 ml-2">(Science, History, Geography)</span>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-sprout-orange rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Areas of Focus</CardTitle>
                <CardDescription>Suggested emphasis for improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                    <h4 className="font-medium text-red-700">Needs Attention</h4>
                    <p className="text-sm text-red-600">Solar system concepts</p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <h4 className="font-medium text-yellow-700">Developing</h4>
                    <p className="text-sm text-yellow-600">Vocabulary building</p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                    <h4 className="font-medium text-green-700">Strong Areas</h4>
                    <p className="text-sm text-green-600">Storytelling, Animal facts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your child's learning journey this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 h-full w-px bg-gray-200"></div>
                <ul className="space-y-6 pl-10">
                  {recentActivities.map((activity) => (
                    <li key={activity.id} className="relative">
                      <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-white bg-sprout-blue"></div>
                      <div className="mb-1 flex items-center justify-between">
                        <h4 className="font-medium">{activity.activity}</h4>
                        {activity.score && (
                          <Badge variant={parseInt(activity.score) > 5 ? "default" : "destructive"}>
                            {activity.score}
                          </Badge>
                        )}
                      </div>
                      <div className="flex text-sm text-gray-500">
                        <p>{activity.time}</p>
                        <span className="mx-2">•</span>
                        <p>{activity.subject}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Parent Settings</CardTitle>
              <CardDescription>Customize your child's learning experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Learning Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Dyslexia-friendly Font</p>
                        <p className="text-sm text-gray-500">Use OpenDyslexic font for better readability</p>
                      </div>
                      <div className="h-6 w-11 rounded-full bg-sprout-green/20 p-1 transition-colors duration-200">
                        <div className="h-4 w-4 rounded-full bg-white shadow-sm transform translate-x-5 transition-transform duration-200"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Audio Narration</p>
                        <p className="text-sm text-gray-500">Read text aloud automatically</p>
                      </div>
                      <div className="h-6 w-11 rounded-full bg-gray-200 p-1 transition-colors duration-200">
                        <div className="h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Larger Text</p>
                        <p className="text-sm text-gray-500">Increase text size for easier reading</p>
                      </div>
                      <div className="h-6 w-11 rounded-full bg-gray-200 p-1 transition-colors duration-200">
                        <div className="h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Daily Goals</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Daily Learning Time</span>
                        <span className="text-sm font-medium">30 min</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-sprout-blue rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Account Settings</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Edit Child Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="mr-2 h-4 w-4" />
                      Notification Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Lock className="mr-2 h-4 w-4" />
                      Parental Controls
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Add missing imports
import { User, Bell, Lock } from "lucide-react";

export default ParentPortal;
