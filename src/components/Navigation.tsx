import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/booking", label: "Book" },
    { path: "/workshops", label: "Workshops" },
    { path: "/community", label: "Community" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 gap-1 md:gap-4 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300",
                location.pathname === link.path
                  ? "bg-foreground text-white"
                  : "hover:bg-foreground/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
