
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Monster from "../components/Monster";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [accountType, setAccountType] = useState("parent");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate fields
    if (!parentName || !email || !password || !childName || !childAge) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }
    
    // Simulate registration - in a real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Registration successful!");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col items-center">
        <div className="flex justify-center -mb-12 z-10">
          <Monster size="sm" animated={false} />
        </div>
        
        <div className="w-full px-8 py-6 bg-white rounded-xl shadow-lg pt-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500">Join Smart Sprout Academy</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <RadioGroup
                defaultValue="parent"
                value={accountType}
                onValueChange={setAccountType}
                className="flex justify-center space-x-4 mb-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="parent" id="parent" />
                  <Label htmlFor="parent">Parent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="teacher" id="teacher" />
                  <Label htmlFor="teacher">Teacher</Label>
                </div>
              </RadioGroup>
              
              <div>
                <Label htmlFor="parentName" className="text-sm font-medium">
                  {accountType === "parent" ? "Parent Name" : "Teacher Name"}
                </Label>
                <Input
                  id="parentName"
                  placeholder={accountType === "parent" ? "Parent Name" : "Teacher Name"}
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="childName" className="text-sm font-medium">
                  {accountType === "parent" ? "Child's Name" : "Class Name"}
                </Label>
                <Input
                  id="childName"
                  placeholder={accountType === "parent" ? "Child's Name" : "Class Name"}
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="childAge" className="text-sm font-medium">
                  {accountType === "parent" ? "Child's Age" : "Average Age"}
                </Label>
                <Input
                  id="childAge"
                  type="number"
                  placeholder={accountType === "parent" ? "Child's Age" : "Average Age"}
                  min="3"
                  max="12"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-sprout-green hover:bg-sprout-dark-green text-white py-2 rounded-xl transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Register"}
              </Button>
            </div>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a 
                href="/login" 
                className="text-sprout-blue hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
