
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConversationPanel from "../components/ConversationPanel";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import FeatureCardsSection from "../components/dashboard/FeatureCardsSection";
import LearnTabContent from "../components/dashboard/LearnTabContent";
import ProgressTabContent from "../components/dashboard/ProgressTabContent";
import RewardsTabContent from "../components/dashboard/RewardsTabContent";

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
    <div className="relative">
      <DashboardHeader username="Alex" points={250} />

      {/* Conversation Panel */}
      <div className="mb-8">
        <ConversationPanel />
      </div>

      {/* Feature Cards */}
      <FeatureCardsSection onTabChange={setActiveTab} />

      <Tabs defaultValue="learn" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>
        <TabsContent value="learn">
          <LearnTabContent subjects={subjects} />
        </TabsContent>
        <TabsContent value="progress">
          <ProgressTabContent />
        </TabsContent>
        <TabsContent value="rewards">
          <RewardsTabContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
