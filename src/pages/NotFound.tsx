import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Import the avatar

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sprout-blue">
      <DotLottieReact
        src="https://lottie.host/6b690dae-9060-45ee-ab04-8607f2bc0e07/ByqeJ9jphD.lottie"
        loop
        autoplay
        className="w-48 h-48" // You can adjust the size here if needed
      />
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
        <p className="text-xl text-white/80 mb-4">
          We couldn't find the page you're looking for.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-white text-sprout-blue hover:bg-white/90"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
