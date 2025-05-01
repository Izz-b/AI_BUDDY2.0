
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft } from "lucide-react";
import Avatar from "../components/Avatar";
import { Bubble, BubbleTail } from "../components/SpeechBubble";

interface Message {
  id: number;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialMessage = location.state?.initialMessage || "";
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = [
    "That's really interesting! Tell me more.",
    "I'm so glad you shared that with me!",
    "What was your favorite part of that?",
    "You're doing a great job! Keep going!",
    "That sounds like fun! What else did you do?",
    "I'm here to listen whenever you want to chat!",
    "Learning new things is so exciting, isn't it?",
    "You're making wonderful progress!",
    "That's a creative way of thinking about it!",
    "I'm proud of how hard you're working!",
  ];

  useEffect(() => {
    if (initialMessage) {
      handleInitialMessage(initialMessage);
    } else {
      // Welcome message if no initial message
      const welcomeMessage: Message = {
        id: 1,
        text: "Hi there! I'm Sprouty, your learning buddy. How can I help you today?",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInitialMessage = (message: string) => {
    const userMsg: Message = {
      id: 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    const botMsg: Message = {
      id: 2,
      text: "Thanks for sharing! How else can I help with your learning today?",
      sender: "assistant",
      timestamp: new Date(),
    };

    setMessages([userMsg, botMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="outline"
          size="icon"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">Chat with Sprouty</h1>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 pr-2">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "assistant" && (
                <div className="flex items-end">
                  <div className="w-10 h-10 bg-sprout-purple rounded-full mr-2 flex-shrink-0 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
              
              <div className={`max-w-[70%] relative ${message.sender === "user" ? "order-1" : "order-2"}`}>
                <Bubble className={message.sender === "user" ? "bg-sprout-green text-white" : ""}>
                  <p className="text-sm">{message.text}</p>
                </Bubble>
                <BubbleTail 
                  position={message.sender === "user" ? "right" : "left"} 
                  className={message.sender === "user" ? "bg-sprout-green border-sprout-green" : ""}
                />
              </div>

              {message.sender === "user" && (
                <div className="flex items-end ml-2">
                  <div className="w-10 h-10 bg-sprout-blue rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-end">
                <div className="w-10 h-10 bg-sprout-purple rounded-full mr-2 flex-shrink-0"></div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full border-2 border-sprout-purple/20 focus:outline-none focus:border-sprout-purple"
          />
          <Button 
            type="submit"
            className="rounded-full bg-sprout-purple hover:bg-sprout-purple/90"
          >
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </form>
      </div>

      {/* Fixed avatar at bottom right */}
      <Avatar position="right" size="sm" showQuote={false} className="bottom-24" />
    </div>
  );
};

export default Chat;
