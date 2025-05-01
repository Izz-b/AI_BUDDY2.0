
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const RewardsTabContent = () => {
  return (
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
  );
};

export default RewardsTabContent;
