
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LessonCard from "../components/LessonCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Monster from "../components/Monster";
import { Award, Book, BookOpen, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const LessonPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const subjectData = {
    reading: {
      title: "Reading Adventures",
      description: "Build vocabulary and reading comprehension skills",
      icon: Book,
      color: "text-sprout-blue",
      bgColor: "bg-blue-50",
    },
    languages: {
      title: "Language Exploration",
      description: "Learn new words and phrases in different languages",
      icon: BookOpen,
      color: "text-sprout-purple",
      bgColor: "bg-purple-50",
    },
    knowledge: {
      title: "Knowledge Quest",
      description: "Explore fascinating facts about science and history",
      icon: Award,
      color: "text-sprout-orange",
      bgColor: "bg-orange-50",
    },
  };
  
  const currentSubject = subjectId && subjectData[subjectId as keyof typeof subjectData] 
    ? subjectData[subjectId as keyof typeof subjectData]
    : subjectData.reading;
    
  const SubjectIcon = currentSubject.icon;
  
  const mockLessons = [
    {
      id: "lesson1",
      title: "Introduction",
      description: "Get started with the basics",
      difficulty: 1,
      completed: true,
      locked: false,
    },
    {
      id: "lesson2",
      title: "Fundamentals",
      description: "Learn core concepts",
      difficulty: 2,
      completed: false,
      locked: false,
    },
    {
      id: "lesson3",
      title: "Intermediate Challenges",
      description: "Apply your knowledge",
      difficulty: 3,
      completed: false,
      locked: true,
    },
    {
      id: "lesson4",
      title: "Advanced Topics",
      description: "Master complex ideas",
      difficulty: 4,
      completed: false,
      locked: true,
    },
    {
      id: "lesson5",
      title: "Expert Challenges",
      description: "Test your skills",
      difficulty: 5,
      completed: false,
      locked: true,
    },
  ];
  
  const mockQuestions = [
    {
      question: "What sound does the letter 'B' make?",
      options: ["/b/ as in ball", "/d/ as in dog", "/p/ as in pen"],
      answer: "/b/ as in ball",
    },
    {
      question: "Which word starts with the letter 'A'?",
      options: ["ball", "apple", "cat"],
      answer: "apple",
    },
    {
      question: "Find the rhyming word for 'cat'",
      options: ["dog", "hat", "big"],
      answer: "hat",
    },
  ];
  
  const handleStartLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentQuestion(0);
    setAttempts(0);
    setIsCorrect(null);
    setShowDialog(true);
  };
  
  const handleSubmitAnswer = () => {
    const currentQuestionData = mockQuestions[currentQuestion];
    
    if (userAnswer.toLowerCase() === currentQuestionData.answer.toLowerCase()) {
      setIsCorrect(true);
      toast.success("Correct answer! Well done!");
      
      // Move to next question or complete lesson
      if (currentQuestion < mockQuestions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setUserAnswer("");
          setIsCorrect(null);
          setAttempts(0);
        }, 1500);
      } else {
        // Lesson complete
        setTimeout(() => {
          setShowDialog(false);
          toast.success("Lesson completed! You earned 50 points!");
        }, 1500);
      }
    } else {
      setIsCorrect(false);
      setAttempts(attempts + 1);
      
      if (attempts >= 2) {
        toast("Let's try a hint: Think about the sound at the beginning of the word.");
      } else {
        toast.error("Not quite right. Try again!");
      }
    }
  };
  
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
      
      <div className="flex items-start mb-6">
        <div className={cn("p-3 rounded-lg mr-4", currentSubject.bgColor)}>
          <SubjectIcon className={cn("h-8 w-8", currentSubject.color)} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{currentSubject.title}</h1>
          <p className="text-gray-600">{currentSubject.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {mockLessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            description={lesson.description}
            difficulty={lesson.difficulty}
            completed={lesson.completed}
            locked={lesson.locked}
            onStart={handleStartLesson}
          />
        ))}
      </div>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Lesson in Progress</DialogTitle>
            <DialogDescription>
              Question {currentQuestion + 1} of {mockQuestions.length}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center py-4">
            <Monster size="sm" animated={isCorrect !== true} />
            
            <Card className="w-full mt-4">
              <CardHeader>
                <CardTitle className="text-lg">
                  {mockQuestions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockQuestions[currentQuestion].options.map((option) => (
                    <Button
                      key={option}
                      variant={userAnswer === option 
                        ? isCorrect === true 
                          ? "default" 
                          : isCorrect === false 
                            ? "destructive" 
                            : "default"
                        : "outline"
                      }
                      className="w-full justify-start text-left"
                      onClick={() => setUserAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <DialogFooter className="sm:justify-between">
            <Button
              variant="ghost"
              onClick={() => setShowDialog(false)}
            >
              Exit Lesson
            </Button>
            <Button 
              type="submit"
              onClick={handleSubmitAnswer}
              disabled={!userAnswer || isCorrect === true}
            >
              {isCorrect === true ? "Correct!" : "Check Answer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LessonPage;
