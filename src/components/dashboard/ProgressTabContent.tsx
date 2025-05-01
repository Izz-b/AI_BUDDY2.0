
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Clock, BookOpen, Award } from "lucide-react";

const ProgressTabContent = () => {
  return (
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
  );
};

export default ProgressTabContent;
