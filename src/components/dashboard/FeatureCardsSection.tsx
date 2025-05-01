
import { Award, Map, User } from "lucide-react";
import FeatureCard from "../FeatureCard";
import { useNavigate } from "react-router-dom";

interface FeatureCardsSectionProps {
  onTabChange: (tab: string) => void;
}

const FeatureCardsSection = ({ onTabChange }: FeatureCardsSectionProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <FeatureCard
        icon={<Award className="h-6 w-6 text-amber-500" />}
        title="Badges & Achievements"
        description="Collect awards for your progress"
        bgColor="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100"
        onClick={() => onTabChange("rewards")}
      />
      <FeatureCard
        icon={<Map className="h-6 w-6 text-green-500" />}
        title="Learning Roadmap"
        description="See your journey and upcoming lessons"
        bgColor="bg-gradient-to-br from-green-50 to-teal-50 border-green-100"
        onClick={() => onTabChange("progress")}
      />
      <FeatureCard
        icon={<User className="h-6 w-6 text-blue-500" />}
        title="Parent Portal"
        description="Insights for parents and guardians"
        bgColor="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100"
        onClick={() => navigate('/parent-portal')}
      />
    </div>
  );
};

export default FeatureCardsSection;
