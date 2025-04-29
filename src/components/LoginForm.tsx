
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Monster from "./Monster"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [monsterBlink, setMonsterBlink] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - in a real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (email && password) {
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Please enter email and password");
      }
    }, 1500);
  };
  
  const triggerBlink = () => {
    setMonsterBlink(true);
    setTimeout(() => setMonsterBlink(false), 300);
  };

  return (
    <div className="w-full max-w-sm relative">
      <div className="flex flex-col items-center">
        <Monster 
          size="md" 
          animated={!isLoading}
          onBlink={triggerBlink}
          className="mb-6"
        />
        
        <div className="w-full px-10 py-8 bg-white rounded-xl shadow-lg -mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome,</h2>
            <p className="text-gray-500">let's get signed in!</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sprout-blue"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sprout-blue"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-sprout-green hover:bg-sprout-dark-green text-white py-2 rounded-xl transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "go"}
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <a 
                href="/register" 
                className="text-sprout-blue hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
