import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Settings, BookOpen, Wrench } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-12 fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              HOME SCREEN
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold">
              WELCOME TO UTM<br />MAKERSPACE
            </h2>
          </div>

          <div className="h-px bg-foreground/20 max-w-md mx-auto" />

          <div className="space-y-6 max-w-2xl mx-auto">
            <Link to="/how-it-works" className="block">
              <button className="btn-makerspace w-full flex items-center justify-center gap-3 text-xl">
                <Settings className="w-6 h-6 text-primary" />
                HOW IT WORKS
              </button>
            </Link>

            <Link to="/booking" className="block">
              <button className="btn-makerspace w-full flex items-center justify-center gap-3 text-xl">
                <BookOpen className="w-6 h-6 text-primary" />
                BOOK A MACHINE
              </button>
            </Link>

            <Link to="/workshops" className="block">
              <button className="btn-makerspace w-full flex items-center justify-center gap-3 text-xl">
                <Wrench className="w-6 h-6 text-primary" />
                JOIN A WORKSHOP
              </button>
            </Link>
          </div>

          <div className="h-px bg-foreground/20 max-w-md mx-auto" />
        </div>
      </main>
    </div>
  );
};

export default Home;
