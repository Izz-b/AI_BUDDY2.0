import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Import avatar

interface ConversationPanelProps {
  className?: string;
}

const ConversationPanel = ({ className }: ConversationPanelProps) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      navigate('/chat', { state: { initialMessage: message } });
    }
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sprout-purple/20 flex flex-col items-center">
        
        {/* Avatar */}
        <div className="w-48 h-48 mb-4">
          <DotLottieReact
            src="https://lottie.host/28b5c690-f6a1-46a7-b389-77e52ed286fc/xwkmnbdT2M.lottie"
            loop
            autoplay
          />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="text-sprout-purple h-6 w-6" />
          <h2 className="text-xl font-bold text-gray-800">Chat with Sprouty</h2>
        </div>
        
        <p className="text-gray-600 mb-6 text-center">
          How was your day today? What did you learn?
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your answer here..."
            className="flex-1 px-4 py-2 rounded-full border-2 border-sprout-purple/20 focus:outline-none focus:border-sprout-purple text-black"          />
          <Button 
            type="submit"
            size="icon"
            className="rounded-full bg-sprout-purple hover:bg-sprout-purple/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConversationPanel;
