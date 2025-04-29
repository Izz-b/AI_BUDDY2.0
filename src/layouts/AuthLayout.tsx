
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full bg-sprout-blue flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-sprout-green rounded-full opacity-20 -translate-x-8 translate-y-12" />
      <div className="absolute top-12 right-12 w-16 h-16 bg-sprout-purple rounded-full opacity-20" />
      <div className="absolute bottom-24 right-8 w-32 h-32 bg-sprout-yellow rounded-full opacity-20 translate-x-8 translate-y-8" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
