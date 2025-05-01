
import { Award } from "lucide-react";


interface DashboardHeaderProps {
  username: string;
  points: number;
}

const DashboardHeader = ({ username, points }: DashboardHeaderProps) => {
  return (
    <>
      {/* Avatar character */}
      
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hello, {username}!</h1>
          <p className="text-gray-600">Ready to continue your learning adventure?</p>
        </div>
        <div className="flex items-center gap-2 bg-sprout-yellow/20 px-4 py-2 rounded-full">
          <Award className="h-5 w-5 text-amber-500" />
          <span className="font-medium">{points} points</span>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
