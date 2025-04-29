
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Monster from "../components/Monster";

const Index = () => {
  const navigate = useNavigate();

  // Auto redirect after a short delay (for demo purposes)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sprout-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-sprout-yellow opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-sprout-purple opacity-20 rounded-full"></div>
      
      <Monster animated={true} className="mb-8" />
      
      <div className="text-center mb-8 z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Smart Sprout Academy
        </h1>
        <p className="text-xl text-white/90 mb-6">
          Smart learning that grows with your child
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <Button 
          onClick={() => navigate("/login")}
          className="bg-white text-sprout-blue hover:bg-white/90 font-bold px-8 py-6 text-lg"
        >
          Sign In
        </Button>
        <Button 
          onClick={() => navigate("/register")}
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg"
        >
          Register
        </Button>
      </div>
      
      <p className="text-white/80 mt-8 z-10">Redirecting to login in a few seconds...</p>
    </div>
  );
};

export default Index;
