
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  bgColor?: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  onClick,
  bgColor = "bg-gradient-to-br from-purple-50 to-pink-50",
  className
}: FeatureCardProps) => {
  return (
    <Card 
      className={cn(
        bgColor,
        "border-2 border-white/50 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-3 rounded-full bg-white/80 shadow-inner">
            {icon}
          </div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
