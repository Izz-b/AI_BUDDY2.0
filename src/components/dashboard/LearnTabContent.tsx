
import SubjectCard from "../SubjectCard";

interface Subject {
  id: string;
  title: string;
  description: string;
  progress: number;
  lessons: number;
  completed: number;
}

interface LearnTabContentProps {
  subjects: Subject[];
}

const LearnTabContent = ({ subjects }: LearnTabContentProps) => {
  return (
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
  );
};

export default LearnTabContent;
