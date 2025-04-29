
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Book, BookOpen, Award, User, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", to: "/dashboard", icon: Home },
    { name: "Reading", to: "/lessons/reading", icon: Book },
    { name: "Languages", to: "/lessons/languages", icon: BookOpen },
    { name: "General Knowledge", to: "/lessons/knowledge", icon: Award },
    { name: "Parent Portal", to: "/parent-portal", icon: User }
  ];

  return (
    <div 
      className={cn(
        "bg-sprout-green text-white pt-6 pb-3 transition-all duration-300 ease-in-out fixed inset-y-0 left-0 z-50 md:relative",
        open ? "translate-x-0 w-64" : "-translate-x-full w-64 md:translate-x-0 md:w-20"
      )}
    >
      <div className="flex items-center justify-center mb-10">
        {open ? (
          <h1 className="text-xl font-bold">Smart Sprout</h1>
        ) : (
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-sprout-green font-bold text-xl">S</span>
          </div>
        )}
      </div>

      <div className="px-3 py-2">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center px-4 py-3 mb-2 rounded-lg transition-colors duration-200",
              location.pathname === link.to
                ? "bg-white/20 font-semibold"
                : "hover:bg-white/10"
            )}
          >
            <link.icon className={cn("h-5 w-5", !open && "mx-auto")} />
            {open && <span className="ml-3">{link.name}</span>}
          </Link>
        ))}
      </div>

      <div className="absolute bottom-3 left-0 right-0 px-4">
        <div className="bg-white/10 rounded-lg p-4">
          {open ? (
            <div className="text-center">
              <p className="text-sm font-medium mb-2">Level 3 Explorer</p>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2 w-3/4"></div>
              </div>
              <p className="text-xs mt-1">75% to Level 4</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
